import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the OtpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  optParameter: any;
  id: any;
  //optForm: {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider
  ) {
    this.optParameter = this.navParams.get("otpNumber");
    this.id = this.navParams.get("docId");
    console.log(this.navParams.get("docId"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }
  varifacationNumber(form: NgForm){
    //this.optParameter = this.navParams.get("otpNumber");

    console.log(form.value.otp);

    this.authService.getOtp({"otp_number":form.value.otp,"user_id":this.id}, "otp_check")
      .then((result) => {
      console.log("hhhh" + result);
        if(this.optParameter == form.value.otp){

        }
        else{

        }
      }, (err) => {
        console.log("Error" + err);
      })

  }

}
