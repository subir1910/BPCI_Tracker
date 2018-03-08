import { Component } from '@angular/core';
import {
  AlertController, LoadingController, ModalController, NavController, NavParams, Platform,
  ToastController
} from 'ionic-angular';
import { Device } from '@ionic-native/device';
import {RegisterPage} from "../register/register";
import {TabsPage} from "../tabs/tabs";
import {NgForm} from "@angular/forms";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {UserData} from "../../providers/auth-service/user-data";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import {ProfilePage} from "../profile/profile";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: any;
  userId: any;
  response_messege: any;

  device_id: any;
  device_name: any;

  //loginData = { 'username':'', 'password':'' };
  //loginData = {"user_login":"","password":"rspl123!@#","device_id":"5c55a68c7e73178d9f927b844e65b7f887e8bdd496ce5c1e0c91449fa9a12c2a","device_type": "iOS"}

  data: any;

  constructor(
    public platform: Platform,
    public device:Device,
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public userData: UserData,
    public modalCtrl: ModalController
  ) {}


  /*Login Method*/
  public login(form: NgForm) {

    if(form.value.email === '' || form.value.password === ''){
      let alert = this.alertCtrl.create({
        title: 'Register Error',
        subTitle: 'All fields are required',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    this.showLoader();
    //console.log(form.value);
    this.authService.login({user_login: form.value.email, password:form.value.password, device_id: this.device.uuid, device_type:this.device.platform}, "login")
      .then((result) => {

      this.loading.dismiss();
      this.data = result;

      localStorage.setItem('userData', JSON.stringify(this.data.response.userdata));
      this.response_messege = this.data.response.message;
      if(this.response_messege === "Username is not correct"){
        let alertUser = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Username is not correct',
          buttons: ['OK']
        });
        alertUser.present();
        return;
      }
      else if(this.response_messege === "Password is incorrect"){
        let alertUser = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Password is incorrect',
          buttons: ['OK']
        });
        alertUser.present();
        return;
      }
      else{
        var userid = this.data.response.userdata.user_id;
        var name = this.data.response.userdata.name;
        var deviceid = this.data.response.userdata.device_id;
        this.userData.setUserID(userid);
        console.log(userid);
        this.userData.login(userid, name, deviceid, this.data);

        this.userData.userid;
        this.navCtrl.setRoot(ProfilePage, {
          id: userid,
          name: name
        });
      }

    }, (err) => {
      this.loading.dismiss();
      this.presentToast('Error ,' + err);

      let errors = '';
      if(err.message === 'UNPROCESSABLE ENTITY') errors += 'Email isn\'t valid.<br/>';
      if(err.message === 'UNAUTHORIZED') errors += 'Password is required.<br/>';

        let alert = this.alertCtrl.create({
          title:'Login Error',
          subTitle:errors,
          buttons:['OK']
        });
        alert.present();
    });

  }

  forgotPassword(){
    let passwordModal = this.modalCtrl.create(ForgotPasswordPage);
    passwordModal.present();
  }

  // Showing Loader after click on login page
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    this.loading.present();
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


  createAccount(){
    this.navCtrl.push(RegisterPage);
  }
  loadProfile(){
    this.navCtrl.push(TabsPage);
  }
  onLogin(form: NgForm){
    console.log(form.value);
    this.navCtrl.push(TabsPage);
  }



}
