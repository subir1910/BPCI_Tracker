import {Component, OnInit} from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {UserData} from "../../providers/auth-service/user-data";

/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage implements OnInit{
userID: any;
notificationData: any;
loading: any;
notificationStatus: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public userData: UserData,
    public loadingCtrl: LoadingController
  ) {
    this.userID = this.userData.userid;
  }


  ngOnInit(){
    this.showLoader("Loading Notifications");
    this.authService.postData({user_id: this.userID}, 'user_notification')
      .then((result) => {
        this.notificationData = result;
        console.log('dsddddddd');
        console.log(this.notificationData);
        this.loading.dismiss();
        if(this.notificationData.response == null){
          this.notificationStatus = "No Notifications found";
        }
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
      })
  }
  // Showing Loader after click on login page
  showLoader(msg){
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }

}
