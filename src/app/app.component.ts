import {Component, ViewChild} from '@angular/core';
import {Events, MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import {ProfilePage} from "../pages/profile/profile";
import {TabsPage} from "../pages/tabs/tabs";
import {NotificationsPage} from "../pages/notifications/notifications";
import {PatientTabPage} from "../pages/patient-tab/patient-tab";
import {PatientStatusreportPage} from "../pages/patient-statusreport/patient-statusreport";
import {Storage} from "@ionic/storage";
import {SettingsPage} from "../pages/settings/settings";
import {AddPatientPage} from "../pages/add-patient/add-patient";
import {PatientListPage} from "../pages/patient-list/patient-list";
import {AlertFrequencyPage} from "../pages/alert-frequency/alert-frequency";
import {AddManualeventPage} from "../pages/add-manualevent/add-manualevent";
import {UserData} from "../providers/auth-service/user-data";
import {RegisterPage} from "../pages/register/register";
import {PayPalPage} from "../pages/paypal/paypal.page";
import {AuthServiceProvider} from "../providers/auth-service/auth-service";

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any;
  profilePage = ProfilePage;
  tabsPage = TabsPage;
  patientTabs = PatientTabPage;
  userid: any;
  activeTabs: any;
  organization_name: any;
  userDetails: any;

  userIDs: any;


  userID: any;
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  accountPages: PageInterface[] = [
    { title: 'Profile', name: 'TabsPage', component: TabsPage, tabComponent: ProfilePage, index: 0, icon: 'contact' },
    { title: 'Notifications', name: 'TabsPage', component: TabsPage, tabComponent: NotificationsPage, index: 1, icon: 'notifications-outline' },
    { title: 'Settings', name: 'TabsPage', component: TabsPage, tabComponent: SettingsPage, index: 2, icon: 'settings' }
  ];
  patientPages: PageInterface[] = [
    { title: 'Add Patient', name: 'PatientTabPage', component: PatientTabPage, tabComponent: AddPatientPage, index: 0, icon: 'person-add' },
    { title: 'Patient List', name: 'PatientTabPage', component: PatientTabPage, tabComponent: PatientListPage, index: 1, icon: 'ios-list-box-outline' },
    { title: 'Alert Frequency', name: 'PatientTabPage', component: PatientTabPage, tabComponent: AlertFrequencyPage, index: 2, icon: 'ios-warning-outline' },
    { title: 'Add Manual Alert', name: 'PatientTabPage', component: PatientTabPage, tabComponent: AddManualeventPage, index: 3, icon: 'ios-calendar-outline' }
  ];
  loggedInPages: PageInterface[] = [
    { title: 'Patient Status Report', name: 'PatientStatusreportPage', component: PatientStatusreportPage, icon: 'ios-pulse-outline' },
    { title: 'Logout', name: 'LoginPage', component: LoginPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
    { title: 'Signup', name: 'SignupPage', component: RegisterPage, icon: 'person-add' }
  ];

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    public storage: Storage,
    public userData: UserData,
    public events: Events,
    public authService: AuthServiceProvider
  ) {

    this.storage.set('userId', this.userData.userid).then(() => {
      this.storage.get('userId').then((value) => {
        console.log('storage : '+ value); // is empty...
      });
    });

    console.log('raw : ' + this.userData.getUserID()); // shows the api token

    this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        console.log(hasLoggedIn);
        if (hasLoggedIn) {
          this.rootPage = PatientListPage;
        } else {
          this.rootPage = LoginPage;
        }
        this.platformReady();
      });

    this.events.subscribe('user:login', () => {
      console.log(this.userData.getUserID());
      console.log('yesssss');
    });
    let username = this.userData.getUsername();
    let userAllData = this.userData.getUserAllData();

    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    this.enableMenu(true);

    this.listenToLoginEvents();

    this.userid = this.userData.userid;

    console.log('useridddd ' +this.userID);
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.userIDs = this.userData.userid;
      console.log('iddddddd '+ this.userIDs);
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.getUserInfo({user_id:  this.userIDs}, 'user_profile')
        .then((result) => {
          this.userDetails = result;
          console.log('UserDetails');
          console.log(this.userDetails);
          //console.log(this.userDetails.response);
          

          if(this.userDetails.response != null){
            this.organization_name = this.userDetails.response.organization_name;
          }
        }, (err) => {

        });
    });
  }


  onLoad(page: any){
    this.menuCtrl.close();
    this.nav.setRoot(page);
  }

  openPage(page: PageInterface){
    console.log('Page Name: ');
    console.log(page);
    console.log(page.name);
    let params = {};
    this.menuCtrl.close();
    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario

    if (page.index) {
      params = { tabIndex: page.index };
      console.log(params);
    }


    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      console.log('select Identifier');
      console.log(this.nav.getSecondaryIdentifier());
      if(this.activeTabs !== '' && this.activeTabs == page.name){
        this.nav.getActiveChildNavs()[0].select(page.index);
      }
      else{
        this.activeTabs = page.name;
        this.nav.setRoot(page.name, params).catch((err) => {
          console.log(`Didn't set the nav root: ${err}`);
        });
      }

      console.log('have nav');
      // Set the root of the nav with params if it's a tab index
    } else{
      console.log('sdfsdf');
      this.nav.setRoot(page.name, params).catch((err) => {
        console.log(err);
      });
    }
    if(page.logsOut){
      // Give the menu time to close before changing to logged out
      this.nav.setRoot(page.name, params).catch((err) => {
        console.log(err);
      })
      this.userData.logout();
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }
  enableMenu(loggedIn: boolean) {
    this.menuCtrl.enable(loggedIn, 'loggedInMenu');
    this.menuCtrl.enable(!loggedIn, 'loggedOutMenu');
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}

