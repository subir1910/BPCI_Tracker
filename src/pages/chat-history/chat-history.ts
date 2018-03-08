import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the ChatHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat-history',
  templateUrl: 'chat-history.html',
})
export class ChatHistoryPage implements OnInit{
  public user_id: any;
  public lead_id: any;
  responseLenth: any;
  loading: any;
  chatData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController
  ) {
    this.user_id = this.navParams.get('user_id');
    this.lead_id = this.navParams.get('lead_id');
  }

  ngOnInit(){
    this.showLoader();
    this.authService.loadChatHistory({user_id: this.user_id, lead_id: this.lead_id}, 'chat_history')
      .then((result) => {
        this.loading.dismiss();
        this.chatData = result;
        console.log('dataaaaaaaaaaaaaa');
        console.log(this.chatData);
        this.responseLenth = this.chatData.response.length;
        console.log('sdfsdfsdfsdf '+this.responseLenth);

      }, (err) => {
        this.loading.dismiss();
      })
  }

  closeModal(){
    this.navCtrl.pop();
  }
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Loading chats..'
    });
    this.loading.present();
  }

}
