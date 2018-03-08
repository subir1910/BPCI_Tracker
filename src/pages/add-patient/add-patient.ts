import {Component, OnInit, ViewChild} from '@angular/core';
import {LoadingController, Nav, NavController, NavParams, Tabs, ModalController, ToastController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {FormBuilder, NgForm, Validators, AbstractControl} from "@angular/forms";
import {UserData} from "../../providers/auth-service/user-data";
import {PayPalPage} from "../paypal/paypal.page";
import {PatientTabPage} from "../patient-tab/patient-tab";


@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage implements OnInit{
  addPt = {
    input_4_6: 'United States',
    input_9: 'PatientTrackingEntry',
    input_18_1: '$29.99',
    input_18_2: '$30.99',
    input_18_3: '1',
    input_20: '1',
    input_21: '30 Days|0',
    input_22: +'',
    _gform_submit_nonce_1: 'FF4154SDFD',
    is_submit_1: '1',
    gform_submit: '1',
    gform_target_page_number_1: '1',
    gform_source_page_number_1: '0',
    user_id: this.user_data.userid
  };

  @ViewChild(Nav) nav: Nav;

  priceData: any;
  tab: Tabs;
  loading: any;
  patientData: any;
  service_type: any;
  episode: any;
  timezone: any;
  serviceFee: any;
  couponData: any;

  todayDate: String;
  public startDate: String;
  public maxDateOfPicker: String;
  public minDateOfPicker: String;

  /**/
  patientAddForm: any;
  /**/
  masks: any;
  couponName: any;
  amountLess: any;
  calculateAmnt: any;
  beforeCoupanAmnt: any;
  showValue: any;
  percentage_value: any;
  couponAmount:any;


  submitAttempt: boolean = false;
  /**/
  input_10_3: AbstractControl;
  input_10_6: AbstractControl;
  input_11: AbstractControl;
  input_12: AbstractControl;
  input_2: AbstractControl;
  input_3: AbstractControl;
  input_4_2: AbstractControl;
  input_4_3: AbstractControl;
  input_4_4: AbstractControl;
  input_4_5: AbstractControl;
  input_14: AbstractControl;
  input_15: AbstractControl;
  input_6: AbstractControl;
  input_7: AbstractControl;
  input_8: AbstractControl;
  input_21: AbstractControl;
  input_13: AbstractControl;
  input_23: AbstractControl;
  input_4_6: AbstractControl;
  input_9: AbstractControl;
  input_18_1: AbstractControl;
  input_18_2: AbstractControl;
  input_18_3: AbstractControl;
  input_20: AbstractControl;
  input_22: AbstractControl;
  _gform_submit_nonce_1: AbstractControl;
  is_submit_1: AbstractControl;
  gform_submit: AbstractControl;
  gform_target_page_number_1: AbstractControl;
  gform_source_page_number_1: AbstractControl;
  user_id: AbstractControl;


  userID: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    public user_data: UserData,
    public formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {

    let defaultDate = new Date();
    console.log('defaultDate: ' + defaultDate);

    this.todayDate = defaultDate.toISOString();
    console.log('today DAte: '+ defaultDate.toISOString());
    console.log('today DAteeee: '+ defaultDate.toLocaleDateString());



    this.minDateOfPicker =defaultDate.toISOString();
    console.log('day: '+defaultDate.getDay()+ ' month: ' + defaultDate.getMonth() + ' year ' + defaultDate.getFullYear());


    /**/
    this.patientAddForm = formBuilder.group({
      input_10_3: ['', [Validators.required]],
      input_10_6: [''],
      input_11: ['English', [Validators.required]],
      input_12: ['PST', [Validators.required]],
      input_2: ['', [Validators.required]],
      input_3: [''],
      input_4_2: ['', [Validators.required]],
      input_4_3: ['', [Validators.required]],
      input_4_4: ['', [Validators.required]],
      input_4_5: ['', [Validators.required]],
      input_14: [''],
      input_15: ['Acute myocardial infarction', [Validators.required]],
      input_6: ['', [Validators.required]],
      input_7: [this.todayDate, [Validators.required]],
      input_8: [''],
      input_21: ['30 Days|0'],
      input_13: ['', [Validators.required]],
      input_23: [''],
      input_4_6: ['United States'],
      input_9: ['PatientTrackingEntry'],
      input_18_1: ['$29.99'],
      input_18_2: ['$30.99'],
      input_18_3: ['1'],
      input_20: ['1'],
      input_22: [+'0'],
      _gform_submit_nonce_1: ['FF4154SDFD'],
      is_submit_1: ['1'],
      gform_submit: ['1'],
      gform_target_page_number_1: ['1'],
      gform_source_page_number_1: ['0'],
      user_id: [this.user_data.userid]
    });
    /**/

    /**/
    this.input_10_3= this.patientAddForm.controls['input_10_3'];
    this.input_10_6= this.patientAddForm.controls['input_10_6'];
    this.input_11= this.patientAddForm.controls['input_11'];
    this.input_12= this.patientAddForm.controls['input_12'];
    this.input_2 = this.patientAddForm.controls['input_2'];
    this.input_3 = this.patientAddForm.controls['input_3'];
    this.input_4_2 = this.patientAddForm.controls['input_4_2'];
    this.input_4_3 = this.patientAddForm.controls['input_4_3'];
    this.input_4_4 = this.patientAddForm.controls['input_4_4'];
    this.input_4_5 = this.patientAddForm.controls['input_4_5'];
    this.input_14 = this.patientAddForm.controls['input_14'];
    this.input_15 = this.patientAddForm.controls['input_15'];
    this.input_6 = this.patientAddForm.controls['input_6'];
    this.input_7 = this.patientAddForm.controls['input_7'];
    this.input_8 = this.patientAddForm.controls['input_8'];
    this.input_21 = this.patientAddForm.controls['input_21'];
    this.input_13 = this.patientAddForm.controls['input_13'];
    this.input_23 = this.patientAddForm.controls['input_23'];
    this.input_4_6 = this.patientAddForm.controls['input_4_6'];
    this.input_9 = this.patientAddForm.controls['input_9'];
    this.input_18_1 = this.patientAddForm.controls['input_18_1'];
    this.input_18_2 = this.patientAddForm.controls['input_18_2'];
    this.input_18_3 = this.patientAddForm.controls['input_18_3'];
    this.input_20 = this.patientAddForm.controls['input_20'];
    this.input_22 = this.patientAddForm.controls['input_22'];
    this._gform_submit_nonce_1 = this.patientAddForm.controls['_gform_submit_nonce_1'];
    this.is_submit_1 = this.patientAddForm.controls['is_submit_1'];
    this.gform_submit = this.patientAddForm.controls['gform_submit'];
    this.gform_target_page_number_1 = this.patientAddForm.controls['gform_target_page_number_1'];
    this.gform_source_page_number_1 = this.patientAddForm.controls['gform_source_page_number_1'];
    this.user_id = this.patientAddForm.controls['user_id'];



    this.tab = this.navCtrl.parent;
    this.userID = this.user_data.userid;
    this.showLoader('Loading..');
    this.authService.postData({user_id: this.userID}, 'get_period_and_fee')
      .then((result) => {
        this.priceData = result;
        if(this.priceData.response.Service_Fee){
          this.addPt.input_18_1 = this.priceData.response.Service_Fee;
        }
        this.addPt.input_22 = +this.addPt.input_18_1.substring(1);
        console.log(this.addPt.input_22);
        this.service_type = this.priceData.response.Service_type_for_tracking_period;
        this.episode = this.priceData.response.patient_episode_type;
        this.timezone = this.priceData.response.patient_timezone;
        this.loading.dismiss();
        console.log(this.priceData);
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
      });

    this.masks = {
      phoneNumber: [/[1-9]/, /\d/, /\d/, '-',/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      cardNumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      cardExpiry: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/],
      orderCode: [/[a-zA-z]/, ':', /\d/, /\d/, /\d/, /\d/]
    };
  }

  ngOnInit(){

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
    form.value.input_23 = '';
    this.addPt.input_22 = previousAmount;
    this.showValue = 0;
    this.percentage_value = 0;
    this.calculatePrice(form.value.input_21);
  }
  checkCoupan(form: NgForm){
    this.showLoader('Checking Coupon..');
    let form_data = new FormData();
    form_data.append('existing_coupons', '');
    form_data.append('couponCode', form.value.input_23);
    form_data.append('formId', '1');
    form_data.append('total', '29.99');

    this.authService.checkCoupans(form_data, 'apply_coupen')
      .then((res) => {
        console.log(res);
        this.couponData = res;
        if(!this.couponData.invalid_reason){
          let coupanCode = form.value.input_23;
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
          form.value.input_23 = null;
          this.couponName = '';
          this.showValue = "Invalid Coupan";
        }
        this.loading.dismiss();
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
      })
  }

  //Adding patient
  addPatient(form: NgForm){
    //console.log(this.patientAddForm);
    this.submitAttempt = true;
    console.log(this.patientAddForm.value);
    if(!this.patientAddForm.valid) {
      console.log("Invalid Submission!");
      console.log(this.patientAddForm.value);
    }
    else{
      console.log(this.patientAddForm.value);
      this.showLoader('Creating Patient..');
      console.log(this.patientAddForm.value);
      console.log('This is for test');
      console.log(this.patientAddForm.value);

      this.authService.addPatient({formData : this.patientAddForm.value}, 'add_patient')
        .then((result) =>{
          //this.loading.dismiss();
          this.patientData = result;
          console.log('---------------------');
          console.log(this.patientData.response.patient_data);
          //Naigate to paypal page
          console.log('------ '+ this.addPt.input_22);
          if(this.addPt.input_22 <= 0 || this.addPt.input_22 == 0 ){
            console.log('No amount');
            console.log(this.patientData.response.patient_data.p_id);
            this.authService.postData({transactionid : '000', EntryId : this.patientData.response.patient_data.p_id, amount: this.addPt.input_22, status : 'Completed'}, 'update_payment')
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
            this.loading.dismiss();
            let paymentPage = this.modalCtrl.create(PayPalPage, {
              totalAmpount: this.addPt.input_22.toFixed(2),
              patientID: this.patientData.response.patient_data.p_id,
              patientName: this.patientData.response.patient_data.p_name
            });
            paymentPage.onDidDismiss(data => {
              this.navCtrl.setRoot(this.navCtrl.getActive().component);
            });
            paymentPage.present();
          }

          //form.reset();
          //this.tab.select(1);
        }, (err) => {
          console.log(err);
          console.log('errrrrr');
          this.loading.dismiss();
        })
        .catch()
    }
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
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      });
      toast.present();
    }
}
