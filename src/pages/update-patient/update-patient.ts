import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import {FormBuilder, NgForm, Validators, AbstractControl} from "@angular/forms";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {PayPalPage} from "../paypal/paypal.page";

/**
 * Generated class for the UpdatePatientPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-update-patient',
  templateUrl: 'update-patient.html',
})
export class UpdatePatientPage {
  loading: any;
  updatePt: any;

  userId: any;
  priceData: any;
  masks: any;
  updatePatientFormGroup: any;

  service_type: any;
  episode: any;
  timezone: any;

  paymentInfo: any;
  tracking_period: any;
  tracking_period_value: any;
  patientData: any;
  couponName: any;
  amountLess: any;
  calculateAmnt: any;
  beforeCoupanAmnt: any;
  showValue: any;
  percentage_value: any;
  couponAmount:any;
  couponData: any;

  addPt = {
    input_4_6: 'United States',
    input_9: 'PatientTrackingEntry',
    input_18_1: '$29.999',
    input_18_2: '$30.99',
    input_18_3: '1',
    input_20: '1',
    input_1_21: '30 Days|0',
    input_22: +'',
    _gform_submit_nonce_1: 'FF4154SDFD',
    is_submit_1: '1',
    gform_submit: '1',
    gform_target_page_number_1: '1',
    gform_source_page_number_1: '0',
  };

  public EntryId: any;
  public input_1_10_6: AbstractControl;
  public input_1_10_3: AbstractControl;
  public input_1_11:AbstractControl;
  public input_1_12:AbstractControl;
  public input_1_2:AbstractControl;
  public input_1_3:AbstractControl;
  public input_1_4_2:AbstractControl;
  public input_1_4_3:AbstractControl;
  public input_1_4_4:AbstractControl;
  public input_1_4_5:AbstractControl;
  public input_1_4_6:AbstractControl;
  public input_14: AbstractControl
  public input_1_7: AbstractControl;
  public input_1_21: AbstractControl;
  public input_1_15:AbstractControl;
  public input_1_6:AbstractControl;
  public input_1_8:AbstractControl;
  public input_1_13: AbstractControl;
  public input_1_23: AbstractControl;
  public input_22: AbstractControl;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public authService: AuthServiceProvider,
      public loadingCtrl: LoadingController,
      public viewCtrl: ViewController,
      public formBuilder: FormBuilder,
      public modalCtrl: ModalController,
      public toastCtrl: ToastController
    ) {
      this.userId = this.navParams.get('user_id');
      this.authService.postData({user_id: this.userId}, 'get_period_and_fee')
        .then((result) => {
          this.priceData = result;
          if(this.priceData.response.Service_Fee){
            this.addPt.input_18_1 = this.priceData.response.Service_Fee;
          }
          this.addPt.input_22 = +this.addPt.input_18_1.substring(1);
          //console.log(this.addPt.input_22);

          this.service_type = this.priceData.response.Service_type_for_tracking_period;
          this.episode = this.priceData.response.patient_episode_type;
          this.timezone = this.priceData.response.patient_timezone;
          //this.loading.dismiss();
          // We iterate the array in the code
          for(let period_data of this.service_type) {
            console.log(period_data.value);
          }
          console.log(this.priceData);
        }, (err) => {
          console.log(err);
          //this.loading.dismiss();
        });

      this.tracking_period  = this.navParams.get('p_tracking_period');
      switch (this.tracking_period) {
        case "30 Days":
          this.tracking_period_value = "30 Days|0";
          break;
        case "60 Days":
          this.tracking_period_value = "60 Days|20";
          break;
        case "90 Days":
          this.tracking_period_value = "90 Days|40";
          break;
      }

      console.log('sdfdsf');
      console.log('------: ' + this.tracking_period_value);
      console.log('sdfsdf' + this.navParams.get('p_trackingstart1'));
      this.updatePatientFormGroup = formBuilder.group({
        EntryId: [this.navParams.get('p_patientID')],
        input_1_10_6: [this.navParams.get('p_last_name')],
        input_1_10_3 : [this.navParams.get('p_first_name')],
        input_1_11 : [this.navParams.get('p_language')],
        input_1_12 : [this.navParams.get('p_timezone')],
        input_1_2 : [this.navParams.get('p_mobile'), [Validators.required]],
        input_1_3 : [this.navParams.get('p_alt_mobile'), [Validators.required]],
        input_1_4_2 : [this.navParams.get('p_only_address')],
        input_1_7 : [this.navParams.get('p_trackingstart1')],
        input_1_8 : [this.navParams.get('p_tracking_period')],
        input_1_21 : [this.tracking_period_value],
        input_1_4_3 : [this.navParams.get('p_city')],
        input_1_4_4 : [this.navParams.get('p_state')],
        input_1_4_5 : [this.navParams.get('p_zip')],
        input_1_4_6 : [this.navParams.get('p_country')],
        input_14 : [this.navParams.get('p_notes')],
        input_1_15 : [this.navParams.get('p_episode')],
        input_1_6 : [this.navParams.get('p_referral_source')],
        input_1_13: [],
        input_22: [],
        input_1_23 : []
      });



      this.EntryId = this.updatePatientFormGroup.controls['EntryId'];
      this.input_1_10_6 = this.updatePatientFormGroup.controls['input_1_10_6'];
      this.input_1_10_3 = this.updatePatientFormGroup.controls['input_1_10_3'];
      this.input_1_11 = this.updatePatientFormGroup.controls['input_1_11'];
      this.input_1_12 = this.updatePatientFormGroup.controls['input_1_12'];
      this.input_1_2 = this.updatePatientFormGroup.controls['input_1_2'];
      this.input_1_3 = this.updatePatientFormGroup.controls['input_1_3'];
      this.input_1_4_2 = this.updatePatientFormGroup.controls['input_1_4_2'];
      this.input_1_8 = this.updatePatientFormGroup.controls['input_1_8'];
      this.input_1_4_3 = this.updatePatientFormGroup.controls['input_1_4_3'];
      this.input_1_4_4 = this.updatePatientFormGroup.controls['input_1_4_4'];
      this.input_1_4_5 = this.updatePatientFormGroup.controls['input_1_4_5'];
      this.input_1_4_6 = this.updatePatientFormGroup.controls['input_1_4_6'];
      this.input_14 = this.updatePatientFormGroup.controls['input_14'];
      this.input_1_15 = this.updatePatientFormGroup.controls['input_15'];
      this.input_1_6 = this.updatePatientFormGroup.controls['input_1_6'];
      console.log('00000'+this.navParams.get('p_payment_done'));
      if(this.navParams.get('p_payment_done') == "no"){
        this.input_1_21 = this.updatePatientFormGroup.controls['input_1_21'];
        this.input_1_7 = this.updatePatientFormGroup.controls['input_1_7'];
        this.input_1_13 = this.updatePatientFormGroup.controls['input_1_13'];
        this.input_1_23 = this.updatePatientFormGroup.controls['input_1_23'];
        this.input_22 = this.updatePatientFormGroup.controls['input_22'];
      }

      console.log('sdffdsfsfs ' + this.navParams.get('p_only_address'));
      this.paymentInfo = this.navParams.get('p_payment_done');

      //calling function for onload price calculate
      console.log('Priceeee ' + this.tracking_period_value);
      this.calculatePrice(this.tracking_period_value);





/*
      this.EntryId = this.navParams.get('p_patientID');
      this.input_1_10_6 = this.navParams.get('p_last_name');
      this.input_1_10_3 = this.navParams.get('p_first_name');
      this.input_1_11 = this.navParams.get('p_language');
      this.input_1_12 = this.navParams.get('p_timezone');
      this.input_1_2 = this.navParams.get('p_mobile');
      this.input_1_3 = this.navParams.get('p_alt_mobile');
      this.input_1_4_2 = this.navParams.get('p_address');
      this.input_1_7 = this.navParams.get('p_trackingstart')
      this.input_1_4_3 = this.navParams.get('p_city');
      this.input_1_4_4 = this.navParams.get('p_state');
      this.input_1_4_5 = this.navParams.get('p_zip');
      this.input_1_4_6 = this.navParams.get('p_country');

      this.input_14 = this.navParams.get('p_notes');
      this.input_15 = this.navParams.get('p_episode');

      this.input_1_6 = this.navParams.get('p_referral_source');
      this.input_1_8 = this.navParams.get('p_tracking_period');

      console.log('Start Tracking Date' + this.input_1_7);
*/
      this.updatePt = {
        EntryId: this.EntryId,
      };

      this.masks = {
        phoneNumber: [/[1-9]/, /\d/, /\d/, '-',/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        cardNumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        cardExpiry: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/],
        orderCode: [/[a-zA-z]/, ':', /\d/, /\d/, /\d/, /\d/]
      };
    }

  calculatePrice(value){

    let toArray =  value.toString().split("|");
    let optionPrice = +toArray[1];
    optionPrice.toFixed(2);

    let selectedPrice = +optionPrice.toFixed(2);
    let couponValue = 0;
    if(this.showValue){
      couponValue = this.showValue;
    }
    let serviceAmount = +this.addPt.input_18_1.substring(1);
    this.addPt.input_22 = serviceAmount + selectedPrice - couponValue;

    if(this.percentage_value){
      console.log(this.percentage_value);

      this.calculateAmnt = (((serviceAmount + selectedPrice)/this.percentage_value)*100).toFixed(2);
      console.log('Cal' + this.calculateAmnt);
      this.showValue = this.calculateAmnt;
      this.addPt.input_22 = (+serviceAmount + +selectedPrice) - this.calculateAmnt;
    }
  }
  cancelCoupan(previousAmount, form: NgForm){
    this.couponData = '';
    form.value.input_1_23 = '';
    this.addPt.input_22 = previousAmount;
    this.showValue = 0;
    this.percentage_value = 0;
    this.calculatePrice(form.value.input_1_21);
  }
  checkCoupan(form: NgForm){
    this.showLoader('Checking Coupon..');
    let form_data = new FormData();
    form_data.append('existing_coupons', '');
    form_data.append('couponCode', form.value.input_1_23);
    form_data.append('formId', '1');
    form_data.append('total', '29.99');

    this.authService.checkCoupans(form_data, 'apply_coupen')
      .then((res) => {
        console.log(res);
        this.couponData = res;
        if(!this.couponData.invalid_reason){
          let coupanCode = form.value.input_1_23;
          let amount = this.couponData.coupons.response.amount;
          this.couponAmount = this.couponData.coupons.response.amount;
          this.couponName = this.couponData.coupons.response.name;
          let type = this.couponData.coupons.response.type;
          let code = this.couponData.coupons.response.code;
          let usages_count = this.couponData.coupons.response.usage_count;
          this.beforeCoupanAmnt = this.addPt.input_22;

          if(type == "percentage"){
            this.amountLess = this.addPt.input_22;
            this.calculateAmnt = ((this.addPt.input_22/amount)*100).toFixed(2);
            this.showValue = ((this.addPt.input_22/amount)*100).toFixed(2);
            this.addPt.input_22 = this.addPt.input_22-this.calculateAmnt;

            this.percentage_value = amount;

          } else if(type === 'flat'){
            this.calculateAmnt = (this.addPt.input_22-amount).toFixed(2);

            this.showValue = amount;
            //this.addPt.input_22 = this.addPt.input_22-this.calculateAmnt;
            this.addPt.input_22 = +(this.addPt.input_22-amount).toFixed(2);
          } else{
            console.log('Coupan not Acceptable');
          }
        }
        else{
          form.value.input_1_23 = null;
          this.couponName = '';
          this.showValue = "Invalid Coupan";
        }
        this.loading.dismiss();
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
      })
  }

  updatePatientApi(form: NgForm){
      console.log(form.value);
      if(!this.updatePatientFormGroup.valid) {
        this.presentToast('Please fill required field.');
      }
      else{
        console.log('valid');
        this.showLoader('Updating Patient');
        this.authService.updatePatient({formData: form.value}, 'edit_patient')
          .then((result) => {
            this.patientData = result;
            console.log(this.patientData);
            this.loading.dismiss();
            if(this.navParams.get('p_payment_done') == "no"){
              console.log(this.addPt.input_22);
              if(this.addPt.input_22 <= 0 || this.addPt.input_22 == 0 ){
                console.log('No amount');
                
                this.authService.postData({transactionid : '000', EntryId : this.navParams.get('p_patientID'), amount: this.addPt.input_22, status : 'Completed'}, 'update_payment')
                .then((result) => {
                  console.log('hello');
                  this.presentToast('Patient Created Successfully..');
                   this.loading.dismiss();
                }, (err) => {
                  this.presentToast('Error : ' + err);
                   this.loading.dismiss();
                });
              }
              else{
                let payment = this.modalCtrl.create(PayPalPage, {
                  user_id: this.userId,
                  totalAmpount: this.addPt.input_22.toFixed(2),
                  patientID: this.navParams.get('p_patientID'),
                  patientName: form.value.input_1_10_3
                });
                payment.present();
              }
            }
            this.presentToast('Updated Successfully');
          }, (err) => {
            console.log('err');
          })
      }
  }
  presentToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      //this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
    toast.present();
  }
  closeModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  showLoader(msg){
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }

}
