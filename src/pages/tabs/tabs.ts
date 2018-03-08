import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {SettingsPage} from "../settings/settings";
import {NotificationsPage} from "../notifications/notifications";
import {Tabs} from "ionic-angular";
import {UserData} from "../../providers/auth-service/user-data";

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  @ViewChild('page-tabs') tabRef: Tabs;

  userID: any;

  profilePage: any = ProfilePage;
  settingsPage: any = SettingsPage;
  notificationPage: any = NotificationsPage;

  mySelectedIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user_data: UserData) {

    let tabIndex = this.navParams.get('tabIndex');

    if(tabIndex){
      this.mySelectedIndex = tabIndex;
    }

    this.user_data.getUserID();

    this.mySelectedIndex = navParams.data.tabIndex || 0;

    let id = navParams.get('id');
    let name = navParams.get('name');
    console.log('iddddd' + id);
  }
  ionViewDidEnter(){
    this.userID = this.user_data.userid;
  }


}
