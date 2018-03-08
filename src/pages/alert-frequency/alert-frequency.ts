import {Component, OnInit} from '@angular/core';
import { LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {UserData} from "../../providers/auth-service/user-data";

/**
 * Generated class for the AlertFrequencyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-alert-frequency',
  templateUrl: 'alert-frequency.html',
})
export class AlertFrequencyPage implements OnInit{

  options: any;
  userID: any;
  alertData: any;
  formValue: any;
  data: any;

  loading: any;

  monday: any;
  tuesday: any;
  wednesday: any;
  thrusday: any;
  friday: any;
  saturday: any;
  sunday: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public userData: UserData,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
    this.options = [
      {name:'OptionA', value:'first_opt', checked:true},
      {name:'OptionB', value:'second_opt', checked:false},
      {name:'OptionC', value:'third_opt', checked:true}
    ];
    this.userID = this.userData.userid;
}
  alertFrequencyUpdate(form: NgForm){
    var alertdays =[];
      if(form.value['monday'] == true){
        alertdays.push('Monday');
      }
      if(form.value['tuesday'] == true){
        alertdays.push('Tuesday');
      }
      if(form.value['wednesday'] == true){
        alertdays.push('Wednesday');
      }
      if(form.value['thrusday'] == true){
        alertdays.push('Thursday');
      }
      if(form.value['friday'] == true){
        alertdays.push('Friday');
      }
      if(form.value['saturday'] == true){
        alertdays.push('Saturday');
      }
      if(form.value['sunday'] == true){
        alertdays.push('Sunday');
      }

      this.formValue = alertdays;
      console.log('tstuser'+alertdays);
      var form_data = new FormData();
      form_data.append('alertdays', this.formValue);
      form_data.append('user_id', this.userID);
      this.showLoader('Updating...');
      this.authService.alertFrequency(form_data, 'set_frequency_alert')
        .then((result) => {
            this.loading.dismiss();
            this.presentToast('Updated Successfully');
        }, (err) => {
            this.loading.dismiss();
            this.presentToast('Error ,' + err);
        })
    }

    ngOnInit(){
      this.showLoader('Loading...');
      this.authService.postData({user_id : this.userID}, 'get_frequency_alert')
        .then((result) => {
          console.log(result);
          this.alertData = result;
          this.data = this.alertData.response.data;
          //console.log(this.data.indexOf('Monday'));
          console.log(this.data);
          if(this.data.indexOf('Monday') !== -1){
            this.monday = true;
          }
          if(this.data.indexOf('Tuesday') !== -1){
            this.tuesday = true;
          }
          if(this.data.indexOf('Wednesday') !== -1){
            this.wednesday = true;
          }
          if(this.data.indexOf('Thursday') !== -1){
            this.thrusday = true;
          }
          if(this.data.indexOf('Friday') !== -1){
            this.friday = true;
          }
          if(this.data.indexOf('Saturday') !== -1){
            this.saturday = true;
          }
          if(this.data.indexOf('Sunday') !== -1){
            this.sunday = true;
          }
          this.loading.dismiss();
        }, (err) => {
          console.log(err);
          this.loading.dismiss();
          this.presentToast('Error, '+ err);
        });
    }

    showLoader(msg){
      this.loading = this.loadingCtrl.create({
        content: msg
      });
      this.loading.present();
    }
    presentToast(msg){
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true
      });

      toast.onDidDismiss(() => {
        console.log('dismissed toast');
      });
      toast.present();
    }
}
