import {Component, OnInit} from '@angular/core';
import {
  AlertController, LoadingController, ModalController, NavController, NavParams,
  ToastController
} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {UserData} from "../../providers/auth-service/user-data";
import {UpdatePatientPage} from "../update-patient/update-patient";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'page-patient-list',
  templateUrl: 'patient-list.html',
})
export class PatientListPage implements OnInit{
  showSearchbar: boolean = false;
  loading: any;
  userDetails : any;
  patient_data: any;
  user_id: string;
  time_out: any;
  searchData: any;
  hasSearchItems: any;
  noSearchData: any;

  paymentStatusoption: any;

  userCollection: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private authService: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    public userData: UserData,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
  ){
    this.user_id = this.userData.userid;
    this.time_out = null;
  }

  ngOnInit(){

  }

  doRefresh(refresher) {
    this.authService.getPatientList({user_id: this.user_id }, 'get_patient_list')
      .then((result) => {
        this.userCollection = result;
        refresher.complete();
        //console.log(this.userCollection);
      }, (err) => {
        console.log(err);
        refresher.complete();
      });

    /*setTimeout(() => {
      console.log('Async operation has ended');

    }, 3000);*/
  }

  ionViewDidLoad() {
    this.showLoader('Loading Patients..');
    this.showingPatientList();
  }

  showingPatientList(){
    this.authService.getPatientList({user_id: this.user_id }, 'get_patient_list')
      .then((result) => {
        this.noSearchData = null;
        this.userCollection = result;
        this.loading.dismiss();
        if(this.userCollection.response.patient_data == ""){
          this.noSearchData = "No Patient Found";
        }
        //console.log(this.userCollection);
      }, (err) => {
        this.loading.dismiss();
      });
  }

  changeStatus(p_status, p_id){
    this.showLoader('Updating Status..');
    if(p_status === 'active'){
      p_status = 'deactivate';
    }
    else{
      p_status = 'active';
    }
    this.authService.statusUpdate({user_id: this.user_id, EntryId: p_id, status: p_status}, 'active_deactive_patient')
      .then((result) => {
        this.showingPatientList();
        console.log('-------');
        console.log(result);
        this.paymentStatusoption = result;
        let paymentStatus = this.paymentStatusoption.response.message;
        this.loading.dismiss();
        if(paymentStatus == "Payment is due"){
          this.presentToast('Payment is due for this patinet');
        }else{
          console.log(p_status);
          if(p_status == "deactivate") {
            this.presentToast('Alerts Deactivated');
          }
          else{
            this.presentToast('Alerts Activated');
          }

          console.log('dsfdf');
        }
      }, (err) => {
        this.loading.dismiss();
        console.log('eRROR');
        console.log(err);
      })
  }

  onDeletePatient(patientID){
    const alert = this.alertCtrl.create({
      title: 'Delete Patient',
      message: 'Are you sure to want to delete patient?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () =>{
            this.showLoader('Deleting Patient..');
            this.authService.deletePatient({user_id: this.user_id, EntryId: patientID}, "delete_patient" )
              .then((result) => {
                  this.showingPatientList();
              }, (err) => {
                  this.loading.dismiss();
              })
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () =>{
            console.log('Cancel');
            //alert.dismiss();
          }
        }
      ]
    });
    alert.present();
  }

  showUpdatePatient(patientID, p_last_name, p_first_name, p_language, p_timezone, p_tracking_start_date, p_tracking_start_date1, p_tracking_period, p_mobile, p_alt_mobile, p_only_address, p_city, p_state, p_zip, p_country, p_notes, p_episode, p_referral_source, p_payment_done){
    let updateModal = this.modalCtrl.create(UpdatePatientPage, {
      user_id: this.user_id,
      p_patientID: patientID,
      p_last_name: p_last_name,
      p_first_name: p_first_name,
      p_language: p_language,
      p_timezone: p_timezone,
      p_trackingstart: p_tracking_start_date,
      p_trackingstart1: p_tracking_start_date1,
      p_tracking_period: p_tracking_period,
      p_mobile: p_mobile,
      p_alt_mobile: p_alt_mobile,
      p_only_address: p_only_address,
      p_city: p_city,
      p_state: p_state,
      p_zip: p_zip,
      p_country: p_country,
      p_notes: p_notes,
      p_episode: p_episode,
      p_referral_source: p_referral_source,
      p_payment_done: p_payment_done
    });
    updateModal.present();
  }

  searchPatientData(form: NgForm){
    this.hasSearchItems = '';
    this.noSearchData = null;
    this.showLoader('Searching..');
    this.authService.searchPatient({user_id : this.user_id, search : form.value.search}, 'search_patient')
      .then((result) => {
        this.loading.dismiss();
        this.hasSearchItems = result;
        console.log("search " + this.hasSearchItems);
        if(this.hasSearchItems.response.message !== "No Data"){
          this.searchData = result;
        }
        else {
          this.noSearchData = 'No Data Found';
        }

        this.userCollection = null;
        this.showSearchbar = false;
      }, (err) => {
        this.loading.dismiss();
        console.log('err');
      });
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
  // Showing Loader after click on login page
  showLoader(msg){
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
  }
}
