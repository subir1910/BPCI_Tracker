import { NgForm } from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import { LoadingController, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import {ChatHistoryPage} from "../chat-history/chat-history";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {Status_report} from "../../data/status_report.interface";
import {UserData} from "../../providers/auth-service/user-data";

/**
 * Generated class for the PatientStatusreportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-patient-statusreport',
  templateUrl: 'patient-statusreport.html',
})
export class PatientStatusreportPage implements OnInit{
  statusCollection: {status: string, response: Status_report[], Total_record: any};
  statusData: any;
  loading: any;
  user_id: any;

  params: Object;
  pushPage: any;

  episode: any;
  episodeData: any;
  statusReport : any;
  
  hasSearchItems: any;
  noSearchData: any;
  searchData: any;

  searchStatusReport: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public userdata: UserData,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {
    this.user_id = this.userdata.userid;
    this.pushPage = ChatHistoryPage

    this.authService.postData({user_id: this.user_id}, 'get_period_and_fee')
      .then((result) => {
        this.episodeData = result;
        
        this.episode = this.episodeData.response.patient_episode_type;
        console.log("Episode Data: " + this.episode);
      }, (err) => {
        console.log(err);
      });

  }

  ionViewDidLoad() {
  }

  ngOnInit(){
    this.showLoader('Loading...');
    this.authService.patientStatusReport({user_id: this.user_id, page: '0'}, 'patient_status_report').then((result) =>{
      this.statusData = result;
      this.statusCollection = this.statusData;
      this.statusReport = this.statusCollection.response;
      console.log('Status Report');
      console.log(this.statusReport);
      this.loading.dismiss();
      //this.loading.dismiss();
    }, (err) => {
     // this.loading.dismiss();
    })
  }

  showLoader(msg){
    this.loading = this.loadingCtrl.create({
      content: msg
    })
    this.loading.present();
  }
  onLoadChat(patientID){
    let loadChat = this.modalCtrl.create(ChatHistoryPage, {lead_id: patientID, user_id: this.user_id});
    loadChat.present();
  }
  searhStatus(form: NgForm){
    this.hasSearchItems = '';
    this.noSearchData = null;
    if((form.value.start_date || form.value.end_date) || form.value.episode_type){
      this.showLoader('Searching...');
      // https://bpcitracker.com/api/users/get_periods
      this.authService.patientStatusReport({"user_id" : this.user_id, "start_date" : form.value.start_date, "end_date" : form.value.end_date , "episode_type" : form.value.episode_type}, 'get_patient_status_report_by_search').then((result) => {
        this.hasSearchItems = result;
        if(this.hasSearchItems.response !== null){
          this.searchData = result;
          this.searchStatusReport = this.searchData.response;
          this.loading.dismiss();
        }
        else {
          this.noSearchData = 'No Data Found';
          this.hasSearchItems = null;
          this.loading.dismiss();
        }
        this.statusReport = null;
      }, (err) => {
        console.log("Error " + err);
        this.loading.dismiss();
      })
    }
    else{
      this.presentConfirm();
    }
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'BPCI tracker Says',
      message: 'Please Input Both Date OR Select Patient Episode Type',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
