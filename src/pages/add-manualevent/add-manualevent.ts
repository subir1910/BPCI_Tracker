import {Component, OnInit} from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {NgForm} from "@angular/forms";
import {UserData} from "../../providers/auth-service/user-data";

/**
 * Generated class for the AddManualeventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-manualevent',
  templateUrl: 'add-manualevent.html',
})
export class AddManualeventPage implements OnInit{
  userDetails : any;
  loading: any;
  user_id: any;

  entrydate: any;

  userCollection: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    public userdata: UserData,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) { 
    this.user_id = this.userdata.userid; 
    let todayDate = new Date();
    this.entrydate = todayDate.toISOString();

    console.log(this.entrydate);
  }

  ngOnInit(){
    this.showLoader('loading...');
    this.authService.getPatientList({user_id: this.user_id }, 'get_patient_list')
      .then((result) => {
        this.userCollection = result;
        console.log('Manual Eveny');
        this.loading.dismiss();
        //console.log(this.userCollection);
      }, (err) => {
        this.loading.dismiss();
      });
  }

  addManualReport(form: NgForm){
    this.showLoader('Updating...');
    this.authService.addManualReport({formData: form.value}, 'manual_report', this.user_id)
      .then((result) => {
        console.log('ddd');
        this.loading.dismiss();
        this.presentToast('Added Successfully');
        form.reset();
        let todayDate = new Date();
        this.entrydate = todayDate.toISOString();
      }, (err)=> {
        this.loading.dismiss();
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddManualeventPage');
  }

  // Showing Loader after click on login page
  showLoader(msg){
    this.loading = this.loadingCtrl.create({
      content: msg
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

}
