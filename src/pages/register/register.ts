import {Component} from '@angular/core';
import { LoadingController, Nav, NavController, NavParams, PopoverController, ViewController, ToastController, AlertController } from 'ionic-angular';
import {TermsPage} from "./terms/terms";
import {ProfilePage} from "../profile/profile";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {FormBuilder, NgForm, FormGroup, Validators, AbstractControl} from "@angular/forms";
import {UsernameValidator} from "../../validators/username";
import {PasswordValidator} from "../../validators/password";
import {EmailValidator} from "../../validators/email";
import {OtpPage} from "../otp/otp";


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public terms: any;

  public termCheck: any;

  duplicateUser: any;
  duplicateEmail: any;
  registerDocForm: FormGroup;
  loading: any;
  responseData: any;
  submitAttempt: boolean = false;
  masks: any;
  username: AbstractControl;
  password: AbstractControl;
  confirm_password: AbstractControl;
  email: AbstractControl;
  name: AbstractControl;
  device_id: AbstractControl;
  device_type: AbstractControl;
  organization_name: AbstractControl;
  address: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  zip_code: AbstractControl;
  primary_contact: AbstractControl;
  organization_business_phone: AbstractControl;
  website: AbstractControl;

  phoneNumber: any = "";

  userData = {
    device_id: '5c55a68c7e73178d9f927b844e65b7f887e8bdd496ce5c1e0c91449fa9a12c2a',
    device_type: 'iOS'
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl : PopoverController,
    public viewCtrl: ViewController,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public nav: Nav,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {

    this.masks = {
      phoneNumber: [/[1-9]/, /\d/, /\d/, '-',/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      cardNumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      cardExpiry: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/],
      orderCode: [/[a-zA-z]/, ':', /\d/, /\d/, /\d/, /\d/]
    };

    this.registerDocForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')])],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
      confirm_password : ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.required, Validators.maxLength(25), EmailValidator.checkEmail])],
      name: ['', [Validators.required]],
      device_id: [this.userData.device_id],
      device_type: [this.userData.device_type],
      organization_name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip_code: ['', [Validators.required]],
      primary_contact: [''.replace(/\D+/g, ''), [Validators.required]],
      organization_business_phone: ['', [Validators.required]],
      website: ['', [Validators.required]]
    }, { 'validator': PasswordValidator.isMatching });

    this.username = this.registerDocForm.controls['username'];
    this.password = this.registerDocForm.controls['password'];
    this.confirm_password = this.registerDocForm.controls['confirm_password'];
    this.email = this.registerDocForm.controls['email'];
    this.name = this.registerDocForm.controls['name'];
    this.device_id = this.registerDocForm.controls['device_id'];
    this.device_type = this.registerDocForm.controls['device_type'];
    this.organization_name = this.registerDocForm.controls['organization_name'];
    this.address = this.registerDocForm.controls['address'];
    this.city = this.registerDocForm.controls['city'];
    this.state = this.registerDocForm.controls['state'];
    this.zip_code = this.registerDocForm.controls['zip_code'];
    this.primary_contact = this.registerDocForm.controls['primary_contact'].value.replace(/\D+/g, '');
    this.organization_business_phone = this.registerDocForm.controls['organization_business_phone'];
    this.website = this.registerDocForm.controls['website'];
  }

  terms_popup(){
    const popover = this.popoverCtrl.create(TermsPage);
    popover.present();
  }


  changeEmailInput(){
    this.duplicateEmail = null;
  }
  changeUserInput(){
    this.duplicateUser = null;
    console.log('sdfsdsfsd');
  }

  signup(form: NgForm){
    if(this.termCheck){
      this.duplicateEmail = null;
      this.duplicateUser = null;
      this.submitAttempt = true;
      if(!this.registerDocForm.valid) {
        console.log("Invalid Submission!");
        console.log(this.registerDocForm.value);
      }
      else{
        console.log('submision successul');
        this.showLoader();
        this.authService.signup({formData: this.registerDocForm.value}, "sign_up").then((result) => {
          this.responseData = result;
          console.log(this.responseData);
            if(this.responseData.response.status != 1){
            //if(this.responseData.response.                                                                                                                              message == "That Username is already taken. Please try another."){
            if(this.responseData.response.message == "That email address is already taken. Please try another."){
              this.duplicateEmail = 'Sorry, That email address is already taken. Please try another!';
            }
            else{
              this.duplicateUser = 'Sorry, that username can not be used!';
            }
          }
          else{
            localStorage.setItem('userData', JSON.stringify(this.responseData));
            console.log("fffffff");
            console.log(this.responseData);
            this.presentToast('User Created');
            this.duplicateUser = '';
            this.registerDocForm.reset();
            //this.navCtrl.push(OtpPage, {
              //otpNumber: this.responseData.otp_number,
              //docId: this.responseData.id
            //})
            this.nav.popToRoot()
          }
          this.loading.dismiss();
        }, (err) => {
          //Connection failed message
          console.log(err);
          this.loading.dismiss();
        })
      }
    }
    else{
      this.presentConfirm();
    }
    //Api Connections
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'BPCI Tracker Says',
      message: 'Please check the box to agree to the TERMS & CONDITIONS.',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait..'
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

  loadProfile(){
    this.navCtrl.push(ProfilePage);
  }
}
