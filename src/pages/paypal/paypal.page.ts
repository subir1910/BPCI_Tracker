import {Component, ViewChild} from '@angular/core';
import {PayPal, PayPalPayment, PayPalConfiguration } from "@ionic-native/paypal";
import { Config } from '../../config';
import {LoadingController, NavParams, Platform, ToastController, Tabs, Nav, NavController, ViewController} from "ionic-angular";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {PatientListPage} from "../patient-list/patient-list";
import {PatientTabPage} from "../patient-tab/patient-tab";

@Component({
  selector: 'page-paypal',
  templateUrl: 'paypal.html'
})

export class PayPalPage {

  @ViewChild(Nav) nav: Nav;

  currencies = ['USD'];
  payPalEnvironment: string = 'PayPalEnvironmentProduction';

  public totalAmount;
  public patientID;
  loading: any;
  public patientName;

  public sss: 'PAY-1AB23456CD789012EF34GHIJ';
  public newTransactionID;

  public transectionID : any;
  tab: Tabs;

  constructor(
    public toastCtrl: ToastController,
    public plt: Platform, private payPal: PayPal,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public viewCtrl : ViewController
  ) {
    this.totalAmount = this.navParams.get('totalAmpount');
    console.log(this.totalAmount);
    this.patientID = this.navParams.get('patientID');
    this.patientName = this.navParams.get('patientName');


  }
  payment: PayPalPayment = new PayPalPayment(this.navParams.get('totalAmpount'), 'USD', 'Description', 'sale');

  closeModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  makePayment() {
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code
    });
    this.payPal.init({
      PayPalEnvironmentProduction: Config.payPalEnvironmentProduction,
      PayPalEnvironmentSandbox: Config.payPalEnvironmentSandbox
    }).then(() => {
      this.payPal.prepareToRender(
        this.payPalEnvironment,
        new PayPalConfiguration({

        })).then(() => {
        this.payPal.renderSinglePaymentUI(this.payment).then((response) => {
          //alert(`Successfully paid. Status = ${response.response.state}`);
          console.log(response);
          //alert(response.response.id);
          this.transectionID = response.response.id;
          this.newTransactionID = this.transectionID.replace("PAY-","");
          console.log(this.newTransactionID);
          //alert(this.newTransactionID);

          this.authService.postData({transactionid : this.newTransactionID, EntryId : this.patientID, amount: this.totalAmount, status : 'Completed'}, 'update_payment');
          this.navCtrl.push(PatientTabPage);
        }, () => {
          console.error('Error or render dialog closed without being successful');
          this.authService.postData({transactionid : this.newTransactionID, EntryId : this.patientID, amount: this.totalAmount, status : 'Pending'}, 'update_payment');
        });
      }, () => {
        console.error('Error in configuration');
        this.authService.postData({transactionid : this.newTransactionID, EntryId : this.patientID, amount: this.totalAmount, status : 'Canceled'}, 'update_payment');

      });
    }, (err) => {
      console.log(err);
      console.log(err);
      this.presentToast('ERROR ,' +err);
      console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
      this.navCtrl.push(PatientTabPage, {tabIndex : 1});
    });
  }

  showLoader(msg){
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }

  presentToast(error) {
    let toast = this.toastCtrl.create({
      message: error,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
