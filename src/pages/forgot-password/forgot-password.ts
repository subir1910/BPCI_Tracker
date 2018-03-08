import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  result_messege: any;
  data: any;
  loading: any;

  hasSentPassword: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {}

  forgotPassword(form: NgForm){
    this.showLoader();
    this.authService.forgotPassword({userdata: form.value.userdata}, 'forgot_password')
      .then((result) => {
        this.data = result;
        this.result_messege = this.data.response.message;
        console.log('MEssege, ' + this.result_messege);
        if(this.result_messege === 'Email or Username Not Registered'){
          this.loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: "Email or usermane not registered",
            buttons: ['OK']
          });
          alert.present();
          return;
        }
        else{
          this.hasSentPassword = true;
          this.loading.dismiss();
          this.presentToast("Password changed Successfully..");
        }
        console.log(result);
      }, (err) => {
        console.log(err);
      });
  }
  closeModal() {
    this.navCtrl.pop();
  }
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Sending Request...'
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
