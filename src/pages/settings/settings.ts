import {Component, OnInit} from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {NgForm} from "@angular/forms";
import {UserData} from "../../providers/auth-service/user-data";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage implements OnInit{
  responseData: any;
  user_email: any;
  userDetails: any;
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authServices: AuthServiceProvider,
    public userdata: UserData,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {

  }

  ngOnInit(){
    this.authServices.getUserInfo({user_id:  this.userID}, 'user_profile')
      .then(result => {
        if(this.userID != undefined){
          this.userDetails = result;
          this.user_email = this.userDetails.response.email;
          console.log(this.user_email);
        }
      }, (err) => {
      });
  }
  userID = this.userdata.userid;
  ionViewDidLoad() {

  }

  updatePassword(form: NgForm){
    if(form.value.password !== "" || form.value.repeat_password !== ""){
      if(form.value.password == form.value.repeat_password){
        this.showLoader('Updating Password..');
        this.authServices.updatePassword({user_id : this.userID, password: form.value.password}, 'user_settings')
        .then((result) => {
          console.log('Successfully updated');
          this.loading.dismiss();
          this.toastMsg('Password Changed Successfully');
          this.responseData = result;
          console.log(this.responseData);
        }, (err) => {
          this.loading.dismiss();
        });
      }
      else{
        this.presentAlert('Pawword did not matched');
      }
    }
    else{
      this.presentAlert('All Fields are required');
    }
    
  }
  showLoader(msg){
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }
  toastMsg(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'BPCI Tracker Says',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
