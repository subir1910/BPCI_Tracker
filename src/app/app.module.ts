import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpModule} from "@angular/http";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {TermsPage} from "../pages/register/terms/terms";
import {ProfilePage} from "../pages/profile/profile";
import {NotificationsPage} from "../pages/notifications/notifications";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {AddManualeventPage} from "../pages/add-manualevent/add-manualevent";
import {AddPatientPage} from "../pages/add-patient/add-patient";
import {AlertFrequencyPage} from "../pages/alert-frequency/alert-frequency";
import {PatientListPage} from "../pages/patient-list/patient-list";
import {PatientTabPage} from "../pages/patient-tab/patient-tab";
import {PatientStatusreportPage} from "../pages/patient-statusreport/patient-statusreport";
import {ChatHistoryPage} from "../pages/chat-history/chat-history";
import {UniqueDeviceID} from "@ionic-native/unique-device-id";
import {Device} from "@ionic-native/device";
import {PatientService} from "../services/patients";
import { IonicStorageModule } from '@ionic/storage';
import {UserData} from "../providers/auth-service/user-data";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";
import {CloudModule, CloudSettings} from "@ionic/cloud-angular";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {UpdatePatientPage} from "../pages/update-patient/update-patient";
import {PayPalPage} from "../pages/paypal/paypal.page";
import { PayPalModule } from '../pages/paypal/paypal.module';
import {PayPal} from "@ionic-native/paypal";
import {FormsModule} from "@angular/forms";
import {OtpPage} from "../pages/otp/otp";

import { TextMaskModule } from 'angular2-text-mask';


const cloudSettings: CloudSettings  = {
  'core': {
    'app_id': 'a626a924'
  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TermsPage,
    ProfilePage,
    TabsPage,
    NotificationsPage,
    SettingsPage,
    AddManualeventPage,
    AddPatientPage,
    AlertFrequencyPage,
    PatientListPage,
    PatientTabPage,
    PatientStatusreportPage,
    ChatHistoryPage,
    EditProfilePage,
    ForgotPasswordPage,
    UpdatePatientPage,
    OtpPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      pageTransition: 'ios-transition',
      menuType: 'overlay',
      prodMode: true,
      tabSubPages:false
    }, {
      links: [
        {component: TabsPage, name: 'TabsPage', segment: 'tabs-page'},
        {component: PatientTabPage, name: 'PatientTabPage', segment: 'patient-page'},
        {component: ProfilePage, name: 'ProfilePage', segment: 'profile-page'},
        {component: PatientStatusreportPage, name: 'PatientStatusreportPage', segment: 'patient-status-report'},
        {component: AddPatientPage, name: 'AddPatientPage', segment: 'add-patient'},
        {component: PatientListPage, name: 'PatientListPage', segment: 'patient-list'},
        {component: LoginPage, name: 'LoginPage', segment: 'login'},
        {component: AddManualeventPage, name: 'AddManualeventPage', segment:'add-manual-event'},
        {component: AlertFrequencyPage, name: 'AlertFrequencyPage', segment:'alert-frequency'},
        {component: SettingsPage, name: 'SettingsPage', segment:'settings'},
        {component: PayPalPage, name: 'PayPalPage', segment:'settings'}
      ]
    }),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot(),
    PayPalModule,
    FormsModule,
    TextMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TermsPage,
    ProfilePage,
    TabsPage,
    NotificationsPage,
    SettingsPage,
    AddManualeventPage,
    AddPatientPage,
    AlertFrequencyPage,
    PatientListPage,
    PatientTabPage,
    PatientStatusreportPage,
    ChatHistoryPage,
    EditProfilePage,
    ForgotPasswordPage,
    UpdatePatientPage,
    OtpPage
  ],
  providers: [
    PayPal,
    StatusBar,
    SplashScreen,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    UniqueDeviceID,
    Device,
    PatientService,
    Storage,
    UserData,
  ]
})
export class AppModule {
  showSubmenu: boolean = false;

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }
}
