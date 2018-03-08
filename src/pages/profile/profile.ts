import { Component, OnInit } from '@angular/core';
import {
  Events, LoadingController, MenuController, ModalController, NavController, NavParams,
  Tabs, ToastController
} from 'ionic-angular';
import {UserData} from "../../providers/auth-service/user-data";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {EditProfilePage} from "../edit-profile/edit-profile";
import {LoginPage} from "../login/login";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit{
  tab: Tabs;
  userID: string;
  userDetails: any;
  loading: any;

  userGetID: any;

  organization_name: any;
  organization_physical_address: any;
  address: any;
  city: any;
  state: any;
  zip_code: any;
  primary_contact: any;
  organization_business_phone: any;
  alt_contact: any;
  public hasLogin: any;
  id:any;
  name: any;
  website: any;

  updateStatus: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    public userData: UserData,
    public loadingCtrl: LoadingController,
    private authService: AuthServiceProvider,
    public events: Events,
    public modalCtrl : ModalController,
    public toastCtrl: ToastController,
  ) {
    this.tab = this.navCtrl.parent;
    this.userID = this.userData.userid;

    if(navParams.get('id') != undefined){
      this.id = navParams.get('id');
    }
    else{
      this.id = this.userData.userid;
    }
    this.name = navParams.get('name');
  }

  doRefresh(refresher) {
    this.showPatientDetails();
    refresher.complete();
  }

  ngOnInit(){
    this.events.publish('user:login');
    this.showPatientDetails();
  }

  showPatientDetails(){
    this.showLoader();

    this.authService.getUserInfo({user_id:  this.id}, 'user_profile')
      .then((result) => {
        this.userDetails = result;
        console.log('profileeeeee');
        console.log(this.userDetails);
        //console.log(this.userDetails.response);
        if ( this.userDetails != null){
          this.hasLogin = 1;
          this.zip_code = this.userDetails.response.zip_code;
          this.organization_name= this.userDetails.response.organization_name;
          this.organization_physical_address = this.userDetails.response.organization_physical_address;
          this.address= this.userDetails.response.address;
          this.city = this.userDetails.response.city;
          this.state = this.userDetails.response.state;
          this.alt_contact = this.userDetails.response.alt_contact;
          this.primary_contact = this.userDetails.response.primary_contact;
          this.organization_business_phone = this.userDetails.response.organization_business_phone;
          this.website = this.userDetails.response.website;
        }

        this.loading.dismiss();
      }, (err) => {
        this.loading.dismiss();
        this.presentToast('Error, ' + err);
      });
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(EditProfilePage, {
      user_id: this.userID,
      organization_name: this.organization_name,
      organization_physical_address: this.organization_physical_address,
      address: this.address,
      city: this.city,
      state: this.state,
      zip_code: this.zip_code,
      alt_contact: this.alt_contact,
      primary_contact: this.primary_contact,
      organization_business_phone: this.organization_business_phone,
      website: this.website
    });
    profileModal.onDidDismiss(data => {
      console.log('uuuuu');
      this.showPatientDetails();
    });
    profileModal.present();
  }
  // Present Toast
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    this.loading.present();
  }

  expanded = false;
  somehowToggleExpand() {
    this.expanded = true;
  }
  onOpenMenu(){
    this.menuCtrl.open();
  }

  ionViewDidLoad() {
    console.log('userid issss Profile : ' + this.userID);
  }

}
