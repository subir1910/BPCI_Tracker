webpackJsonp([0],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_terms__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_password__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_email__ = __webpack_require__(642);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, popoverCtrl, viewCtrl, authService, loadingCtrl, formBuilder, nav, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.submitAttempt = false;
        this.phoneNumber = "";
        this.userData = {
            device_id: '5c55a68c7e73178d9f927b844e65b7f887e8bdd496ce5c1e0c91449fa9a12c2a',
            device_type: 'iOS'
        };
        this.masks = {
            phoneNumber: [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            cardNumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            cardExpiry: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/],
            orderCode: [/[a-zA-z]/, ':', /\d/, /\d/, /\d/, /\d/]
        };
        this.registerDocForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern('^[a-zA-Z0-9]*$')])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(45)]],
            confirm_password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(25), __WEBPACK_IMPORTED_MODULE_7__validators_email__["a" /* EmailValidator */].checkEmail])],
            name: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            device_id: [this.userData.device_id],
            device_type: [this.userData.device_type],
            organization_name: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            address: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            city: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            state: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            zip_code: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            primary_contact: [''.replace(/\D+/g, ''), [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            organization_business_phone: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            website: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]]
        }, { 'validator': __WEBPACK_IMPORTED_MODULE_6__validators_password__["a" /* PasswordValidator */].isMatching });
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
    RegisterPage.prototype.terms_popup = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__terms_terms__["a" /* TermsPage */]);
        popover.present();
    };
    RegisterPage.prototype.changeEmailInput = function () {
        this.duplicateEmail = null;
    };
    RegisterPage.prototype.changeUserInput = function () {
        this.duplicateUser = null;
        console.log('sdfsdsfsd');
    };
    RegisterPage.prototype.signup = function (form) {
        var _this = this;
        if (this.termCheck) {
            this.duplicateEmail = null;
            this.duplicateUser = null;
            this.submitAttempt = true;
            if (!this.registerDocForm.valid) {
                console.log("Invalid Submission!");
                console.log(this.registerDocForm.value);
            }
            else {
                console.log('submision successul');
                this.showLoader();
                this.authService.signup({ formData: this.registerDocForm.value }, "sign_up").then(function (result) {
                    _this.responseData = result;
                    console.log(_this.responseData);
                    if (_this.responseData.response.status != 1) {
                        //if(this.responseData.response.                                                                                                                              message == "That Username is already taken. Please try another."){
                        if (_this.responseData.response.message == "That email address is already taken. Please try another.") {
                            _this.duplicateEmail = 'Sorry, That email address is already taken. Please try another!';
                        }
                        else {
                            _this.duplicateUser = 'Sorry, that username can not be used!';
                        }
                    }
                    else {
                        localStorage.setItem('userData', JSON.stringify(_this.responseData));
                        console.log("fffffff");
                        console.log(_this.responseData);
                        _this.presentToast('User Created');
                        _this.duplicateUser = '';
                        _this.registerDocForm.reset();
                        //this.navCtrl.push(OtpPage, {
                        //otpNumber: this.responseData.otp_number,
                        //docId: this.responseData.id
                        //})
                        _this.nav.popToRoot();
                    }
                    _this.loading.dismiss();
                }, function (err) {
                    //Connection failed message
                    console.log(err);
                    _this.loading.dismiss();
                });
            }
        }
        else {
            this.presentConfirm();
        }
        //Api Connections
    };
    RegisterPage.prototype.presentConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'BPCI Tracker Says',
            message: 'Please check the box to agree to the TERMS & CONDITIONS.',
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait..'
        });
        this.loading.present();
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('dismissed toast');
        });
        toast.present();
    };
    RegisterPage.prototype.loadProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>New User Registration</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="form-content" padding>\n  <div class="login-box">\n    <p *ngIf="submitAttempt" style="color: red;">Please fill out all details accurately.</p>\n    <form #registerForm="ngForm" [formGroup]="registerDocForm" (ngSubmit)="signup(registerDocForm.value)">\n      <ion-row>\n        <ion-col>\n          <ion-label text-left>Doctor Information</ion-label>\n          <ion-list>\n            <ion-item>\n              <ion-input type="text" formControlName="username" name="username" autocapitalize="off" (ionFocus)="changeUserInput()" placeholder="Username" [class.invalid]="duplicateUser || (!registerDocForm.controls.username.valid && (registerDocForm.controls.username.dirty || submitAttempt))"></ion-input>\n            </ion-item>\n\n            <div *ngIf="registerDocForm.controls.username.pending" class="invalid">\n              <p>Checking username...</p>\n            </div>\n            <!--\n            <div class="invalid" *ngIf="!registerDocForm.controls.username.valid && !registerDocForm.controls.username.pending && (registerDocForm.controls.username.dirty || submitAttempt)">\n              <p>Sorry, that username can not be used!</p>\n            </div>\n            -->\n            <div class="invalid" *ngIf="duplicateUser">\n              <p>Sorry, that username can not be used!</p>\n            </div>\n\n            <div class="invalid" *ngIf="username.hasError(\'required\') && username.touched"\n                 class="error-box" class="invalid"><p>* Username is required!</p></div>\n            <div class="invalid" *ngIf="username.hasError(\'pattern\') && username.touched"\n                 class="error-box" class="invalid"><p>* Username must be letters and numbers only.</p></div>\n\n\n            <ion-item [class.invalid]="!password.valid && password.touched">\n              <ion-input type="password" formControlName="password" ngControl=\'password\' placeholder="Password" name="password" [class.invalid]="!registerDocForm.controls.password.valid && (registerDocForm.controls.password.dirty || submitAttempt)"></ion-input>\n            </ion-item>\n            <!--Password alerts-->\n\n            <div class="invalid" *ngIf="!registerDocForm.controls.password.valid && !registerDocForm.controls.password.pending && (registerDocForm.controls.password.dirty || submitAttempt)" class="invalid">\n              <p>* Password is required!</p>\n            </div>\n\n            <div class="invalid" *ngIf="password.hasError(\'minlength\') && password.touched" class="invalid">\n              <p>* Minimum password length is 3!</p>\n            </div>\n\n            <div class="invalid" *ngIf="password.hasError(\'maxlength\') && password.touched" class="invalid">\n              <p>* Maximum password length is 25!</p>\n            </div>\n            <!--/Password Alerts-->\n\n            <ion-item [class.invalid]="!confirm_password.valid && confirm_password.touched">\n              <ion-input type="password" [class.invalid]="!registerDocForm.controls.confirm_password.valid && (registerDocForm.controls.confirm_password.dirty || submitAttempt)" formControlName="confirm_password" ngControl=\'repeat\' placeholder="Confirm Password" name="confirm_password" id=\'repeat\'></ion-input>\n            </ion-item>\n            <!--confirm Password alerts-->\n            <div class="invalid" *ngIf="confirm_password.hasError(\'pw_mismatch\') && confirm_password.touched" class="invalid">\n              <p>* Passwords do not match!</p>\n            </div>\n            <!--/Confirm Password Alerts-->\n\n            <ion-item [class.invalid]="!email.valid && email.touched">\n              <ion-input type="email" [class.invalid]="duplicateEmail || (!registerDocForm.controls.email.valid && (registerDocForm.controls.email.dirty || submitAttempt))" (ionFocus)=\'changeEmailInput()\' formControlName="email" placeholder="Email Address" name="email"></ion-input>\n            </ion-item>\n\n            <div class="invalid" *ngIf="duplicateEmail">\n              <p>Sorry, That email address is already taken. Please try another!</p>\n            </div>\n\n            <!--Email Alerts-->\n            <div class="invalid" *ngIf="!registerDocForm.controls.email.valid && !registerDocForm.controls.email.pending && (registerDocForm.controls.email.dirty || submitAttempt)" required class="invalid">\n              <p>* Email is required!</p>\n            </div>\n            <div *ngIf="email.hasError(\'minlength\') && email.touched" class="invalid">\n              <p>* Minimum username length is 3!</p>\n            </div>\n\n            <div class="invalid" *ngIf="email.hasError(\'maxlength\') && email.touched" class="invalid">\n              <p>* Maximum username length is 25!</p>\n            </div>\n\n            <div class="invalid" *ngIf="email.hasError(\'invalidEmail\') && email.touched" class="invalid">\n              <p>* Invalid e-mail!</p>\n            </div>\n            <!--/Email Alerts-->\n            <ion-item [class.invalid]="!name.valid && name.touched">\n              <ion-input type="text" [class.invalid]="!registerDocForm.controls.name.valid && (registerDocForm.controls.name.dirty || submitAttempt)" formControlName="name" placeholder="Contact Name" name="name"></ion-input>\n            </ion-item>\n            <!---->\n            <div class="invalid" *ngIf="name.hasError(\'required\') && name.touched" class="invalid">\n              <p>* Name is required</p>\n            </div>\n            <!---->\n\n              <ion-input type="hidden" formControlName="device_id" name="device_id"></ion-input>\n              <ion-input type="hidden" formControlName="device_type" name="device_type"></ion-input>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label text-left>More Information</ion-label>\n          <ion-list>\n            <ion-item [class.invalid]="!name.valid && name.touched">\n              <ion-input type="text" [class.invalid]="!registerDocForm.controls.organization_name.valid && (registerDocForm.controls.organization_name.dirty || submitAttempt)" formControlName="organization_name" placeholder="Organization Name" name="organization_name" required></ion-input>\n            </ion-item>\n            <div class="invalid" *ngIf="!registerDocForm.controls.organization_name.valid && !registerDocForm.controls.organization_name.pending && (registerDocForm.controls.organization_name.dirty || submitAttempt)" required class="invalid">\n              <p>* Organization Name is required!</p>\n            </div>\n\n            <ion-item [class.invalid]="!address.valid && address.touched">\n              <ion-input type="text" [class.invalid]="!registerDocForm.controls.address.valid && (registerDocForm.controls.address.dirty || submitAttempt)" formControlName="address" placeholder="Street" name="address"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" [class.invalid]="!registerDocForm.controls.city.valid && (registerDocForm.controls.city.dirty || submitAttempt)" formControlName="city" placeholder="City" name="city"></ion-input>\n            </ion-item>\n            <!--\n            <ion-item>\n              <ion-input type="text" [class.invalid]="!registerDocForm.controls.state.valid && (registerDocForm.controls.state.dirty || submitAttempt)" formControlName="state" placeholder="State" name="state"></ion-input>\n            </ion-item>\n          -->\n            <ion-list>\n              <ion-item>\n                <ion-select formControlName="state" [class.invalid]="!registerDocForm.controls.state.valid && (registerDocForm.controls.state.dirty || submitAttempt)" name="state" placeholder="State">\n                  <ion-option value="United States" selected="selected">United States</ion-option>\n                  <ion-option value="Alabama">Alabama</ion-option>\n                  <ion-option value="Alaska">Alaska</ion-option>\n                  <ion-option value="Arizona">Arizona</ion-option>\n                  <ion-option value="Arkansas">Arkansas</ion-option>\n                  <ion-option value="California">California</ion-option>\n                  <ion-option value="Colorado">Colorado</ion-option>\n                  <ion-option value="Connecticut">Connecticut</ion-option>\n                  <ion-option value="Delaware">Delaware</ion-option>\n                  <ion-option value="District of Columbia">District of Columbia</ion-option>\n                  <ion-option value="Florida">Florida</ion-option>\n                  <ion-option value="Georgia">Georgia</ion-option>\n                  <ion-option value="Hawaii">Hawaii</ion-option>\n                  <ion-option value="Idaho">Idaho</ion-option>\n                  <ion-option value="Illinois">Illinois</ion-option>\n                  <ion-option value="Indiana">Indiana</ion-option>\n                  <ion-option value="Iowa">Iowa</ion-option>\n                  <ion-option value="Kansas">Kansas</ion-option>\n                  <ion-option value="Kentucky">Kentucky</ion-option>\n                  <ion-option value="Louisiana">Louisiana</ion-option>\n                  <ion-option value="Maine">Maine</ion-option>\n                  <ion-option value="Maryland">Maryland</ion-option>\n                  <ion-option value="Massachusetts">Massachusetts</ion-option>\n                  <ion-option value="Michigan">Michigan</ion-option>\n                  <ion-option value="Minnesota">Minnesota</ion-option>\n                  <ion-option value="Mississippi">Mississippi</ion-option>\n                  <ion-option value="Missouri">Missouri</ion-option>\n                  <ion-option value="Montana">Montana</ion-option>\n                  <ion-option value="Nebraska">Nebraska</ion-option>\n                  <ion-option value="Nevada">Nevada</ion-option>\n                  <ion-option value="New Hampshire">New Hampshire</ion-option>\n                  <ion-option value="New Jersey">New Jersey</ion-option>\n                  <ion-option value="New Mexico">New Mexico</ion-option>\n                  <ion-option value="New York">New York</ion-option>\n                  <ion-option value="North Carolina">North Carolina</ion-option>\n                  <ion-option value="North Dakota">North Dakota</ion-option>\n                  <ion-option value="Ohio">Ohio</ion-option>\n                  <ion-option value="Oklahoma">Oklahoma</ion-option>\n                  <ion-option value="Oregon">Oregon</ion-option>\n                  <ion-option value="Pennsylvania">Pennsylvania</ion-option>\n                  <ion-option value="Rhode Island">Rhode Island</ion-option>\n                  <ion-option value="South Carolina">South Carolina</ion-option>\n                  <ion-option value="South Dakota">South Dakota</ion-option>\n                  <ion-option value="Tennessee">Tennessee</ion-option>\n                  <ion-option value="Texas">Texas</ion-option>\n                  <ion-option value="Utah">Utah</ion-option>\n                  <ion-option value="Vermont">Vermont</ion-option>\n                  <ion-option value="Virginia">Virginia</ion-option>\n                  <ion-option value="Washington">Washington</ion-option>\n                  <ion-option value="West Virginia">West Virginia</ion-option>\n                  <ion-option value="Wisconsin">Wisconsin</ion-option>\n                  <ion-option value="Wyoming">Wyoming</ion-option>\n                  <ion-option value="Armed Forces Americas">Armed Forces Americas</ion-option>\n                  <ion-option value="Armed Forces Europe">Armed Forces Europe</ion-option>\n                  <ion-option value="Armed Forces Pacific">Armed Forces Pacific</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n\n            <ion-item>\n              <ion-input type="text" [class.invalid]="!registerDocForm.controls.zip_code.valid && (registerDocForm.controls.zip_code.dirty || submitAttempt)" formControlName="zip_code" placeholder="Zip Code" name="zip_code"></ion-input>\n            </ion-item>\n\n            <ion-item [class.invalid]="!primary_contact.valid && primary_contact.touched">\n              <input type="tel" class="text-input text-input-ios" [class.invalid]="!registerDocForm.controls.primary_contact.valid && (registerDocForm.controls.primary_contact.dirty || submitAttempt)" formControlName="primary_contact" name="primary_contact" placeholder="Alert Manager Number" [textMask]="{mask: masks.phoneNumber}" />\n            </ion-item>\n            <span style="font-size: 12px; margin-bottom: 15px; text-align: left; display: inline-block;" text-left>IMPORTANT: Contact who will receive patient alert messages" Please make mandatory field. (Number not made public)</span>\n\n            <ion-item>\n              <input type="tel" [class.invalid]="!registerDocForm.controls.organization_business_phone.valid && (registerDocForm.controls.organization_business_phone.dirty || submitAttempt)" class="text-input text-input-ios" [textMask]="{mask: masks.phoneNumber}" formControlName="organization_business_phone" placeholder="General/Public Phone Number" name="organization_business_phone" />\n            </ion-item>\n            <p style="font-size: 12px; margin-bottom: 15px; margin-top:0; float: left; text-align: left !important; display: inline-block;" text-left>Contact used for public display</p>\n\n            <ion-item>\n              <input type="text" [class.invalid]="!registerDocForm.controls.website.valid && (registerDocForm.controls.website.dirty || submitAttempt)" class="text-input text-input-ios" formControlName="website" placeholder="Website" name="website" />\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn theme-btn" full type="submit">Register</button>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-row>\n      <div class="terms-block">\n        <span><ion-checkbox [(ngModel)]="termCheck" color="dark" id="termCheck" name="termCheck" checked="true"></ion-checkbox></span>\n        <span class="anchor_btn"><a style="display: inline-block;" class="terms-btn" block clear color="secondary" href="#" onclick="window.open(\'https://bpcitracker.com/terms-of-use/\', \'_system\', \'location=yes\');">Terms & Condition</a></span>\n      </div>\n    </ion-row>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_user_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, user_data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user_data = user_data;
        this.profilePage = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.notificationPage = __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsPage */];
        var tabIndex = this.navParams.get('tabIndex');
        if (tabIndex) {
            this.mySelectedIndex = tabIndex;
        }
        this.user_data.getUserID();
        this.mySelectedIndex = navParams.data.tabIndex || 0;
        var id = navParams.get('id');
        var name = navParams.get('name');
        console.log('iddddd' + id);
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        this.userID = this.user_data.userid;
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('page-tabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs [selectedIndex]="mySelectedIndex" name="accounts">\n  <ion-tab [root]="profilePage" tabTitle="Profile" tabIcon="person" tabUrlPath="conference-schedule"></ion-tab>\n  <ion-tab [root]="notificationPage" tabTitle="Notification" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/tabs/tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_user_data__["a" /* UserData */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, authServices, userdata, toastCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServices = authServices;
        this.userdata = userdata;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userID = this.userdata.userid;
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.authServices.getUserInfo({ user_id: this.userID }, 'user_profile')
            .then(function (result) {
            if (_this.userID != undefined) {
                _this.userDetails = result;
                _this.user_email = _this.userDetails.response.email;
                console.log(_this.user_email);
            }
        }, function (err) {
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.updatePassword = function (form) {
        var _this = this;
        if (form.value.password !== "" || form.value.repeat_password !== "") {
            if (form.value.password == form.value.repeat_password) {
                this.showLoader('Updating Password..');
                this.authServices.updatePassword({ user_id: this.userID, password: form.value.password }, 'user_settings')
                    .then(function (result) {
                    console.log('Successfully updated');
                    _this.loading.dismiss();
                    _this.toastMsg('Password Changed Successfully');
                    _this.responseData = result;
                    console.log(_this.responseData);
                }, function (err) {
                    _this.loading.dismiss();
                });
            }
            else {
                this.presentAlert('Pawword did not matched');
            }
        }
        else {
            this.presentAlert('All Fields are required');
        }
    };
    SettingsPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    SettingsPage.prototype.toastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SettingsPage.prototype.presentAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'BPCI Tracker Says',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="form-content">\n  <form (ngSubmit)="updatePassword(settingsForm)" #settingsForm="ngForm">\n    <ion-row>\n      <ion-col>\n        <ion-label text-left>Account Email or Username</ion-label>\n        <ion-list>\n\n          <ion-item>\n            <ion-input disabled ngModel type="user_email" name="user_email" value="{{ user_email }}"></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label text-left>Change Password <span>(leave blank for no change)</span></ion-label>\n        <ion-list>\n          <ion-item>\n            <ion-input ngModel type="password" placeholder="New Password" name="password" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input ngModel type="password" placeholder="Repeat New Password" name="repeat_password" required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button class="submit-btn theme-btn" full type="submit" [disabled]="!settingsForm.form.valid">Save Changes</button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, authService, userData, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.userID = this.userData.userid;
    }
    NotificationsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader("Loading Notifications");
        this.authService.postData({ user_id: this.userID }, 'user_notification')
            .then(function (result) {
            _this.notificationData = result;
            console.log('dsddddddd');
            console.log(_this.notificationData);
            _this.loading.dismiss();
            if (_this.notificationData.response == null) {
                _this.notificationStatus = "No Notifications found";
            }
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    // Showing Loader after click on login page
    NotificationsPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notifications',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Alert Notifications</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showSearchbar">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  padding>\n  <ion-row *ngIf="notificationData">\n  <!--\n  <form (ngSubmit)="register()" #registerForm="ngForm">\n\n    <h2>Order By</h2>\n    <ion-list>\n      <ion-item>\n        <ion-select placeholder="Newest First">\n          <ion-option value="nes">NES</ion-option>\n          <ion-option value="n64">Nintendo64</ion-option>\n          <ion-option value="ps">PlayStation</ion-option>\n          <ion-option value="genesis">Sega Genesis</ion-option>\n          <ion-option value="saturn">Sega Saturn</ion-option>\n          <ion-option value="snes">SNES</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n\n    <button  ion-button >\n      Unread\n    </button>\n\n    <button ion-button>\n      Read\n    </button>\n\n  </form>\n-->\n\n  <ion-card *ngFor="let notifications of notificationData.response">\n    <ion-list class="notification_content">\n      <ion-item>\n        <ion-icon name="notifications" float-left></ion-icon>\n        <h3>Patient <strong> {{ notifications.patient_name }} </strong> replied with pain level - <span>{{ notifications.message }}</span></h3>\n        <p>{{ notifications.date }}</p>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  </ion-row>\n\n  <ion-row *ngIf="notificationStatus">\n    <h3 style="margin-top: 5%;">No Notification Found</h3>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/notifications/notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_patient_add_patient__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_manualevent_add_manualevent__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_frequency_alert_frequency__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patient_list_patient_list__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_user_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PatientTabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PatientTabPage = (function () {
    function PatientTabPage(navCtrl, navParams, user_data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user_data = user_data;
        this.addPatient = __WEBPACK_IMPORTED_MODULE_2__add_patient_add_patient__["a" /* AddPatientPage */];
        this.addManualEvent = __WEBPACK_IMPORTED_MODULE_3__add_manualevent_add_manualevent__["a" /* AddManualeventPage */];
        this.alertFrequency = __WEBPACK_IMPORTED_MODULE_4__alert_frequency_alert_frequency__["a" /* AlertFrequencyPage */];
        this.patientList = __WEBPACK_IMPORTED_MODULE_5__patient_list_patient_list__["a" /* PatientListPage */];
        var tabIndex = this.navParams.get('tabIndex');
        console.log(tabIndex);
        if (tabIndex) {
            this.mySelectedIndex = tabIndex;
        }
        this.mySelectedIndex = navParams.data.tabIndex || 0;
        var id = navParams.get('id');
        var name = navParams.get('name');
    }
    PatientTabPage.prototype.ionViewDidLoad = function () {
        this.userID = this.user_data.userid;
    };
    return PatientTabPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('page-tabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */])
], PatientTabPage.prototype, "tabRef", void 0);
PatientTabPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-patient-tab',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/patient-tab/patient-tab.html"*/'\n<ion-tabs [selectedIndex]="mySelectedIndex" name="patients">\n  <ion-tab [root]="addPatient" tabTitle="Add" tabIcon="medkit"></ion-tab>\n  <ion-tab [root]="patientList" tabTitle="List" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="alertFrequency" tabTitle="Alert Frequency" tabIcon="warning"></ion-tab>\n  <ion-tab [root]="addManualEvent" tabTitle="Add Event" tabIcon="calendar"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/patient-tab/patient-tab.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_user_data__["a" /* UserData */]])
], PatientTabPage);

//# sourceMappingURL=patient-tab.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_user_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paypal_paypal_page__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddPatientPage = (function () {
    function AddPatientPage(navCtrl, navParams, authService, loadingCtrl, user_data, formBuilder, modalCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.user_data = user_data;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.addPt = {
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
        this.submitAttempt = false;
        var defaultDate = new Date();
        console.log('defaultDate: ' + defaultDate);
        this.todayDate = defaultDate.toISOString();
        console.log('today DAte: ' + defaultDate.toISOString());
        console.log('today DAteeee: ' + defaultDate.toLocaleDateString());
        this.minDateOfPicker = defaultDate.toISOString();
        console.log('day: ' + defaultDate.getDay() + ' month: ' + defaultDate.getMonth() + ' year ' + defaultDate.getFullYear());
        /**/
        this.patientAddForm = formBuilder.group({
            input_10_3: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_10_6: [''],
            input_11: ['English', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_12: ['PST', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_2: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_3: [''],
            input_4_2: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_4_3: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_4_4: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_4_5: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_14: [''],
            input_15: ['Acute myocardial infarction', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_6: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_7: [this.todayDate, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            input_8: [''],
            input_21: ['30 Days|0'],
            input_13: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
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
        this.input_10_3 = this.patientAddForm.controls['input_10_3'];
        this.input_10_6 = this.patientAddForm.controls['input_10_6'];
        this.input_11 = this.patientAddForm.controls['input_11'];
        this.input_12 = this.patientAddForm.controls['input_12'];
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
        this.authService.postData({ user_id: this.userID }, 'get_period_and_fee')
            .then(function (result) {
            _this.priceData = result;
            if (_this.priceData.response.Service_Fee) {
                _this.addPt.input_18_1 = _this.priceData.response.Service_Fee;
            }
            _this.addPt.input_22 = +_this.addPt.input_18_1.substring(1);
            console.log(_this.addPt.input_22);
            _this.service_type = _this.priceData.response.Service_type_for_tracking_period;
            _this.episode = _this.priceData.response.patient_episode_type;
            _this.timezone = _this.priceData.response.patient_timezone;
            _this.loading.dismiss();
            console.log(_this.priceData);
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
        this.masks = {
            phoneNumber: [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            cardNumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            cardExpiry: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/],
            orderCode: [/[a-zA-z]/, ':', /\d/, /\d/, /\d/, /\d/]
        };
    }
    AddPatientPage.prototype.ngOnInit = function () {
    };
    AddPatientPage.prototype.calculatePrice = function (value) {
        var toArray = value.toString().split("|");
        var optionPrice = +toArray[1];
        optionPrice.toFixed(2);
        var selectedPrice = +optionPrice.toFixed(2);
        var couponValue = 0;
        if (this.showValue) {
            couponValue = this.showValue;
        }
        var serviceAmount = +this.addPt.input_18_1.substring(1);
        this.addPt.input_22 = serviceAmount + selectedPrice - couponValue;
        if (this.percentage_value) {
            console.log(this.percentage_value);
            this.calculateAmnt = (((serviceAmount + selectedPrice) / this.percentage_value) * 100).toFixed(2);
            console.log('Cal' + this.calculateAmnt);
            this.showValue = this.calculateAmnt;
            this.addPt.input_22 = (+serviceAmount + +selectedPrice) - this.calculateAmnt;
        }
    };
    AddPatientPage.prototype.cancelCoupan = function (previousAmount, form) {
        this.couponData = '';
        form.value.input_23 = '';
        this.addPt.input_22 = previousAmount;
        this.showValue = 0;
        this.percentage_value = 0;
        this.calculatePrice(form.value.input_21);
    };
    AddPatientPage.prototype.checkCoupan = function (form) {
        var _this = this;
        this.showLoader('Checking Coupon..');
        var form_data = new FormData();
        form_data.append('existing_coupons', '');
        form_data.append('couponCode', form.value.input_23);
        form_data.append('formId', '1');
        form_data.append('total', '29.99');
        this.authService.checkCoupans(form_data, 'apply_coupen')
            .then(function (res) {
            console.log(res);
            _this.couponData = res;
            if (!_this.couponData.invalid_reason) {
                var coupanCode = form.value.input_23;
                var amount = _this.couponData.coupons.response.amount;
                _this.couponAmount = _this.couponData.coupons.response.amount;
                _this.couponName = _this.couponData.coupons.response.name;
                var type = _this.couponData.coupons.response.type;
                var code = _this.couponData.coupons.response.code;
                var usages_count = _this.couponData.coupons.response.usage_count;
                _this.beforeCoupanAmnt = _this.addPt.input_22;
                if (type == "percentage") {
                    _this.amountLess = _this.addPt.input_22;
                    _this.calculateAmnt = ((_this.addPt.input_22 / amount) * 100).toFixed(2);
                    _this.showValue = ((_this.addPt.input_22 / amount) * 100).toFixed(2);
                    _this.addPt.input_22 = _this.addPt.input_22 - _this.calculateAmnt;
                    _this.percentage_value = amount;
                }
                else if (type === 'flat') {
                    _this.calculateAmnt = (_this.addPt.input_22 - amount).toFixed(2);
                    _this.showValue = amount;
                    //this.addPt.input_22 = this.addPt.input_22-this.calculateAmnt;
                    _this.addPt.input_22 = +(_this.addPt.input_22 - amount).toFixed(2);
                }
                else {
                    console.log('Coupan not Acceptable');
                }
            }
            else {
                form.value.input_23 = null;
                _this.couponName = '';
                _this.showValue = "Invalid Coupan";
            }
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    //Adding patient
    AddPatientPage.prototype.addPatient = function (form) {
        var _this = this;
        //console.log(this.patientAddForm);
        this.submitAttempt = true;
        console.log(this.patientAddForm.value);
        if (!this.patientAddForm.valid) {
            console.log("Invalid Submission!");
            console.log(this.patientAddForm.value);
        }
        else {
            console.log(this.patientAddForm.value);
            this.showLoader('Creating Patient..');
            console.log(this.patientAddForm.value);
            console.log('This is for test');
            console.log(this.patientAddForm.value);
            this.authService.addPatient({ formData: this.patientAddForm.value }, 'add_patient')
                .then(function (result) {
                //this.loading.dismiss();
                _this.patientData = result;
                console.log('---------------------');
                console.log(_this.patientData.response.patient_data);
                //Naigate to paypal page
                console.log('------ ' + _this.addPt.input_22);
                if (_this.addPt.input_22 <= 0 || _this.addPt.input_22 == 0) {
                    console.log('No amount');
                    console.log(_this.patientData.response.patient_data.p_id);
                    _this.authService.postData({ transactionid: '000', EntryId: _this.patientData.response.patient_data.p_id, amount: _this.addPt.input_22, status: 'Completed' }, 'update_payment')
                        .then(function (result) {
                        console.log('hello');
                        _this.presentToast('Patient Created Successfully..');
                        _this.loading.dismiss();
                    }, function (err) {
                        _this.presentToast('Error : ' + err);
                        _this.loading.dismiss();
                    });
                }
                else {
                    _this.loading.dismiss();
                    var paymentPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__paypal_paypal_page__["a" /* PayPalPage */], {
                        totalAmpount: _this.addPt.input_22.toFixed(2),
                        patientID: _this.patientData.response.patient_data.p_id,
                        patientName: _this.patientData.response.patient_data.p_name
                    });
                    paymentPage.onDidDismiss(function (data) {
                        _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                    });
                    paymentPage.present();
                }
                //form.reset();
                //this.tab.select(1);
            }, function (err) {
                console.log(err);
                console.log('errrrrr');
                _this.loading.dismiss();
            })
                .catch();
        }
    };
    AddPatientPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    AddPatientPage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
        toast.present();
    };
    return AddPatientPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], AddPatientPage.prototype, "nav", void 0);
AddPatientPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-patient',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/add-patient/add-patient.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Patient</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showSearchbar">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="form-content" padding>\n  <div class="login-box">\n    <p *ngIf="submitAttempt" style="color: red; margin-bottom: 15px;">Please fill out all details accurately.</p>\n    <form #addPatientForm="ngForm" [formGroup]="patientAddForm" (ngSubmit)="addPatient(addPatientForm.value)">\n          <h2>Patient Information</h2>\n          <ion-list>\n            <ion-item>\n              <ion-input type="text" [class.invalid]="!patientAddForm.controls.input_10_3.valid && (patientAddForm.controls.input_10_3.dirty || submitAttempt)" placeholder="First Name" formControlName="input_10_3" name="input_10_3" id="input_10_3" value=""></ion-input>\n            </ion-item>\n\n            <div class="invalid" *ngIf="input_10_3.hasError(\'required\') && input_10_3.touched"\n                 class="error-box" class="invalid"><p>* First name is required!</p></div>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Last Name" formControlName="input_10_6" name="input_10_6" id="input_10_6"></ion-input>\n            </ion-item>\n          </ion-list>\n\n          <h2>Patient Language</h2>\n          <ion-list>\n            <ion-item>\n              <ion-select [class.invalid]="!patientAddForm.controls.input_11.valid && (patientAddForm.controls.input_11.dirty || submitAttempt)" formControlName="input_11" name="input_11" id="input_11">\n                <ion-option value="English">English</ion-option>\n                <ion-option value="Spanish">Spanish</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n\n      <h2>Patient Time Zone</h2>\n      <ion-list>\n        <ion-item>\n          <ion-select [class.invalid]="!patientAddForm.controls.input_12.valid && (patientAddForm.controls.input_12.dirty || submitAttempt)" formControlName="input_12" name="input_12" id="input_12">\n            <ion-option *ngFor="let timezones of timezone" value="{{ timezones.value }}">{{ timezones.text }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <h2>Patient Mobile Phone*</h2>\n      <ion-list>\n        <ion-item>\n          <input [textMask]="{mask: masks.phoneNumber}" [class.invalid]="!patientAddForm.controls.input_2.valid && (patientAddForm.controls.input_2.dirty || submitAttempt)" formControlName="input_2" class="text-input text-input-ios" type="tel" name="input_2" id="input_2" />\n        </ion-item>\n      </ion-list>\n      <h2>Alternate Contact Mobile Phone</h2>\n      <ion-list>\n        <ion-item>\n          <input [textMask]="{mask: masks.phoneNumber}" [class.invalid]="!patientAddForm.controls.input_3.valid && (patientAddForm.controls.input_3.dirty || submitAttempt)" class="text-input text-input-ios" formControlName="input_3" type="tel" name="input_3" id="input_3" />\n        </ion-item>\n      </ion-list>\n\n      <h2>Patient Address*</h2>\n      <ion-list>\n        <ion-item>\n          <ion-input formControlName="input_4_2" [class.invalid]="!patientAddForm.controls.input_4_2.valid && (patientAddForm.controls.input_4_2.dirty || submitAttempt)" type="text" name="input_4_2" id="input_4_2" ></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <h2>City</h2>\n      <ion-list>\n        <ion-item>\n          <ion-input formControlName="input_4_3" [class.invalid]="!patientAddForm.controls.input_4_3.valid && (patientAddForm.controls.input_4_3.dirty || submitAttempt)" type="text" name="input_4_3" id="input_4_3"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <h2>State</h2>\n      <ion-list>\n        <ion-item>\n          <ion-select formControlName="input_4_4" [class.invalid]="!patientAddForm.controls.input_4_4.valid && (patientAddForm.controls.input_4_4.dirty || submitAttempt)" name="input_4_4" id="input_4_4" tabindex="16">\n            <ion-option value="United States" selected="selected">United States</ion-option>\n            <ion-option value="Alabama">Alabama</ion-option>\n            <ion-option value="Alaska">Alaska</ion-option>\n            <ion-option value="Arizona">Arizona</ion-option>\n            <ion-option value="Arkansas">Arkansas</ion-option>\n            <ion-option value="California">California</ion-option>\n            <ion-option value="Colorado">Colorado</ion-option>\n            <ion-option value="Connecticut">Connecticut</ion-option>\n            <ion-option value="Delaware">Delaware</ion-option>\n            <ion-option value="District of Columbia">District of Columbia</ion-option>\n            <ion-option value="Florida">Florida</ion-option>\n            <ion-option value="Georgia">Georgia</ion-option>\n            <ion-option value="Hawaii">Hawaii</ion-option>\n            <ion-option value="Idaho">Idaho</ion-option>\n            <ion-option value="Illinois">Illinois</ion-option>\n            <ion-option value="Indiana">Indiana</ion-option>\n            <ion-option value="Iowa">Iowa</ion-option>\n            <ion-option value="Kansas">Kansas</ion-option>\n            <ion-option value="Kentucky">Kentucky</ion-option>\n            <ion-option value="Louisiana">Louisiana</ion-option>\n            <ion-option value="Maine">Maine</ion-option>\n            <ion-option value="Maryland">Maryland</ion-option>\n            <ion-option value="Massachusetts">Massachusetts</ion-option>\n            <ion-option value="Michigan">Michigan</ion-option>\n            <ion-option value="Minnesota">Minnesota</ion-option>\n            <ion-option value="Mississippi">Mississippi</ion-option>\n            <ion-option value="Missouri">Missouri</ion-option>\n            <ion-option value="Montana">Montana</ion-option>\n            <ion-option value="Nebraska">Nebraska</ion-option>\n            <ion-option value="Nevada">Nevada</ion-option>\n            <ion-option value="New Hampshire">New Hampshire</ion-option>\n            <ion-option value="New Jersey">New Jersey</ion-option>\n            <ion-option value="New Mexico">New Mexico</ion-option>\n            <ion-option value="New York">New York</ion-option>\n            <ion-option value="North Carolina">North Carolina</ion-option>\n            <ion-option value="North Dakota">North Dakota</ion-option>\n            <ion-option value="Ohio">Ohio</ion-option>\n            <ion-option value="Oklahoma">Oklahoma</ion-option>\n            <ion-option value="Oregon">Oregon</ion-option>\n            <ion-option value="Pennsylvania">Pennsylvania</ion-option>\n            <ion-option value="Rhode Island">Rhode Island</ion-option>\n            <ion-option value="South Carolina">South Carolina</ion-option>\n            <ion-option value="South Dakota">South Dakota</ion-option>\n            <ion-option value="Tennessee">Tennessee</ion-option>\n            <ion-option value="Texas">Texas</ion-option>\n            <ion-option value="Utah">Utah</ion-option>\n            <ion-option value="Vermont">Vermont</ion-option>\n            <ion-option value="Virginia">Virginia</ion-option>\n            <ion-option value="Washington">Washington</ion-option>\n            <ion-option value="West Virginia">West Virginia</ion-option>\n            <ion-option value="Wisconsin">Wisconsin</ion-option>\n            <ion-option value="Wyoming">Wyoming</ion-option>\n            <ion-option value="Armed Forces Americas">Armed Forces Americas</ion-option>\n            <ion-option value="Armed Forces Europe">Armed Forces Europe</ion-option>\n            <ion-option value="Armed Forces Pacific">Armed Forces Pacific</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <h2>Zip / Postal Code</h2>\n      <ion-list>\n        <ion-item>\n          <ion-input formControlName="input_4_5" [class.invalid]="!patientAddForm.controls.input_4_5.valid && (patientAddForm.controls.input_4_5.dirty || submitAttempt)" type="text" name="input_4_5" id="input_4_5"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <h2>Notes</h2>\n      <ion-list>\n        <ion-item>\n          <ion-textarea formControlName="input_14" [class.invalid]="!patientAddForm.controls.input_14.valid && (patientAddForm.controls.input_14.dirty || submitAttempt)" type="text" placeholder="" name="input_14" id="input_14"></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n      <h2>Patient Episode Type*</h2>\n      <ion-list>\n        <ion-item>\n          <ion-select formControlName="input_15" [class.invalid]="!patientAddForm.controls.input_15.valid && (patientAddForm.controls.input_15.dirty || submitAttempt)" name="input_15" id="input_15" tabindex="17">\n            <ion-option *ngFor="let episodes of episode" value="{{ episodes.value }}" selected="selected">{{ episodes.text }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n\n      <h2>Referral Source<br>(Hospital, SNF, Home Health)*</h2>\n       <ion-list>\n        <ion-item>\n          <ion-input formControlName="input_6" [class.invalid]="!patientAddForm.controls.input_6.valid && (patientAddForm.controls.input_6.dirty || submitAttempt)" type="text" name="input_6" id="input_6"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <h2>Tracking Start Date </h2>\n      <ion-item class="date-time-item" [class.invalid]="!patientAddForm.controls.input_7.valid && (patientAddForm.controls.input_7.dirty || submitAttempt)">\n        <ion-label>Select date</ion-label>\n        <ion-datetime formControlName="input_7" id="input_7" displayFormat="MM-DD-YYYY" min="{{minDateOfPicker}}" max="2020-10-31" name="input_7"><input type="datetime-local"> </ion-datetime>\n      </ion-item>\n\n      <h2>Tracking Period</h2>\n      <span class="reg_span">\n          How long will you track patient episode?\n        </span>\n      <ion-list>\n        <ion-item>\n          <ion-select hidden formControlName="input_8" name="input_8" id="input_8">\n            <ion-option value="30 Days" selected="">30 Days</ion-option>\n            <ion-option value="60 Days">60 Days</ion-option>\n            <ion-option value="90 Days">90 Days</ion-option>\n          </ion-select>\n          <ion-select #episodes_value formControlName="input_21" [class.invalid]="!patientAddForm.controls.input_21.valid && (patientAddForm.controls.input_21.dirty || submitAttempt)" name="input_21" id="input_21" (ionChange)="calculatePrice(episodes_value.value)">\n            <ion-option *ngFor="let period of service_type" price="" value="{{ period.value }}">{{ period.text }} +{{ period.price }}</ion-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-list>\n      <!--\n      <h2>Service Price</h2>\n      <ion-row *ngIf="priceData">\n        <span class="ginput_product_price" id="input_18.2"></span>\n      </ion-row> -->\n\n      <h2>Tracking Communication Type</h2>\n      <ion-list radio-group="relationship" formControlName="input_13" [class.invalid]="!patientAddForm.controls.input_13.valid && (patientAddForm.controls.input_13.dirty || submitAttempt)" name="input_13">\n        <ion-item>\n          <ion-label>Text (SMS) Alert</ion-label>\n          <ion-radio value="sms" checked></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Voice Alert</ion-label>\n          <ion-radio value="voice"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <h2>Discount Code</h2>\n      <ion-list class="coupon_text">\n        <ion-item>\n          <ion-input #coupanValue formControlName="input_23" type="text" placeholder="" id="input_23" name="input_23"></ion-input>\n        </ion-item>\n        <button ion-button type="button" (click)="checkCoupan(addPatientForm);">Apply</button>\n      </ion-list>\n\n      <ion-list *ngIf="couponData" class="cupon_data">\n        <ion-item>\n          <button ion-button item-end type="button" (click)="cancelCoupan(beforeCoupanAmnt, addPatientForm)">\n            <ion-icon name="close"></ion-icon>\n          </button>\n          <p>{{ couponName }} :    -${{ showValue }}</p>\n        </ion-item>\n      </ion-list>\n\n      <h2 *ngIf="priceData" text-left style="float: left; width: 100%;">Total: {{ addPt.input_22.toFixed(2) | currency:\'USD\':true:\'1.2-2\'}}</h2>\n      <ion-input formControlName="input_4_6" type="hidden" name="input_4_6" id="input_4_6" value="United States"></ion-input>\n      <ion-input formControlName="input_9" type="hidden" name="input_9" id="input_9" value="PatientTrackingEntry"></ion-input>\n      <ion-input formControlName="input_18_1" type="hidden" name="input_18_1" id="input_18_1" value="input_18_1"></ion-input>\n      <ion-input formControlName="input_18_2" type="hidden" name="input_18_2" id="input_18_2" value="$30.99"></ion-input>\n      <ion-input formControlName="input_18_3" type="hidden" name="input_18_3" id="input_18_3" value="1"></ion-input>\n      <ion-input formControlName="input_20" type="hidden" name="input_20" id="input_20" value="1"></ion-input>\n\n      <ion-input formControlName="input_22" name="input_22" id="input_22" value="0" hidden></ion-input>\n      <ion-input formControlName="_gform_submit_nonce_1" type="hidden" name="_gform_submit_nonce_1" id="_gform_submit_nonce_1" value="e044812b33"></ion-input>\n      <ion-input formControlName="is_submit_1" type="hidden" name="is_submit_1" id="is_submit_1" value="1"></ion-input>\n      <ion-input formControlName="gform_submit" type="hidden" name="gform_submit" id="gform_submit" value="1"></ion-input>\n\n      <ion-input formControlName="gform_target_page_number_1" type="hidden" name="gform_target_page_number_1" id="gform_target_page_number_1" value="1"></ion-input>\n      <ion-input formControlName="gform_source_page_number_1" type="hidden" name="gform_source_page_number_1" id="gform_source_page_number_1" value="0"></ion-input>\n      <ion-input formControlName="user_id" type="hidden" name="user_id" id="user_id"></ion-input>\n\n      <button ion-button class="submit-btn theme-btn" block full type="submit">ADD PATIENT</button>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/add-patient/add-patient.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], AddPatientPage);

//# sourceMappingURL=add-patient.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddManualeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddManualeventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddManualeventPage = (function () {
    function AddManualeventPage(navCtrl, navParams, authService, userdata, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.userdata = userdata;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user_id = this.userdata.userid;
        var todayDate = new Date();
        this.entrydate = todayDate.toISOString();
        console.log(this.entrydate);
    }
    AddManualeventPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader('loading...');
        this.authService.getPatientList({ user_id: this.user_id }, 'get_patient_list')
            .then(function (result) {
            _this.userCollection = result;
            console.log('Manual Eveny');
            _this.loading.dismiss();
            //console.log(this.userCollection);
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    AddManualeventPage.prototype.addManualReport = function (form) {
        var _this = this;
        this.showLoader('Updating...');
        this.authService.addManualReport({ formData: form.value }, 'manual_report', this.user_id)
            .then(function (result) {
            console.log('ddd');
            _this.loading.dismiss();
            _this.presentToast('Added Successfully');
            form.reset();
            var todayDate = new Date();
            _this.entrydate = todayDate.toISOString();
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    AddManualeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddManualeventPage');
    };
    // Showing Loader after click on login page
    AddManualeventPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    // Present Toast
    AddManualeventPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return AddManualeventPage;
}());
AddManualeventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-manualevent',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/add-manualevent/add-manualevent.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Manual Alert</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showSearchbar">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="form-content" padding>\n\n  <ion-row *ngIf="userCollection" text-left>\n    <form (ngSubmit)="addManualReport(reportForm)" #reportForm="ngForm">\n      <ion-note>\n        <p>Allows users to enter and track manual patient\n          events (encounters) without using SMS Text/Voice\n          feature.</p>\n      </ion-note>\n      <h2>Please Select Patient *</h2>\n      <ion-list>\n        <ion-item>\n          <ion-select [(ngModel)]="EntryId" name="EntryId" id="EntryId" placeholder="Please select patient">\n            <ion-option *ngFor="let patient of userCollection.response.patient_data" value="{{ patient.p_id }}" >{{ patient.p_name }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <h2>Message</h2>\n      <ion-list>\n        <ion-item>\n          <ion-textarea ngModel rows="3" name="message" id="message" type="text" placeholder=""></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n      <h2>Date(YY/MM/DD) *</h2>\n      <ion-item>\n        <ion-label>Select date</ion-label>\n        <ion-datetime [(ngModel)]="entrydate" id="entrydate" displayFormat="MM-DD-YYYY" name="entrydate"></ion-datetime>\n      </ion-item>\n\n      <button ion-button type="submit">Submit</button>\n    </form>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/add-manualevent/add-manualevent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], AddManualeventPage);

//# sourceMappingURL=add-manualevent.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertFrequencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AlertFrequencyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AlertFrequencyPage = (function () {
    function AlertFrequencyPage(navCtrl, navParams, authService, userData, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.options = [
            { name: 'OptionA', value: 'first_opt', checked: true },
            { name: 'OptionB', value: 'second_opt', checked: false },
            { name: 'OptionC', value: 'third_opt', checked: true }
        ];
        this.userID = this.userData.userid;
    }
    AlertFrequencyPage.prototype.alertFrequencyUpdate = function (form) {
        var _this = this;
        var alertdays = [];
        if (form.value['monday'] == true) {
            alertdays.push('Monday');
        }
        if (form.value['tuesday'] == true) {
            alertdays.push('Tuesday');
        }
        if (form.value['wednesday'] == true) {
            alertdays.push('Wednesday');
        }
        if (form.value['thrusday'] == true) {
            alertdays.push('Thursday');
        }
        if (form.value['friday'] == true) {
            alertdays.push('Friday');
        }
        if (form.value['saturday'] == true) {
            alertdays.push('Saturday');
        }
        if (form.value['sunday'] == true) {
            alertdays.push('Sunday');
        }
        this.formValue = alertdays;
        console.log('tstuser' + alertdays);
        var form_data = new FormData();
        form_data.append('alertdays', this.formValue);
        form_data.append('user_id', this.userID);
        this.showLoader('Updating...');
        this.authService.alertFrequency(form_data, 'set_frequency_alert')
            .then(function (result) {
            _this.loading.dismiss();
            _this.presentToast('Updated Successfully');
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error ,' + err);
        });
    };
    AlertFrequencyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader('Loading...');
        this.authService.postData({ user_id: this.userID }, 'get_frequency_alert')
            .then(function (result) {
            console.log(result);
            _this.alertData = result;
            _this.data = _this.alertData.response.data;
            //console.log(this.data.indexOf('Monday'));
            console.log(_this.data);
            if (_this.data.indexOf('Monday') !== -1) {
                _this.monday = true;
            }
            if (_this.data.indexOf('Tuesday') !== -1) {
                _this.tuesday = true;
            }
            if (_this.data.indexOf('Wednesday') !== -1) {
                _this.wednesday = true;
            }
            if (_this.data.indexOf('Thursday') !== -1) {
                _this.thrusday = true;
            }
            if (_this.data.indexOf('Friday') !== -1) {
                _this.friday = true;
            }
            if (_this.data.indexOf('Saturday') !== -1) {
                _this.saturday = true;
            }
            if (_this.data.indexOf('Sunday') !== -1) {
                _this.sunday = true;
            }
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
            _this.presentToast('Error, ' + err);
        });
    };
    AlertFrequencyPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    AlertFrequencyPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('dismissed toast');
        });
        toast.present();
    };
    return AlertFrequencyPage;
}());
AlertFrequencyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-alert-frequency',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/alert-frequency/alert-frequency.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Alert Frequency</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form (ngSubmit)="alertFrequencyUpdate(alertFrequency)" #alertFrequency="ngForm">\n\n  <ion-card class="alert">\n    <ion-list >\n      <ion-item>\n        <h2>Patient Alert Frequency Settings</h2>\n        <p>Select each day patients will receive alert notifications at 09:00 am. </p>\n      </ion-item>\n\n      <ion-item class="border_bottom">\n        <ion-label><h2>Monday</h2></ion-label>\n        <ion-checkbox [(ngModel)]="monday" name="monday" color="dark" checked="true" checked="{{ monday ? \'true\' : \'false\' }}" item-end></ion-checkbox>\n      </ion-item>\n      <ion-item class="border_bottom">\n        <ion-label><h2>Tuesday</h2></ion-label>\n        <ion-checkbox [(ngModel)]="tuesday" name="tuesday" color="dark" checked="{{ tuesday ? \'true\' : \'false\' }}" item-end></ion-checkbox>\n      </ion-item>\n      <ion-item class="border_bottom">\n        <ion-label><h2>Wednesday</h2></ion-label>\n        <ion-checkbox [(ngModel)]="wednesday" color="dark" name="wednesday" checked="{{ wednesday ? \'true\' : \'false\' }}" item-end></ion-checkbox>\n      </ion-item>\n      <ion-item class="border_bottom">\n        <ion-label><h2>Thrusday</h2></ion-label>\n        <ion-checkbox [(ngModel)]="thrusday" color="dark" name="thrusday" checked="{{ thrusday ? \'true\' : \'false\' }}" item-end></ion-checkbox>\n      </ion-item>\n      <ion-item class="border_bottom">\n        <ion-label><h2>Friday</h2></ion-label>\n        <ion-checkbox [(ngModel)]="friday" color="dark" name="friday" checked="{{ friday ? \'true\' : \'false\' }}"  item-end></ion-checkbox>\n      </ion-item>\n      <ion-item class="border_bottom">\n        <ion-label><h2>Saturday</h2></ion-label>\n        <ion-checkbox [(ngModel)]="saturday" color="dark" checked="{{ saturday ? \'true\' : \'false\' }}" name="saturday" item-end></ion-checkbox>\n      </ion-item>\n      <ion-item class="border_bottom">\n        <ion-label><h2>Sunday</h2></ion-label>\n        <ion-checkbox [(ngModel)]="sunday" color="dark" checked="{{ sunday ? \'true\' : \'false\' }}" name="sunday" item-end></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n\n\n\n  </ion-card>\n\n  <button ion-button type="submit">Submit</button>\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/alert-frequency/alert-frequency.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], AlertFrequencyPage);

//# sourceMappingURL=alert-frequency.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_patient_update_patient__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientListPage = (function () {
    function PatientListPage(navCtrl, navParams, alertCtrl, authService, loadingCtrl, userData, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.userData = userData;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.showSearchbar = false;
        this.user_id = this.userData.userid;
        this.time_out = null;
    }
    PatientListPage.prototype.ngOnInit = function () {
    };
    PatientListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.authService.getPatientList({ user_id: this.user_id }, 'get_patient_list')
            .then(function (result) {
            _this.userCollection = result;
            refresher.complete();
            //console.log(this.userCollection);
        }, function (err) {
            console.log(err);
            refresher.complete();
        });
        /*setTimeout(() => {
          console.log('Async operation has ended');
    
        }, 3000);*/
    };
    PatientListPage.prototype.ionViewDidLoad = function () {
        this.showLoader('Loading Patients..');
        this.showingPatientList();
    };
    PatientListPage.prototype.showingPatientList = function () {
        var _this = this;
        this.authService.getPatientList({ user_id: this.user_id }, 'get_patient_list')
            .then(function (result) {
            _this.noSearchData = null;
            _this.userCollection = result;
            _this.loading.dismiss();
            if (_this.userCollection.response.patient_data == "") {
                _this.noSearchData = "No Patient Found";
            }
            //console.log(this.userCollection);
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    PatientListPage.prototype.changeStatus = function (p_status, p_id) {
        var _this = this;
        this.showLoader('Updating Status..');
        if (p_status === 'active') {
            p_status = 'deactivate';
        }
        else {
            p_status = 'active';
        }
        this.authService.statusUpdate({ user_id: this.user_id, EntryId: p_id, status: p_status }, 'active_deactive_patient')
            .then(function (result) {
            _this.showingPatientList();
            console.log('-------');
            console.log(result);
            _this.paymentStatusoption = result;
            var paymentStatus = _this.paymentStatusoption.response.message;
            _this.loading.dismiss();
            if (paymentStatus == "Payment is due") {
                _this.presentToast('Payment is due for this patinet');
            }
            else {
                console.log(p_status);
                if (p_status == "deactivate") {
                    _this.presentToast('Alerts Deactivated');
                }
                else {
                    _this.presentToast('Alerts Activated');
                }
                console.log('dsfdf');
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log('eRROR');
            console.log(err);
        });
    };
    PatientListPage.prototype.onDeletePatient = function (patientID) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Patient',
            message: 'Are you sure to want to delete patient?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: function () {
                        _this.showLoader('Deleting Patient..');
                        _this.authService.deletePatient({ user_id: _this.user_id, EntryId: patientID }, "delete_patient")
                            .then(function (result) {
                            _this.showingPatientList();
                        }, function (err) {
                            _this.loading.dismiss();
                        });
                    }
                },
                {
                    text: 'No, I changed my mind!',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel');
                        //alert.dismiss();
                    }
                }
            ]
        });
        alert.present();
    };
    PatientListPage.prototype.showUpdatePatient = function (patientID, p_last_name, p_first_name, p_language, p_timezone, p_tracking_start_date, p_tracking_start_date1, p_tracking_period, p_mobile, p_alt_mobile, p_only_address, p_city, p_state, p_zip, p_country, p_notes, p_episode, p_referral_source, p_payment_done) {
        var updateModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__update_patient_update_patient__["a" /* UpdatePatientPage */], {
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
    };
    PatientListPage.prototype.searchPatientData = function (form) {
        var _this = this;
        this.hasSearchItems = '';
        this.noSearchData = null;
        this.showLoader('Searching..');
        this.authService.searchPatient({ user_id: this.user_id, search: form.value.search }, 'search_patient')
            .then(function (result) {
            _this.loading.dismiss();
            _this.hasSearchItems = result;
            console.log("search " + _this.hasSearchItems);
            if (_this.hasSearchItems.response.message !== "No Data") {
                _this.searchData = result;
            }
            else {
                _this.noSearchData = 'No Data Found';
            }
            _this.userCollection = null;
            _this.showSearchbar = false;
        }, function (err) {
            _this.loading.dismiss();
            console.log('err');
        });
    };
    // Present Toast
    PatientListPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    // Showing Loader after click on login page
    PatientListPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    PatientListPage.prototype.toggleSearchbar = function () {
        this.showSearchbar = !this.showSearchbar;
    };
    return PatientListPage;
}());
PatientListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-patient-list',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/patient-list/patient-list.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toggleSearchbar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Patient List</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showSearchbar" class="searchBar">\n    <form (ngSubmit)="searchPatientData(searchFilter)" #searchFilter="ngForm">\n      <ion-item>\n      <ion-searchbar [(ngModel)]="search" name="search" id="search"></ion-searchbar>\n      <button ion-button item-right icon-only type="submit"><ion-icon name="search"></ion-icon></button>\n      </ion-item>\n    </form>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="patient_list" padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="ios">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!--\n        <h2>Search Entries</h2>\n\n    <div class="search-box">\n\n      <form (ngSubmit)="loadProfile()" #registerForm="ngForm">\n            <ion-list>\n              <ion-item>\n                <ion-input type="text" placeholder="" name="search" required></ion-input>\n              </ion-item>\n            </ion-list>\n        <button ion-button block>\n          Search\n        </button>\n      </form>\n\n  </div>-->\n  <div *ngIf="noSearchData">\n    <h3 text-center>{{ noSearchData }}</h3>\n  </div>\n    <div *ngIf="searchData">\n      <ion-card *ngFor="let patient of searchData.response">\n        <ion-list class="patient-details">\n          <ion-item-group>\n            <ion-item>\n              <label item-left>\n                <!--<p>Patient Name </p>-->\n                <h2>{{ patient.p_name }} </h2>\n              </label>\n              <button ion-button outline item-end icon-left (click)="onDeletePatient(patient.p_id);">\n                <ion-icon name="trash" ></ion-icon>\n              </button>\n              <button ion-button outline item-end icon-left (click)="showUpdatePatient(patient.p_id, patient.p_last_name, patient.p_first_name, patient.p_language, patient.p_timezone, patient.p_tracking_start_date, patient.p_tracking_start_date1, patient.p_tracking_period, patient.p_mobile, patient.p_alt_mobile, patient.p_only_address, patient.p_city, patient.p_state, patient.p_zip, patient.p_country, patient.p_notes, patient.p_episode, patient.p_referral_source, patient.payment_done)">\n                <ion-icon name="create"></ion-icon>\n              </button>\n\n              <ion-toggle ion-toggle-text (ionChange)="changeStatus(patient.p_status, patient.p_id);" checked="{{ patient.p_status === \'deactivate\' ? \'false\' : \'true\' }}"></ion-toggle >\n            </ion-item>\n          </ion-item-group>\n        </ion-list>\n\n        <ion-list class="patient-address">\n          <ion-item>Mobile No.:  <p>{{ patient.p_mobile }}</p></ion-item>\n          <ion-item>Alt Mobile No. : <p>{{ patient.p_alt_mobile }}</p></ion-item>\n          <ion-item>Address : <p>{{ patient.p_address }}</p></ion-item>\n          <ion-item>Episode Type :  <p>{{ patient.p_episode }}</p></ion-item>\n          <ion-item>Referral Source :<p>{{ patient.p_referral_source }}</p>\n          </ion-item>\n          <ion-item>Tracking Start : <p>{{ patient.p_tracking_start_date }}</p></ion-item>\n          <ion-item>Tracking Period : <p>{{ patient.p_tracking_period }}</p></ion-item>\n        </ion-list>\n      </ion-card>\n    </div>\n  <div *ngIf="userCollection">\n    <ion-card *ngFor="let patient of userCollection.response.patient_data">\n      <ion-list class="patient-details">\n        <ion-item-group>\n          <ion-item>\n            <label item-left>\n              <!--<p>Patient Name </p>-->\n              <h2>{{ patient.p_name }} </h2>\n            </label>\n          <button ion-button outline item-end icon-left (click)="onDeletePatient(patient.p_id);">\n            <ion-icon name="trash" ></ion-icon>\n          </button>\n          <button ion-button outline item-end icon-left (click)="showUpdatePatient(patient.p_id, patient.p_last_name, patient.p_first_name, patient.p_language, patient.p_timezone, patient.p_tracking_start_date, patient.p_tracking_start_date1, patient.p_tracking_period, patient.p_mobile, patient.p_alt_mobile, patient.p_only_address, patient.p_city, patient.p_state, patient.p_zip, patient.p_country, patient.p_notes, patient.p_episode, patient.p_referral_source, patient.payment_done)">\n            <ion-icon name="create"></ion-icon>\n          </button>\n\n            <ion-toggle ion-toggle-text (ionChange)="changeStatus(patient.p_status, patient.p_id);" checked="{{ patient.p_status === \'deactivate\' ? \'false\' : \'true\' }}"></ion-toggle >\n          </ion-item>\n        </ion-item-group>\n      </ion-list>\n\n      <ion-list class="patient-address">\n        <ion-item>Mobile No.:  <p>{{ patient.p_mobile }}</p></ion-item>\n        <ion-item>Alt Mobile No. : <p>{{ patient.p_alt_mobile }}</p></ion-item>\n        <ion-item>Address : <p>{{ patient.p_address }}</p></ion-item>\n        <ion-item>Episode Type :  <p>{{ patient.p_episode }}</p></ion-item>\n        <ion-item>Referral Source :<p>{{ patient.p_referral_source }}</p>\n        </ion-item>\n        <ion-item>Tracking Start : <p>{{ patient.p_tracking_start_date }}</p></ion-item>\n        <ion-item>Tracking Period : <p>{{ patient.p_tracking_period }}</p></ion-item>\n      </ion-list>\n    </ion-card>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/patient-list/patient-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], PatientListPage);

//# sourceMappingURL=patient-list.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var apiUrl = 'https://bpcitracker.com/api/logins/';
var usersApi = 'https://bpcitracker.com/api/users/';
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, events, storage, user_data) {
        this.http = http;
        this.events = events;
        this.storage = storage;
        this.user_data = user_data;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
    }
    AuthServiceProvider.prototype.addPatient = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            //console.log(credentials);
            var form_data = new FormData();
            for (var key in credentials.formData) {
                form_data.append(key, credentials.formData[key]);
            }
            console.log('JSON');
            console.log(JSON.stringify(form_data));
            console.log(form_data);
            _this.http.post(usersApi + type, form_data, { headers: headers })
                .subscribe(function (res) {
                console.log(res);
                resolve(res.json());
                console.log(res.json());
            }, function (err) {
                console.log("reject");
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.addManualReport = function (credentials, type, userid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var form_date = new FormData();
            for (var key in credentials.formData) {
                form_date.append(key, credentials.formData[key]);
            }
            form_date.append('user_id', userid);
            _this.http.post(usersApi + type, form_date, { headers: headers })
                .subscribe(function (res) {
                console.log('Hello');
                resolve(res.json());
                console.log(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.patientStatusReport = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(usersApi + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log(res.json());
            });
        });
    };
    // Login Method
    AuthServiceProvider.prototype.login = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                _this.patientData = res.json();
                console.log(_this.patientData.response.message);
                if (_this.patientData.response.message != 'Username is not correct' && _this.patientData.response.message != 'Password is incorrect') {
                    _this.userID = _this.patientData.response.userdata.user_id;
                    _this.userName = _this.patientData.response.userdata.name;
                    console.log("user Data " + _this.patientData.response.userdata.name);
                    _this.userOrg = _this.patientData.response.userdata.organization_name;
                    console.log("ORginaz : " + _this.userOrg);
                    _this.storage.set(_this.HAS_LOGGED_IN, true);
                    _this.setUsername(_this.userName);
                    _this.user_data.setUserID(_this.userID);
                    console.log('-----------------' + _this.userID);
                    _this.user_data.getUserID();
                }
                console.log(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getUserInfo = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(usersApi + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
                console.log('Error with Profile Details');
            });
        });
    };
    AuthServiceProvider.prototype.updateProfile = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var form_date = new FormData();
            for (var key in credentials.formData) {
                form_date.append(key, credentials.formData[key]);
            }
            _this.http.post(usersApi + type, form_date, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getPatientList = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log(res.json());
                _this.patientData = res.json();
                console.log(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.updatePatient = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var form_data = new FormData();
            for (var key in credentials.formData) {
                form_data.append(key, credentials.formData[key]);
            }
            console.log('FORM DATA');
            console.log(form_data);
            _this.http.post(usersApi + type, form_data, { headers: headers })
                .subscribe(function (result) {
                resolve(result.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.checkCoupans = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(usersApi + type, credentials, { headers: headers })
                .subscribe(function (result) {
                resolve(result.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.statusUpdate = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(usersApi + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (result) {
                resolve(result.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    AuthServiceProvider.prototype.searchPatient = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            console.log(credentials);
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(usersApi + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (result) {
                console.log("Result " + result);
                resolve(result.json());
                console.log("Result : " + result.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    AuthServiceProvider.prototype.getOtp = function (credentials, type) {
        var _this = this;
        console.log(credentials);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            console.log(credentials);
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (result) {
                console.log("ghghgh");
                console.log(result.json());
                resolve(result.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    AuthServiceProvider.prototype.alertFrequency = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(usersApi + type, credentials, { headers: headers })
                .subscribe(function (result) {
                resolve(result.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    AuthServiceProvider.prototype.signup = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var form_data = new FormData();
            for (var key in credentials.formData) {
                form_data.append(key, credentials.formData[key]);
            }
            _this.http.post(apiUrl + type, form_data, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.updatePassword = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            console.log('UPDATES CREDIANTIALS');
            console.log(credentials);
            _this.http.post(usersApi + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.forgotPassword = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            console.log('UPDATES CREDIANTIALS');
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.loadChatHistory = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(usersApi + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject;
            });
        });
    };
    AuthServiceProvider.prototype.deletePatient = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(usersApi + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log(res.json());
            });
        });
    };
    AuthServiceProvider.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    AuthServiceProvider.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    AuthServiceProvider.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    // Register Method
    AuthServiceProvider.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'guest/signup', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // Register Method
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            //headers.append('X-Auth-Token', localStorage.getItem('token'));
            _this.http.post(apiUrl + 'logout', {}, { headers: headers })
                .subscribe(function (res) {
                localStorage.clear();
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__user_data__["a" /* UserData */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.IS_LOGGEF_IN = 'hasLoggedIn';
    }
    UserData.prototype.login = function (userID, username, deviceID, userData) {
        console.log(username);
        console.log(deviceID);
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.setUserID(userID);
        this.setDeviceID(deviceID);
        this.events.publish('user:signup');
        this.storage.set('userDataAll', userData);
    };
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.storage.remove('userID');
        this.storage.remove('deviceId');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.getUserAllData = function () {
        var _this = this;
        return this.storage.get('userDataAll').then(function (result) {
            _this.userAllData = result;
        });
    };
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.setUserID = function (userID) {
        this.storage.set('userID', userID);
    };
    UserData.prototype.getUserID = function () {
        var _this = this;
        return this.storage.get('userID').then(function (value) {
            _this.userid = value;
            console.log('userID' + _this.userid);
            return value;
        });
    };
    UserData.prototype.setDeviceID = function (deviceID) {
        this.storage.set('deviceID', deviceID);
    };
    UserData.prototype.getDeviceID = function () {
        return this.storage.get('deviceID').then(function (value) {
            return value;
        });
    };
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkLoginUser = function () {
        return this.storage.get(this.IS_LOGGEF_IN).then(function (value) {
            return value;
        });
    };
    ;
    return UserData;
}());
UserData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UserData);

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 256;

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_user_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(platform, device, navCtrl, navParams, authService, loadingCtrl, toastCtrl, alertCtrl, userData, modalCtrl) {
        this.platform = platform;
        this.device = device;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.userData = userData;
        this.modalCtrl = modalCtrl;
    }
    /*Login Method*/
    LoginPage.prototype.login = function (form) {
        var _this = this;
        if (form.value.email === '' || form.value.password === '') {
            var alert_1 = this.alertCtrl.create({
                title: 'Register Error',
                subTitle: 'All fields are required',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        this.showLoader();
        //console.log(form.value);
        this.authService.login({ user_login: form.value.email, password: form.value.password, device_id: this.device.uuid, device_type: this.device.platform }, "login")
            .then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            localStorage.setItem('userData', JSON.stringify(_this.data.response.userdata));
            _this.response_messege = _this.data.response.message;
            if (_this.response_messege === "Username is not correct") {
                var alertUser = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Username is not correct',
                    buttons: ['OK']
                });
                alertUser.present();
                return;
            }
            else if (_this.response_messege === "Password is incorrect") {
                var alertUser = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Password is incorrect',
                    buttons: ['OK']
                });
                alertUser.present();
                return;
            }
            else {
                var userid = _this.data.response.userdata.user_id;
                var name = _this.data.response.userdata.name;
                var deviceid = _this.data.response.userdata.device_id;
                _this.userData.setUserID(userid);
                console.log(userid);
                _this.userData.login(userid, name, deviceid, _this.data);
                _this.userData.userid;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */], {
                    id: userid,
                    name: name
                });
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error ,' + err);
            var errors = '';
            if (err.message === 'UNPROCESSABLE ENTITY')
                errors += 'Email isn\'t valid.<br/>';
            if (err.message === 'UNAUTHORIZED')
                errors += 'Password is required.<br/>';
            var alert = _this.alertCtrl.create({
                title: 'Login Error',
                subTitle: errors,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.forgotPassword = function () {
        var passwordModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
        passwordModal.present();
    };
    // Showing Loader after click on login page
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    // Present Toast
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.loadProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.onLogin = function (form) {
        console.log(form.value);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/login/login.html"*/'<ion-content class="form-content" padding >\n  <ion-row class="logo-row">\n\n    <ion-col text-center>\n      <img src="assets/images/logo.png" width="260" alt="Logo" />\n    </ion-col>\n\n  </ion-row>\n  <div class="login-box">\n    <form #loginForm="ngForm" (ngSubmit)="login(loginForm)">\n      <ion-row align-items-center margin-bottom="25">\n        <ion-col col-md-6 text-md-center offset-md-3>\n          <ion-list>\n\n            <ion-item>\n              <ion-label color="primary"><ion-icon name="person"></ion-icon></ion-label>\n              <ion-input ngModel type="text" placeholder="User Name" name="email" required></ion-input>\n            </ion-item>\n\n            <ion-item class="margin-bottom-0">\n              <ion-label color="primary"><ion-icon name="lock"></ion-icon></ion-label>\n              <ion-input ngModel type="password" placeholder="Password" name="password" required ></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col class="sign-up-col" col-md-6 offset-md-3>\n          <button ion-button class="submit-btn theme-btn" block full type="submit">Login</button>\n          <button ion-button class="theme-outline-btn outline" block (click)="createAccount()" type="button">Register</button>\n          <button ion-button class="forgot-btn" block clear (click)="forgotPassword()" type="button">Forgot Password</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = (function () {
    function TermsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    TermsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'popupTerms',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/register/terms/terms.html"*/'\n<ion-header class="no-scroll">\n  <ion-navbar color="primary" >\n    <ion-title align-title="left" class="titel_terms" > Terms & Condition </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="popoverContact">\n  <p>BPCITracker.com Terms of Use & Conditions</p>\n  <p>BPCITRACKER.COM IS NOT A HEALTHCARE PROVIDER, EMERGENCY CARE SERVICE, AND/OR DOES ACT AS A RESPONSIBLE PARTY FOR PATIENTS ENROLLED IN THE BPCI TRACKING ELECTRONIC COMMUNICATIONS SYSTEM. PLEASE REFER ALL IMMEDIATE HEALTH NEEDS TO EMERGENCY SERVICES (CALL 911) OR CONTACT A LICENSED HEALTHCARE PROVIDER.</p>\n  <p>This Terms of Use Agreement (the Agreement) states the terms and conditions that govern the contractual agreement between BPCITracker.com, a.k.a Bloom LLC, (the Company) and you (the User or Site Administrator) who agrees to be bound by this Agreement in regard to the User’s access to www.BPCITracker.com (the Site), which is owned and operated by the Company.</p>\n  <p>THE SERVICE. The Site is a communication/notification technology to connect and update consumers (users) on the status of their patients or clients (the Service). By logging onto the Site and/or using the Service, the User and/or administrator agrees to these Terms of Use & Conditions and associated Privacy Policies.</p>\n\n  <ion-list>\n  <ion-item >\n    <ion-label><h2>I agree to the Terms & Conditions</h2></ion-label>\n    <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/register/terms/terms.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_user_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, navParams, menuCtrl, userData, loadingCtrl, authService, events, viewCtrl, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.showSearchbar = false;
        this.expanded = false;
        this.user_id = this.params.get('user_id');
        this.organization_name = this.params.get('organization_name');
        this.organization_physical_address = this.params.get('organization_physical_address');
        this.address = this.params.get('address');
        this.city = this.params.get('city');
        this.state = this.params.get('state');
        this.zip_code = this.params.get('zip_code');
        this.alt_contact = this.params.get('alt_contact');
        this.primary_contact = this.params.get('primary_contact');
        this.organization_business_phone = this.params.get('organization_business_phone');
        this.website = this.params.get('website');
    }
    EditProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.events.publish('user:login');
        this.authService.getUserInfo({ user_id: this.userID }, 'user_profile')
            .then(function (result) {
            _this.userDetails = result;
            console.log('User Details');
            console.log(_this.userDetails);
        }, function (err) {
            console.log('getting error');
        });
    };
    EditProfilePage.prototype.updateProfile = function (form) {
        var _this = this;
        //this.showLoader();
        this.authService.updateProfile({ formData: form.value }, 'update_user_profile')
            .then(function (result) {
            //this.loading.dismiss();
            _this.viewCtrl.dismiss();
        }, function (err) {
            //this.loading.dismiss();
            console.log(err);
        });
    };
    EditProfilePage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    EditProfilePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    EditProfilePage.prototype.somehowToggleExpand = function () {
        this.expanded = true;
    };
    EditProfilePage.prototype.onOpenMenu = function () {
        this.menuCtrl.open();
    };
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('userid is : ' + this.userID);
    };
    EditProfilePage.prototype.toggleSearchbar = function () {
        this.showSearchbar = !this.showSearchbar;
        this.tab.select(1);
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/edit-profile/edit-profile.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showSearchbar">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-list class="profile_content">\n    <form #editProfileForm="ngForm" (ngSubmit)="updateProfile(editProfileForm)">\n      <ion-item>\n        <ion-label stacked>Organization Name</ion-label>\n        <ion-input [(ngModel)]="organization_name" type="text" name="organization_name" id="organization_name" value="{{ organization_name }}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Physical Address </ion-label>\n        <ion-input type="text" name="address" id="address" [(ngModel)]="address" value="{{ address }}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>City </ion-label>\n        <ion-input type="text" name="city" id="city" [(ngModel)]="city" value="{{ city }}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>State </ion-label>\n        <ion-input type="text" name="state" id="state" [(ngModel)]="state" value="{{ state }}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Zip Code </ion-label>\n        <ion-input type="text" name="zip_code" id="state" [(ngModel)]="zip_code" value="{{ zip_code }}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Organization Business Phone </ion-label>\n        <ion-input type="text" name="organization_business_phone" id="organization_business_phone" [(ngModel)]="organization_business_phone" value ="{{ organization_business_phone }}"></ion-input>\n        <h2></h2>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Primary Mobile Number For Patient Alerts </ion-label>\n        <ion-input type="text" name="primary_contact" id="primary_contact" [(ngModel)]="primary_contact" value="{{ primary_contact }}"></ion-input>\n      </ion-item>\n\n      <!--<ion-item>\n        <ion-label stacked>Alternate Mobile Number For Patient Alerts </ion-label>\n        <ion-input type="text" name="alt_contact" id="alt_contact" [(ngModel)]="alt_contact" value="{{ alt_contact }}"></ion-input>\n      </ion-item>-->\n\n      <ion-item>\n        <ion-label stacked>Website </ion-label>\n        <ion-input type="text" name="webiste" id="webiste" [(ngModel)]="website" value="{{ website }}"></ion-input>\n      </ion-item>\n\n      <ion-input type="hidden" [(ngModel)]="user_id" name="user_id" id="user_id" value="{{ user_id }}"></ion-input>\n      <ion-input type="hidden" [(ngModel)]="zip_code" name="zip_code" id="zip_code" value="{{ zip_code }}"></ion-input>\n      <ion-grid>\n        <ion-row>\n          <ion-col><button type="submit" ion-button block style="width:100%">Update</button></ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n    </ion-list>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/edit-profile/edit-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], EditProfilePage);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams, authService, alertCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    ForgotPasswordPage.prototype.forgotPassword = function (form) {
        var _this = this;
        this.showLoader();
        this.authService.forgotPassword({ userdata: form.value.userdata }, 'forgot_password')
            .then(function (result) {
            _this.data = result;
            _this.result_messege = _this.data.response.message;
            console.log('MEssege, ' + _this.result_messege);
            if (_this.result_messege === 'Email or Username Not Registered') {
                _this.loading.dismiss();
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "Email or usermane not registered",
                    buttons: ['OK']
                });
                alert_1.present();
                return;
            }
            else {
                _this.hasSentPassword = true;
                _this.loading.dismiss();
                _this.presentToast("Password changed Successfully..");
            }
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    ForgotPasswordPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ForgotPasswordPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Sending Request...'
        });
        this.loading.present();
    };
    ForgotPasswordPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/forgot-password/forgot-password.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="form-content" padding >\n  <ion-row class="logo-row">\n\n    <ion-col text-center>\n      <img src="assets/images/logo.png" width="260" alt="Logo" />\n    </ion-col>\n\n  </ion-row>\n  <ion-note *ngIf="hasSentPassword">\n    <h3 style="color: #000000;" text-center>New password has been emailed to you</h3>\n  </ion-note>\n  <div *ngIf="!hasSentPassword" class="login-box">\n    <form #passwordForm="ngForm" (ngSubmit)="forgotPassword(passwordForm)">\n      <ion-row align-items-center margin-bottom="25">\n        <ion-col col-md-6 text-md-center offset-md-3>\n          <ion-note><p style="color: #000;">To reset your password, please enter your email address or username below</p></ion-note>\n          <ion-list>\n            <ion-item>\n              <ion-label color="primary"><ion-icon name="person"></ion-icon></ion-label>\n              <ion-input ngModel type="text" placeholder="Username or Email " name="userdata" id="userdata" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col class="sign-up-col" col-md-6 offset-md-3>\n          <button ion-button class="submit-btn theme-btn" block full type="submit">Reset Password</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/forgot-password/forgot-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paypal_paypal_page__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UpdatePatientPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UpdatePatientPage = (function () {
    function UpdatePatientPage(navCtrl, navParams, authService, loadingCtrl, viewCtrl, formBuilder, modalCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.addPt = {
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
        this.userId = this.navParams.get('user_id');
        this.authService.postData({ user_id: this.userId }, 'get_period_and_fee')
            .then(function (result) {
            _this.priceData = result;
            if (_this.priceData.response.Service_Fee) {
                _this.addPt.input_18_1 = _this.priceData.response.Service_Fee;
            }
            _this.addPt.input_22 = +_this.addPt.input_18_1.substring(1);
            //console.log(this.addPt.input_22);
            _this.service_type = _this.priceData.response.Service_type_for_tracking_period;
            _this.episode = _this.priceData.response.patient_episode_type;
            _this.timezone = _this.priceData.response.patient_timezone;
            //this.loading.dismiss();
            // We iterate the array in the code
            for (var _i = 0, _a = _this.service_type; _i < _a.length; _i++) {
                var period_data = _a[_i];
                console.log(period_data.value);
            }
            console.log(_this.priceData);
        }, function (err) {
            console.log(err);
            //this.loading.dismiss();
        });
        this.tracking_period = this.navParams.get('p_tracking_period');
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
            input_1_10_3: [this.navParams.get('p_first_name')],
            input_1_11: [this.navParams.get('p_language')],
            input_1_12: [this.navParams.get('p_timezone')],
            input_1_2: [this.navParams.get('p_mobile'), [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            input_1_3: [this.navParams.get('p_alt_mobile'), [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            input_1_4_2: [this.navParams.get('p_only_address')],
            input_1_7: [this.navParams.get('p_trackingstart1')],
            input_1_8: [this.navParams.get('p_tracking_period')],
            input_1_21: [this.tracking_period_value],
            input_1_4_3: [this.navParams.get('p_city')],
            input_1_4_4: [this.navParams.get('p_state')],
            input_1_4_5: [this.navParams.get('p_zip')],
            input_1_4_6: [this.navParams.get('p_country')],
            input_14: [this.navParams.get('p_notes')],
            input_1_15: [this.navParams.get('p_episode')],
            input_1_6: [this.navParams.get('p_referral_source')],
            input_1_13: [],
            input_22: [],
            input_1_23: []
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
        console.log('00000' + this.navParams.get('p_payment_done'));
        if (this.navParams.get('p_payment_done') == "no") {
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
            phoneNumber: [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            cardNumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            cardExpiry: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/],
            orderCode: [/[a-zA-z]/, ':', /\d/, /\d/, /\d/, /\d/]
        };
    }
    UpdatePatientPage.prototype.calculatePrice = function (value) {
        var toArray = value.toString().split("|");
        var optionPrice = +toArray[1];
        optionPrice.toFixed(2);
        var selectedPrice = +optionPrice.toFixed(2);
        var couponValue = 0;
        if (this.showValue) {
            couponValue = this.showValue;
        }
        var serviceAmount = +this.addPt.input_18_1.substring(1);
        this.addPt.input_22 = serviceAmount + selectedPrice - couponValue;
        if (this.percentage_value) {
            console.log(this.percentage_value);
            this.calculateAmnt = (((serviceAmount + selectedPrice) / this.percentage_value) * 100).toFixed(2);
            console.log('Cal' + this.calculateAmnt);
            this.showValue = this.calculateAmnt;
            this.addPt.input_22 = (+serviceAmount + +selectedPrice) - this.calculateAmnt;
        }
    };
    UpdatePatientPage.prototype.cancelCoupan = function (previousAmount, form) {
        this.couponData = '';
        form.value.input_1_23 = '';
        this.addPt.input_22 = previousAmount;
        this.showValue = 0;
        this.percentage_value = 0;
        this.calculatePrice(form.value.input_1_21);
    };
    UpdatePatientPage.prototype.checkCoupan = function (form) {
        var _this = this;
        this.showLoader('Checking Coupon..');
        var form_data = new FormData();
        form_data.append('existing_coupons', '');
        form_data.append('couponCode', form.value.input_1_23);
        form_data.append('formId', '1');
        form_data.append('total', '29.99');
        this.authService.checkCoupans(form_data, 'apply_coupen')
            .then(function (res) {
            console.log(res);
            _this.couponData = res;
            if (!_this.couponData.invalid_reason) {
                var coupanCode = form.value.input_1_23;
                var amount = _this.couponData.coupons.response.amount;
                _this.couponAmount = _this.couponData.coupons.response.amount;
                _this.couponName = _this.couponData.coupons.response.name;
                var type = _this.couponData.coupons.response.type;
                var code = _this.couponData.coupons.response.code;
                var usages_count = _this.couponData.coupons.response.usage_count;
                _this.beforeCoupanAmnt = _this.addPt.input_22;
                if (type == "percentage") {
                    _this.amountLess = _this.addPt.input_22;
                    _this.calculateAmnt = ((_this.addPt.input_22 / amount) * 100).toFixed(2);
                    _this.showValue = ((_this.addPt.input_22 / amount) * 100).toFixed(2);
                    _this.addPt.input_22 = _this.addPt.input_22 - _this.calculateAmnt;
                    _this.percentage_value = amount;
                }
                else if (type === 'flat') {
                    _this.calculateAmnt = (_this.addPt.input_22 - amount).toFixed(2);
                    _this.showValue = amount;
                    //this.addPt.input_22 = this.addPt.input_22-this.calculateAmnt;
                    _this.addPt.input_22 = +(_this.addPt.input_22 - amount).toFixed(2);
                }
                else {
                    console.log('Coupan not Acceptable');
                }
            }
            else {
                form.value.input_1_23 = null;
                _this.couponName = '';
                _this.showValue = "Invalid Coupan";
            }
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    UpdatePatientPage.prototype.updatePatientApi = function (form) {
        var _this = this;
        console.log(form.value);
        if (!this.updatePatientFormGroup.valid) {
            this.presentToast('Please fill required field.');
        }
        else {
            console.log('valid');
            this.showLoader('Updating Patient');
            this.authService.updatePatient({ formData: form.value }, 'edit_patient')
                .then(function (result) {
                _this.patientData = result;
                console.log(_this.patientData);
                _this.loading.dismiss();
                if (_this.navParams.get('p_payment_done') == "no") {
                    console.log(_this.addPt.input_22);
                    if (_this.addPt.input_22 <= 0 || _this.addPt.input_22 == 0) {
                        console.log('No amount');
                        _this.authService.postData({ transactionid: '000', EntryId: _this.navParams.get('p_patientID'), amount: _this.addPt.input_22, status: 'Completed' }, 'update_payment')
                            .then(function (result) {
                            console.log('hello');
                            _this.presentToast('Patient Created Successfully..');
                            _this.loading.dismiss();
                        }, function (err) {
                            _this.presentToast('Error : ' + err);
                            _this.loading.dismiss();
                        });
                    }
                    else {
                        var payment = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__paypal_paypal_page__["a" /* PayPalPage */], {
                            user_id: _this.userId,
                            totalAmpount: _this.addPt.input_22.toFixed(2),
                            patientID: _this.navParams.get('p_patientID'),
                            patientName: form.value.input_1_10_3
                        });
                        payment.present();
                    }
                }
                _this.presentToast('Updated Successfully');
            }, function (err) {
                console.log('err');
            });
        }
    };
    UpdatePatientPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        });
        toast.present();
    };
    UpdatePatientPage.prototype.closeModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    UpdatePatientPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    return UpdatePatientPage;
}());
UpdatePatientPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-update-patient',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/update-patient/update-patient.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Update Patient</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="form-content" padding>\n  <div class="login-box">\n\n    <form #updatePatientForm="ngForm" [formGroup]="updatePatientFormGroup" (ngSubmit)="updatePatientApi(updatePatientForm)">\n\n      <h2>Account Information</h2>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" name="input_1_10_3" id="input_1_10_3" formControlName="input_1_10_3"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input formControlName="input_1_10_6" type="text" name="input_1_10_6" id="input_1_10_6" ></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <h2>Patient Language</h2>\n      <ion-list>\n        <ion-item>\n          <ion-select formControlName="input_1_11" name="input_1_11" id="input_1_11">\n            <ion-option value="English">English</ion-option>\n            <ion-option value="Spanish">Spanish</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <h2>Patient Time Zone</h2>\n      <ion-list>\n        <ion-item>\n          <ion-select formControlName="input_1_12" name="input_1_12" id="input_1_12">\n            <ion-option value="PST">Los Angeles (PST)</ion-option>\n            <ion-option value="EST">New York (EST)</ion-option>\n            <ion-option value="CST">Chicago (CST)</ion-option>\n            <ion-option value="MST">Denver (MST)</ion-option>\n            <ion-option value="ARIZONA">Pheonix (ARIZONA)</ion-option>\n            <ion-option value="AKST">Anchorage (AKST)</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <h2>Patient Mobile Phone*</h2>\n      <ion-list>\n        <ion-item>\n          <input [textMask]="{mask: masks.phoneNumber}" [class.invalid]="!updatePatientFormGroup.controls.input_1_2.valid && (updatePatientFormGroup.controls.input_1_2.dirty)" class="text-input text-input-ios" formControlName="input_1_2" type="tel" name="input_1_2" id="input_1_2" required>\n        </ion-item>\n      </ion-list>\n\n\n      <h2>Alternate Contact Mobile Phone</h2>\n      <ion-list>\n        <ion-item>\n          <input [textMask]="{mask: masks.phoneNumber}" [class.invalid]="!updatePatientFormGroup.controls.input_1_3.valid && (updatePatientFormGroup.controls.input_1_3.dirty)" class="text-input text-input-ios" formControlName="input_1_3" type="tel" name="input_1_3" id="input_1_3" required>\n        </ion-item>\n      </ion-list>\n\n      <p>Family Member or Other Responsible Party</p>\n      <h2>Patient Address*</h2>\n      <ion-list>\n        <ion-item>\n          <ion-input formControlName="input_1_4_2" type="text" name="input_1_4_2" id="input_1_4_2" required></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <h2>City</h2>\n      <ion-list>\n        <ion-item>\n          <ion-input formControlName="input_1_4_3" type="text" name="input_1_4_3" id="input_1_4_3" id="input_1_4_3" required></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <h2>State</h2>\n      <ion-list>\n        <ion-item>\n          <ion-input formControlName="input_1_4_4" type="text" name="input_1_4_4" id="input_1_4_4" id="input_1_4_4" required></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <h2>Zip / Postal Code</h2>\n      <ion-list>\n        <ion-item>\n          <ion-input formControlName="input_1_4_5" type="text" name="input_1_4_5" id="input_1_4_5" id="ngModel" required></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <h2>Country</h2>\n      <ion-list>\n        <ion-item>\n          <ion-select formControlName="input_1_4_6" name="input_1_4_6" id="input_1_4_6" tabindex="16">\n            <ion-option value="United States" selected="selected">United States</ion-option>\n            <ion-option value="Afghanistan">Afghanistan</ion-option>\n            <ion-option value="Albania">Albania</ion-option>\n            <ion-option value="Algeria">Algeria</ion-option>\n            <ion-option value="American Samoa">American Samoa</ion-option>\n            <ion-option value="Andorra">Andorra</ion-option>\n            <ion-option value="Angola">Angola</ion-option>\n            <ion-option value="Antigua and Barbuda">Antigua and Barbuda</ion-option>\n            <ion-option value="Argentina">Argentina</ion-option>\n            <ion-option value="Armenia">Armenia</ion-option>\n            <ion-option value="Australia">Australia</ion-option>\n            <ion-option value="Austria">Austria</ion-option>\n            <ion-option value="Azerbaijan">Azerbaijan</ion-option>\n            <ion-option value="Bahamas">Bahamas</ion-option>\n            <ion-option value="Bahrain">Bahrain</ion-option>\n            <ion-option value="Bangladesh">Bangladesh</ion-option>\n            <ion-option value="Barbados">Barbados</ion-option>\n            <ion-option value="Belarus">Belarus</ion-option>\n            <ion-option value="Belgium">Belgium</ion-option>\n            <ion-option value="Belize">Belize</ion-option>\n            <ion-option value="Benin">Benin</ion-option>\n            <ion-option value="Bermuda">Bermuda</ion-option>\n            <ion-option value="Bhutan">Bhutan</ion-option>\n            <ion-option value="Bolivia">Bolivia</ion-option>\n            <ion-option value="Bosnia and Herzegovina">Bosnia and Herzegovina</ion-option>\n            <ion-option value="Botswana">Botswana</ion-option>\n            <ion-option value="Brazil">Brazil</ion-option>\n            <ion-option value="Brunei">Brunei</ion-option>\n            <ion-option value="Bulgaria">Bulgaria</ion-option>\n            <ion-option value="Burkina Faso">Burkina Faso</ion-option>\n            <ion-option value="Burundi">Burundi</ion-option>\n            <ion-option value="Cambodia">Cambodia</ion-option>\n            <ion-option value="Cameroon">Cameroon</ion-option>\n            <ion-option value="Canada">Canada</ion-option>\n            <ion-option value="Cape Verde">Cape Verde</ion-option>\n            <ion-option value="Cayman Islands">Cayman Islands</ion-option>\n            <ion-option value="Central African Republic">Central African Republic</ion-option>\n            <ion-option value="Chad">Chad</ion-option>\n            <ion-option value="Chile">Chile</ion-option>\n            <ion-option value="China">China</ion-option>\n            <ion-option value="Colombia">Colombia</ion-option>\n            <ion-option value="Comoros">Comoros</ion-option>\n            <ion-option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</ion-option>\n            <ion-option value="Congo, Republic of the">Congo, Republic of the</ion-option>\n            <ion-option value="Costa Rica">Costa Rica</ion-option>\n            <ion-option value="C�te d\'Ivoire">Côte d\'Ivoire</ion-option>\n            <ion-option value="Croatia">Croatia</ion-option>\n            <ion-option value="Cuba">Cuba</ion-option>\n            <ion-option value="Cyprus">Cyprus</ion-option>\n            <ion-option value="Czech Republic">Czech Republic</ion-option>\n            <ion-option value="Denmark">Denmark</ion-option>\n            <ion-option value="Djibouti">Djibouti</ion-option>\n            <ion-option value="Dominica">Dominica</ion-option>\n            <ion-option value="Dominican Republic">Dominican Republic</ion-option>\n            <ion-option value="East Timor">East Timor</ion-option>\n            <ion-option value="Ecuador">Ecuador</ion-option>\n            <ion-option value="Egypt">Egypt</ion-option>\n            <ion-option value="El Salvador">El Salvador</ion-option>\n            <ion-option value="Equatorial Guinea">Equatorial Guinea</ion-option>\n            <ion-option value="Eritrea">Eritrea</ion-option>\n            <ion-option value="Estonia">Estonia</ion-option>\n            <ion-option value="Ethiopia">Ethiopia</ion-option>\n            <ion-option value="Faroe Islands">Faroe Islands</ion-option>\n            <ion-option value="Fiji">Fiji</ion-option>\n            <ion-option value="Finland">Finland</ion-option>\n            <ion-option value="France">France</ion-option>\n            <ion-option value="French Polynesia">French Polynesia</ion-option>\n            <ion-option value="Gabon">Gabon</ion-option>\n            <ion-option value="Gambia">Gambia</ion-option>\n            <ion-option value="Georgia">Georgia</ion-option>\n            <ion-option value="Germany">Germany</ion-option>\n            <ion-option value="Ghana">Ghana</ion-option>\n            <ion-option value="Greece">Greece</ion-option>\n            <ion-option value="Greenland">Greenland</ion-option>\n            <ion-option value="Grenada">Grenada</ion-option>\n            <ion-option value="Guam">Guam</ion-option>\n            <ion-option value="Guatemala">Guatemala</ion-option>\n            <ion-option value="Guinea">Guinea</ion-option>\n            <ion-option value="Guinea-Bissau">Guinea-Bissau</ion-option>\n            <ion-option value="Guyana">Guyana</ion-option>\n            <ion-option value="Haiti">Haiti</ion-option>\n            <ion-option value="Honduras">Honduras</ion-option>\n            <ion-option value="Hong Kong">Hong Kong</ion-option>\n            <ion-option value="Hungary">Hungary</ion-option>\n            <ion-option value="Iceland">Iceland</ion-option>\n            <ion-option value="India">India</ion-option>\n            <ion-option value="Indonesia">Indonesia</ion-option>\n            <ion-option value="Iran">Iran</ion-option>\n            <ion-option value="Iraq">Iraq</ion-option>\n            <ion-option value="Ireland">Ireland</ion-option>\n            <ion-option value="Israel">Israel</ion-option>\n            <ion-option value="Italy">Italy</ion-option>\n            <ion-option value="Jamaica">Jamaica</ion-option>\n            <ion-option value="Japan">Japan</ion-option>\n            <ion-option value="Jordan">Jordan</ion-option>\n            <ion-option value="Kazakhstan">Kazakhstan</ion-option>\n            <ion-option value="Kenya">Kenya</ion-option>\n            <ion-option value="Kiribati">Kiribati</ion-option>\n            <ion-option value="North Korea">North Korea</ion-option>\n            <ion-option value="South Korea">South Korea</ion-option>\n            <ion-option value="Kosovo">Kosovo</ion-option>\n            <ion-option value="Kuwait">Kuwait</ion-option>\n            <ion-option value="Kyrgyzstan">Kyrgyzstan</ion-option>\n            <ion-option value="Laos">Laos</ion-option>\n            <ion-option value="Latvia">Latvia</ion-option>\n            <ion-option value="Lebanon">Lebanon</ion-option>\n            <ion-option value="Lesotho">Lesotho</ion-option>\n            <ion-option value="Liberia">Liberia</ion-option>\n            <ion-option value="Libya">Libya</ion-option>\n            <ion-option value="Liechtenstein">Liechtenstein</ion-option>\n            <ion-option value="Lithuania">Lithuania</ion-option>\n            <ion-option value="Luxembourg">Luxembourg</ion-option>\n            <ion-option value="Macedonia">Macedonia</ion-option>\n            <ion-option value="Madagascar">Madagascar</ion-option>\n            <ion-option value="Malawi">Malawi</ion-option>\n            <ion-option value="Malaysia">Malaysia</ion-option>\n            <ion-option value="Maldives">Maldives</ion-option>\n            <ion-option value="Mali">Mali</ion-option>\n            <ion-option value="Malta">Malta</ion-option>\n            <ion-option value="Marshall Islands">Marshall Islands</ion-option>\n            <ion-option value="Mauritania">Mauritania</ion-option>\n            <ion-option value="Mauritius">Mauritius</ion-option>\n            <ion-option value="Mexico">Mexico</ion-option>\n            <ion-option value="Micronesia">Micronesia</ion-option>\n            <ion-option value="Moldova">Moldova</ion-option>\n            <ion-option value="Monaco">Monaco</ion-option>\n            <ion-option value="Mongolia">Mongolia</ion-option>\n            <ion-option value="Montenegro">Montenegro</ion-option>\n            <ion-option value="Morocco">Morocco</ion-option>\n            <ion-option value="Mozambique">Mozambique</ion-option>\n            <ion-option value="Myanmar">Myanmar</ion-option>\n            <ion-option value="Namibia">Namibia</ion-option>\n            <ion-option value="Nauru">Nauru</ion-option>\n            <ion-option value="Nepal">Nepal</ion-option>\n            <ion-option value="Netherlands">Netherlands</ion-option>\n            <ion-option value="New Zealand">New Zealand</ion-option>\n            <ion-option value="Nicaragua">Nicaragua</ion-option>\n            <ion-option value="Niger">Niger</ion-option>\n            <ion-option value="Nigeria">Nigeria</ion-option>\n            <ion-option value="Northern Mariana Islands">Northern Mariana Islands</ion-option>\n            <ion-option value="Norway">Norway</ion-option>\n            <ion-option value="Oman">Oman</ion-option>\n            <ion-option value="Pakistan">Pakistan</ion-option>\n            <ion-option value="Palau">Palau</ion-option>\n            <ion-option value="Palestine, State of">Palestine, State of</ion-option>\n            <ion-option value="Panama">Panama</ion-option>\n            <ion-option value="Papua New Guinea">Papua New Guinea</ion-option>\n            <ion-option value="Paraguay">Paraguay</ion-option>\n            <ion-option value="Peru">Peru</ion-option>\n            <ion-option value="Philippines">Philippines</ion-option>\n            <ion-option value="Poland">Poland</ion-option>\n            <ion-option value="Portugal">Portugal</ion-option>\n            <ion-option value="Puerto Rico">Puerto Rico</ion-option>\n            <ion-option value="Qatar">Qatar</ion-option>\n            <ion-option value="Romania">Romania</ion-option>\n            <ion-option value="Russia">Russia</ion-option>\n            <ion-option value="Rwanda">Rwanda</ion-option>\n            <ion-option value="Saint Kitts and Nevis">Saint Kitts and Nevis</ion-option>\n            <ion-option value="Saint Lucia">Saint Lucia</ion-option>\n            <ion-option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</ion-option>\n            <ion-option value="Samoa">Samoa</ion-option>\n            <ion-option value="San Marino">San Marino</ion-option>\n            <ion-option value="Sao Tome and Principe">Sao Tome and Principe</ion-option>\n            <ion-option value="Saudi Arabia">Saudi Arabia</ion-option>\n            <ion-option value="Senegal">Senegal</ion-option>\n            <ion-option value="Serbia">Serbia</ion-option>\n            <ion-option value="Seychelles">Seychelles</ion-option>\n            <ion-option value="Sierra Leone">Sierra Leone</ion-option>\n            <ion-option value="Singapore">Singapore</ion-option>\n            <ion-option value="Sint Maarten">Sint Maarten</ion-option>\n            <ion-option value="Slovakia">Slovakia</ion-option>\n            <ion-option value="Slovenia">Slovenia</ion-option>\n            <ion-option value="Solomon Islands">Solomon Islands</ion-option>\n            <ion-option value="Somalia">Somalia</ion-option>\n            <ion-option value="South Africa">South Africa</ion-option>\n            <ion-option value="Spain">Spain</ion-option>\n            <ion-option value="Sri Lanka">Sri Lanka</ion-option>\n            <ion-option value="Sudan">Sudan</ion-option>\n            <ion-option value="Sudan, South">Sudan, South</ion-option>\n            <ion-option value="Suriname">Suriname</ion-option>\n            <ion-option value="Swaziland">Swaziland</ion-option>\n            <ion-option value="Sweden">Sweden</ion-option>\n            <ion-option value="Switzerland">Switzerland</ion-option>\n            <ion-option value="Syria">Syria</ion-option>\n            <ion-option value="Taiwan">Taiwan</ion-option>\n            <ion-option value="Tajikistan">Tajikistan</ion-option>\n            <ion-option value="Tanzania">Tanzania</ion-option>\n            <ion-option value="Thailand">Thailand</ion-option>\n            <ion-option value="Togo">Togo</ion-option>\n            <ion-option value="Tonga">Tonga</ion-option>\n            <ion-option value="Trinidad and Tobago">Trinidad and Tobago</ion-option>\n            <ion-option value="Tunisia">Tunisia</ion-option>\n            <ion-option value="Turkey">Turkey</ion-option>\n            <ion-option value="Turkmenistan">Turkmenistan</ion-option>\n            <ion-option value="Tuvalu">Tuvalu</ion-option>\n            <ion-option value="Uganda">Uganda</ion-option>\n            <ion-option value="Ukraine">Ukraine</ion-option>\n            <ion-option value="United Arab Emirates">United Arab Emirates</ion-option>\n            <ion-option value="United Kingdom">United Kingdom</ion-option>\n            <ion-option value="Uruguay">Uruguay</ion-option>\n            <ion-option value="Uzbekistan">Uzbekistan</ion-option>\n            <ion-option value="Vanuatu">Vanuatu</ion-option>\n            <ion-option value="Vatican City">Vatican City</ion-option>\n            <ion-option value="Venezuela">Venezuela</ion-option>\n            <ion-option value="Vietnam">Vietnam</ion-option>\n            <ion-option value="Virgin Islands, British">Virgin Islands, British</ion-option>\n            <ion-option value="Virgin Islands, U.S.">Virgin Islands, U.S.</ion-option>\n            <ion-option value="Yemen">Yemen</ion-option>\n            <ion-option value="Zambia">Zambia</ion-option>\n            <ion-option value="Zimbabwe">Zimbabwe</ion-option>\n          </ion-select>\n\n        </ion-item>\n      </ion-list>\n\n\n\n      <h2>Notes</h2>\n      <ion-list>\n        <ion-item>\n          <ion-textarea formControlName="input_14" name="input_14" id="input_14"></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n      <h2>Patient Episode Type*</h2>\n      <ion-list>\n        <ion-item>\n          <ion-select formControlName="input_1_15" name="input_1_15" id="input_1_15" tabindex="17">\n            <ion-option value="Acute myocardial infarction" selected="selected">Acute myocardial infarction</ion-option>\n            <ion-option value="Amputation">Amputation</ion-option>\n            <ion-option value="Atherosclerosis">Atherosclerosis</ion-option>\n            <ion-option value="Automatic implantable cardiac defibrillator generator or lead">Automatic implantable cardiac defibrillator generator or lead</ion-option>\n            <ion-option value="Back and neck except spinal fusion">Back and neck except spinal fusion</ion-option>\n            <ion-option value="Cardiac arrhythmia">Cardiac arrhythmia</ion-option>\n            <ion-option value="Cardiac defibrillator">Cardiac defibrillator</ion-option>\n            <ion-option value="Cardiac valve">Cardiac valve</ion-option>\n            <ion-option value="Cellulitis">Cellulitis</ion-option>\n            <ion-option value="Cervical spinal fusion">Cervical spinal fusion</ion-option>\n            <ion-option value="Chest pain">Chest pain</ion-option>\n            <ion-option value="Chronic obstructive pulmonary disease, bronchitis/asthmae">Chronic obstructive pulmonary disease, bronchitis/asthmae</ion-option>\n            <ion-option value="Combined anterior posterior spinal fusion">Combined anterior posterior spinal fusion</ion-option>\n            <ion-option value="Complex non-Cervical spinal fusion">Complex non-Cervical spinal fusion</ion-option>\n            <ion-option value="Congestive heart failure">Congestive heart failure</ion-option>\n            <ion-option value="Coronary artery bypass graft surgery">Coronary artery bypass graft surgery</ion-option>\n            <ion-option value="Diabetes">Diabetes</ion-option>\n            <ion-option value="Esophagitis, gastroenteritis and other digestive disorders">Esophagitis, gastroenteritis and other digestive disorders</ion-option>\n            <ion-option value="Double joint replacement of the lower extremity">Double joint replacement of the lower extremity</ion-option>\n            <ion-option value="Fractures femur and hip/pelvis">Fractures femur and hip/pelvis</ion-option>\n            <ion-option value="Gastrointestinal hemorrhage">Gastrointestinal hemorrhage</ion-option>\n            <ion-option value="Gastrointestinal obstruction">Gastrointestinal obstruction</ion-option>\n            <ion-option value="Hip and femur procedures except major joint">Hip and femur procedures except major joint</ion-option>\n            <ion-option value="Lower extremity and humerus procedure except hip, foot, femur">Lower extremity and humerus procedure except hip, foot, femur</ion-option>\n            <ion-option value="Major bowel">Major bowel</ion-option>\n            <ion-option value="Major cardiovascular procedure">Major cardiovascular procedure</ion-option>\n            <ion-option value="Major joint replacement of the lower extremity">Major joint replacement of the lower extremity</ion-option>\n            <ion-option value="Major joint replacement of upper extremity">Major joint replacement of upper extremity</ion-option>\n            <ion-option value="Medical non-infectious orthopedic">Medical non-infectious orthopedic</ion-option>\n            <ion-option value="Medical peripheral vascular disorders">Medical peripheral vascular disorders</ion-option>\n            <ion-option value="Nutritional and metabolic disorders">Nutritional and metabolic disorders</ion-option>\n            <ion-option value="Other knee procedures">Other knee procedures</ion-option>\n            <ion-option value="Other respiratory">Other respiratory</ion-option>\n            <ion-option value="Other vascular surgery">Other vascular surgery</ion-option>\n            <ion-option value="Pacemaker">Pacemaker</ion-option>\n            <ion-option value="Pacemaker Device replacement or revision">Pacemaker Device replacement or revision</ion-option>\n            <ion-option value="Percutaneous coronary intervention">Percutaneous coronary intervention</ion-option>\n            <ion-option value="Red blood cell disorders">Red blood cell disorders</ion-option>\n            <ion-option value="Removal of orthopedic devices">Removal of orthopedic devices</ion-option>\n            <ion-option value="Renal failure">Renal failure</ion-option>\n            <ion-option value="Revision of the hip or knee">Revision of the hip or knee</ion-option>\n            <ion-option value="Sepsis">Sepsis</ion-option>\n            <ion-option value="Simple pneumonia and respiratory infections">Simple pneumonia and respiratory infections</ion-option>\n            <ion-option value="Spinal fusion Stroke">Spinal fusion Stroke</ion-option>\n            <ion-option value="Syncope and collapse">Syncope and collapse</ion-option>\n            <ion-option value="Transient ischemia">Transient ischemia</ion-option>\n            <ion-option value="Urinary tract infection">Urinary tract infection</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n\n      <h2>Referral Source<br>(Hospital, SNF, Home Health)*</h2>\n      <ion-list>\n        <ion-item>\n          <ion-input formControlName="input_1_6" type="text" name="input_1_6" id="input_1_6" required></ion-input>\n        </ion-item>\n        <span class="reg_span">\n          Family Member or Other Responsible Party\n        </span>\n      </ion-list>\n      <div *ngIf="paymentInfo != \'yes\'">\n        <h2>Tracking Start Date</h2>\n        <ion-item class="date-time-item">\n          <ion-label>Select date</ion-label>\n          <ion-datetime formControlName="input_1_7" displayFormat="MM-DD-YYYY" max="2020-10-31" id="input_1_7" name="input_1_7"></ion-datetime>\n        </ion-item>\n        <h2>Tracking Period</h2>\n        <ion-list>\n          <ion-item>\n            <ion-select #episodes_value formControlName="input_1_21" name="input_1_21" id="input_1_21" (ionChange)="calculatePrice(episodes_value.value)">\n              <ion-option *ngFor="let period of service_type" price="" value="{{ period.value }}">{{ period.text }} +{{ period.price }}</ion-option>\n            </ion-select>\n          </ion-item>\n          <span class="reg_span">\n          How long will you track patient episode?\n        </span>\n        </ion-list>\n\n      <h2 hidden>Tracking Period</h2>\n      <ion-list hidden>\n        <ion-item>\n          <ion-select formControlName="input_1_8" name="input_1_8" id="input_1_8" disabled>\n            <ion-option value="10 Days">10 Days</ion-option>\n            <ion-option value="20 Days">20 Days</ion-option>\n            <ion-option value="30 Days">30 Days</ion-option>\n            <ion-option value="60 Days">60 Days</ion-option>\n            <ion-option value="90 Days">90 Days</ion-option>\n          </ion-select>\n        </ion-item>\n        <span class="reg_span">\n          How long will you track patient episode?\n        </span>\n      </ion-list>\n\n      <h2>Service Price</h2>\n      <ion-row>\n        <span class="ginput_product_price" id="addPt.input_18_1">{{ addPt.input_18_1 }}</span>\n      </ion-row>\n\n      <h2>Tracking Communication Type</h2>\n      <ion-list radio-group="relationship" formControlName="input_1_13" name="input_1_13">\n        <ion-item>\n          <ion-label>Text (SMS) Tracking</ion-label>\n          <ion-radio value="sms" checked></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Voice Tracking</ion-label>\n          <ion-radio value="voice"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <h2>Coupon</h2>\n      <ion-list class="coupon_text">\n        <ion-item>\n          <ion-input #coupanValue formControlName="input_1_23" type="text" placeholder="" id="input_1_23" name="input_1_23"></ion-input>\n        </ion-item>\n        <button ion-button type="button" (click)="checkCoupan(updatePatientForm);">Apply</button>\n      </ion-list>\n\n      <ion-list *ngIf="couponData" class="cupon_data">\n        <ion-item>\n          <button ion-button item-end type="button" (click)="cancelCoupan(beforeCoupanAmnt, addPatientForm)">\n            <ion-icon name="close"></ion-icon>\n          </button>\n          <p>{{ couponName }} :    -{{ showValue }}</p>\n        </ion-item>\n      </ion-list>\n\n      <h2 *ngIf="priceData" text-left style="float: left; width: 100%;">Total: {{ addPt.input_22.toFixed(2) | currency:\'USD\':true:\'1.2-2\'}}</h2>\n        <ion-input formControlName="input_22" name="input_22" id="input_22" value="{{ addPt.input_22.toFixed(2) }}" hidden></ion-input>\n      </div>\n\n\n      <ion-input formControlName="EntryId" type="hidden" name="EntryId" id="EntryId"></ion-input>\n      <ion-input formControlName="EntryId" type="hidden" name="EntryId" id="EntryId"></ion-input>\n\n      <button ion-button class="submit-btn theme-btn" block full type="submit">UPDATE PATIENT</button>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/update-patient/update-patient.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], UpdatePatientPage);

//# sourceMappingURL=update-patient.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientStatusreportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_history_chat_history__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_user_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PatientStatusreportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PatientStatusreportPage = (function () {
    function PatientStatusreportPage(navCtrl, navParams, authService, loadingCtrl, userdata, modalCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.userdata = userdata;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.user_id = this.userdata.userid;
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__chat_history_chat_history__["a" /* ChatHistoryPage */];
        this.authService.postData({ user_id: this.user_id }, 'get_period_and_fee')
            .then(function (result) {
            _this.episodeData = result;
            _this.episode = _this.episodeData.response.patient_episode_type;
            console.log("Episode Data: " + _this.episode);
        }, function (err) {
            console.log(err);
        });
    }
    PatientStatusreportPage.prototype.ionViewDidLoad = function () {
    };
    PatientStatusreportPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader('Loading...');
        this.authService.patientStatusReport({ user_id: this.user_id, page: '0' }, 'patient_status_report').then(function (result) {
            _this.statusData = result;
            _this.statusCollection = _this.statusData;
            _this.statusReport = _this.statusCollection.response;
            console.log('Status Report');
            console.log(_this.statusReport);
            _this.loading.dismiss();
            //this.loading.dismiss();
        }, function (err) {
            // this.loading.dismiss();
        });
    };
    PatientStatusreportPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    PatientStatusreportPage.prototype.onLoadChat = function (patientID) {
        var loadChat = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__chat_history_chat_history__["a" /* ChatHistoryPage */], { lead_id: patientID, user_id: this.user_id });
        loadChat.present();
    };
    PatientStatusreportPage.prototype.searhStatus = function (form) {
        var _this = this;
        this.hasSearchItems = '';
        this.noSearchData = null;
        if ((form.value.start_date || form.value.end_date) || form.value.episode_type) {
            this.showLoader('Searching...');
            // https://bpcitracker.com/api/users/get_periods
            this.authService.patientStatusReport({ "user_id": this.user_id, "start_date": form.value.start_date, "end_date": form.value.end_date, "episode_type": form.value.episode_type }, 'get_patient_status_report_by_search').then(function (result) {
                _this.hasSearchItems = result;
                if (_this.hasSearchItems.response !== null) {
                    _this.searchData = result;
                    _this.searchStatusReport = _this.searchData.response;
                    _this.loading.dismiss();
                }
                else {
                    _this.noSearchData = 'No Data Found';
                    _this.hasSearchItems = null;
                    _this.loading.dismiss();
                }
                _this.statusReport = null;
            }, function (err) {
                console.log("Error " + err);
                _this.loading.dismiss();
            });
        }
        else {
            this.presentConfirm();
        }
    };
    PatientStatusreportPage.prototype.presentConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'BPCI tracker Says',
            message: 'Please Input Both Date OR Select Patient Episode Type',
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return PatientStatusreportPage;
}());
PatientStatusreportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-patient-statusreport',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/patient-statusreport/patient-statusreport.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Patient Status Report</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showSearchbar">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="patient-status" padding>\n  <!--\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="Start Date" name="Start Date" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="text" placeholder="End Date" name="End Date" required></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-select placeholder="Patient Episode Type">\n            <ion-option value="nes">NES</ion-option>\n            <ion-option value="n64">Nintendo64</ion-option>\n            <ion-option value="ps">PlayStation</ion-option>\n            <ion-option value="genesis">Sega Genesis</ion-option>\n            <ion-option value="saturn">Sega Saturn</ion-option>\n            <ion-option value="snes">SNES</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <button ion-button >\n        Submit\n      </button>\n      <button ion-button>\n        Export CSV\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </form>\n    -->\n\n    <form #searchForm="ngForm" (ngSubmit)="searhStatus(searchForm)">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-lg-6>\n                <ion-item class="date-time-item">\n                  <ion-label>Start date</ion-label>\n                  <ion-datetime ngModel id="start_date" id="start_date" displayFormat="MM-DD-YYYY"  max="2020-10-31" name="start_date"><input type="datetime-local"> </ion-datetime>\n                </ion-item>\n            </ion-col>\n            <ion-col col-lg-6>\n                <ion-item class="date-time-item">\n                  <ion-label>End date</ion-label>\n                  <ion-datetime ngModel id="end_date" id="end_date" displayFormat="MM-DD-YYYY" max="2020-10-31" name="end_date"><input type="datetime-local"> </ion-datetime>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-lg-12>\n                  <ion-list>\n                      <ion-item>\n                          <ion-select ngModel name="episode_type" id="episode_type">\n                              <ion-option selected="selected" value="">Episode Type</ion-option>\n                              <ion-option *ngFor="let episodes of episode" value="{{ episodes.value }}">{{ episodes.text }}</ion-option>\n                          </ion-select>\n                      </ion-item>\n                    </ion-list>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n            <button ion-button type="submit">Submit</button>\n          </ion-row>\n        </ion-grid>\n      </form>\n\n\n    <div *ngIf="noSearchData">\n      <h3 text-center>{{ noSearchData }}</h3>\n    </div>\n\n    <ion-card *ngIf="searchData">\n        <ion-list class="status-report">\n            <ion-item>\n              <ion-grid *ngFor="let report of searchStatusReport">\n                <ion-row (click)="onLoadChat(report.p_id)" style="display: block;">\n                  <ion-col col-lg-12>\n                    <!--<p>Patient Name </p>-->\n                  <h3><h2>Patient: {{ report.patient_name }}</h2></h3>\n                </ion-col>\n    \n                <ion-col col-lg-12>\n                  <!--<p>Patient Episode Type </p>-->\n                  <h2>{{ report.patient_episode_type }}</h2>\n                </ion-col>\n                <ion-icon name="arrow-forward" float-right></ion-icon>\n              </ion-row>\n            </ion-grid>\n    \n          </ion-item>\n        </ion-list>\n    </ion-card>\n\n    <ion-card *ngIf="statusReport">\n      <ion-list class="status-report">\n        <ion-item>\n          <ion-grid *ngFor="let report of statusReport">\n            <ion-row (click)="onLoadChat(report.p_id)" style="display: block;">\n              <ion-col col-lg-12>\n                <!--<p>Patient Name </p>-->\n              <h3><h2>Patient: {{ report.patient_name }}</h2></h3>\n            </ion-col>\n\n            <ion-col col-lg-12>\n              <!--<p>Patient Episode Type </p>-->\n              <h2>{{ report.patient_episode_type }}</h2>\n            </ion-col>\n            <ion-icon name="arrow-forward" float-right></ion-icon>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/patient-statusreport/patient-statusreport.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PatientStatusreportPage);

//# sourceMappingURL=patient-statusreport.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatHistoryPage = (function () {
    function ChatHistoryPage(navCtrl, navParams, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.user_id = this.navParams.get('user_id');
        this.lead_id = this.navParams.get('lead_id');
    }
    ChatHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader();
        this.authService.loadChatHistory({ user_id: this.user_id, lead_id: this.lead_id }, 'chat_history')
            .then(function (result) {
            _this.loading.dismiss();
            _this.chatData = result;
            console.log('dataaaaaaaaaaaaaa');
            console.log(_this.chatData);
            _this.responseLenth = _this.chatData.response.length;
            console.log('sdfsdfsdfsdf ' + _this.responseLenth);
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    ChatHistoryPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ChatHistoryPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading chats..'
        });
        this.loading.present();
    };
    return ChatHistoryPage;
}());
ChatHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat-history',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/chat-history/chat-history.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Chat History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="chat_history" padding ng-app>\n<ion-row *ngIf="!responseLenth" text-center>\n  <h3 text-center >No Records</h3>\n</ion-row>\n<div *ngIf="responseLenth">\n  <!--<h2 class="date-time">July 20, 2017</h2>-->\n<div *ngFor="let chatList of chatData.response">\n          <!--\n          <div ng-if="chatList.direction ==\'Message Sent\'">\n            <p>{{ chatList.date }}</p>\n            <div class="company">{{ chatList.message }}</div>\n            <div class="call">call</div>\n          </div>\n          <div ng-if="chatList.direction ==\'Message Received\'">\n            <p>{{ chatList.date }}</p>\n            <div class="client">\n              {{ chatList.message }}\n              <p>1.34 PM</p>\n            </div>\n            <div class="name">Thomsun</div>\n          </div>\n        -->\n  <p style="float: left; width: 100%;" text-center="">{{ chatList.date }}</p>\n\n    <div *ngIf="chatList.direction === \'Message Sent\'" class="company">\n      {{ chatList.message }}\n    </div>\n  <div *ngIf="chatList.direction === \'Message Received\'" class="client">\n    {{ chatList.message }}\n  </div>\n  <div *ngIf="chatList.direction === \'Message Sent\'" class="call">{{ chatList.tracking_type }}</div>\n  <div *ngIf="chatList.direction === \'Message Received\'" class="name">{{ chatList.tracking_type }}</div>\n\n</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/chat-history/chat-history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ChatHistoryPage);

//# sourceMappingURL=chat-history.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(594);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_terms_terms__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notifications_notifications__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_manualevent_add_manualevent__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_patient_add_patient__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_alert_frequency_alert_frequency__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_patient_list_patient_list__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_patient_tab_patient_tab__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_patient_statusreport_patient_statusreport__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chat_history_chat_history__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_unique_device_id__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_device__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_patients__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_storage__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_user_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_edit_profile_edit_profile__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_cloud_angular__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_forgot_password_forgot_password__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_update_patient_update_patient__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_paypal_paypal_page__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_paypal_paypal_module__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_paypal__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_otp_otp__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_text_mask__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var cloudSettings = {
    'core': {
        'app_id': 'a626a924'
    }
};
var AppModule = (function () {
    function AppModule() {
        this.showSubmenu = false;
    }
    AppModule.prototype.menuItemHandler = function () {
        this.showSubmenu = !this.showSubmenu;
    };
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_add_manualevent_add_manualevent__["a" /* AddManualeventPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_add_patient_add_patient__["a" /* AddPatientPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_alert_frequency_alert_frequency__["a" /* AlertFrequencyPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_patient_list_patient_list__["a" /* PatientListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_patient_tab_patient_tab__["a" /* PatientTabPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_patient_statusreport_patient_statusreport__["a" /* PatientStatusreportPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_chat_history_chat_history__["a" /* ChatHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_update_patient_update_patient__["a" /* UpdatePatientPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_otp_otp__["a" /* OtpPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                backButtonText: '',
                pageTransition: 'ios-transition',
                menuType: 'overlay',
                prodMode: true,
                tabSubPages: false
            }, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                    { component: __WEBPACK_IMPORTED_MODULE_20__pages_patient_tab_patient_tab__["a" /* PatientTabPage */], name: 'PatientTabPage', segment: 'patient-page' },
                    { component: __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */], name: 'ProfilePage', segment: 'profile-page' },
                    { component: __WEBPACK_IMPORTED_MODULE_21__pages_patient_statusreport_patient_statusreport__["a" /* PatientStatusreportPage */], name: 'PatientStatusreportPage', segment: 'patient-status-report' },
                    { component: __WEBPACK_IMPORTED_MODULE_17__pages_add_patient_add_patient__["a" /* AddPatientPage */], name: 'AddPatientPage', segment: 'add-patient' },
                    { component: __WEBPACK_IMPORTED_MODULE_19__pages_patient_list_patient_list__["a" /* PatientListPage */], name: 'PatientListPage', segment: 'patient-list' },
                    { component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                    { component: __WEBPACK_IMPORTED_MODULE_16__pages_add_manualevent_add_manualevent__["a" /* AddManualeventPage */], name: 'AddManualeventPage', segment: 'add-manual-event' },
                    { component: __WEBPACK_IMPORTED_MODULE_18__pages_alert_frequency_alert_frequency__["a" /* AlertFrequencyPage */], name: 'AlertFrequencyPage', segment: 'alert-frequency' },
                    { component: __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */], name: 'SettingsPage', segment: 'settings' },
                    { component: __WEBPACK_IMPORTED_MODULE_32__pages_paypal_paypal_page__["a" /* PayPalPage */], name: 'PayPalPage', segment: 'settings' }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_29__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_26__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_33__pages_paypal_paypal_module__["a" /* PayPalModule */],
            __WEBPACK_IMPORTED_MODULE_35__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_37_angular2_text_mask__["TextMaskModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_add_manualevent_add_manualevent__["a" /* AddManualeventPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_add_patient_add_patient__["a" /* AddPatientPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_alert_frequency_alert_frequency__["a" /* AlertFrequencyPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_patient_list_patient_list__["a" /* PatientListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_patient_tab_patient_tab__["a" /* PatientTabPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_patient_statusreport_patient_statusreport__["a" /* PatientStatusreportPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_chat_history_chat_history__["a" /* ChatHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_update_patient_update_patient__["a" /* UpdatePatientPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_otp_otp__["a" /* OtpPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_device__["a" /* Device */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_25__services_patients__["a" /* PatientService */],
            Storage,
            __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_user_data__["a" /* UserData */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notifications_notifications__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_patient_tab_patient_tab__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_patient_statusreport_patient_statusreport__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_patient_add_patient__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_patient_list_patient_list__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_alert_frequency_alert_frequency__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_add_manualevent_add_manualevent__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_user_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, storage, userData, events, authService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.userData = userData;
        this.events = events;
        this.authService = authService;
        this.profilePage = __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        this.patientTabs = __WEBPACK_IMPORTED_MODULE_8__pages_patient_tab_patient_tab__["a" /* PatientTabPage */];
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.accountPages = [
            { title: 'Profile', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */], index: 0, icon: 'contact' },
            { title: 'Notifications', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_7__pages_notifications_notifications__["a" /* NotificationsPage */], index: 1, icon: 'notifications-outline' },
            { title: 'Settings', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */], index: 2, icon: 'settings' }
        ];
        this.patientPages = [
            { title: 'Add Patient', name: 'PatientTabPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_patient_tab_patient_tab__["a" /* PatientTabPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_12__pages_add_patient_add_patient__["a" /* AddPatientPage */], index: 0, icon: 'person-add' },
            { title: 'Patient List', name: 'PatientTabPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_patient_tab_patient_tab__["a" /* PatientTabPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_13__pages_patient_list_patient_list__["a" /* PatientListPage */], index: 1, icon: 'ios-list-box-outline' },
            { title: 'Alert Frequency', name: 'PatientTabPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_patient_tab_patient_tab__["a" /* PatientTabPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_14__pages_alert_frequency_alert_frequency__["a" /* AlertFrequencyPage */], index: 2, icon: 'ios-warning-outline' },
            { title: 'Add Manual Alert', name: 'PatientTabPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_patient_tab_patient_tab__["a" /* PatientTabPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_15__pages_add_manualevent_add_manualevent__["a" /* AddManualeventPage */], index: 3, icon: 'ios-calendar-outline' }
        ];
        this.loggedInPages = [
            { title: 'Patient Status Report', name: 'PatientStatusreportPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_patient_statusreport_patient_statusreport__["a" /* PatientStatusreportPage */], icon: 'ios-pulse-outline' },
            { title: 'Logout', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */], icon: 'person-add' }
        ];
        this.storage.set('userId', this.userData.userid).then(function () {
            _this.storage.get('userId').then(function (value) {
                console.log('storage : ' + value); // is empty...
            });
        });
        console.log('raw : ' + this.userData.getUserID()); // shows the api token
        this.storage.get('hasLoggedIn')
            .then(function (hasLoggedIn) {
            console.log(hasLoggedIn);
            if (hasLoggedIn) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_patient_list_patient_list__["a" /* PatientListPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
            _this.platformReady();
        });
        this.events.subscribe('user:login', function () {
            console.log(_this.userData.getUserID());
            console.log('yesssss');
        });
        var username = this.userData.getUsername();
        var userAllData = this.userData.getUserAllData();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
        this.userid = this.userData.userid;
        console.log('useridddd ' + this.userID);
    }
    MyApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.userIDs = _this.userData.userid;
            console.log('iddddddd ' + _this.userIDs);
            //this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.authService.getUserInfo({ user_id: _this.userIDs }, 'user_profile')
                .then(function (result) {
                _this.userDetails = result;
                console.log('UserDetails');
                console.log(_this.userDetails);
                //console.log(this.userDetails.response);
                if (_this.userDetails.response != null) {
                    _this.organization_name = _this.userDetails.response.organization_name;
                }
            }, function (err) {
            });
        });
    };
    MyApp.prototype.onLoad = function (page) {
        this.menuCtrl.close();
        this.nav.setRoot(page);
    };
    MyApp.prototype.openPage = function (page) {
        console.log('Page Name: ');
        console.log(page);
        console.log(page.name);
        var params = {};
        this.menuCtrl.close();
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
            console.log(params);
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            console.log('select Identifier');
            console.log(this.nav.getSecondaryIdentifier());
            if (this.activeTabs !== '' && this.activeTabs == page.name) {
                this.nav.getActiveChildNavs()[0].select(page.index);
            }
            else {
                this.activeTabs = page.name;
                this.nav.setRoot(page.name, params).catch(function (err) {
                    console.log("Didn't set the nav root: " + err);
                });
            }
            console.log('have nav');
            // Set the root of the nav with params if it's a tab index
        }
        else {
            console.log('sdfsdf');
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log(err);
            });
        }
        if (page.logsOut) {
            // Give the menu time to close before changing to logged out
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log(err);
            });
            this.userData.logout();
        }
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        this.menuCtrl.enable(loggedIn, 'loggedInMenu');
        this.menuCtrl.enable(!loggedIn, 'loggedOutMenu');
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/app/app.html"*/'<!--Loged menu-->\n<ion-split-pane when="(min-width: 1920px)">\n<ion-menu id="loggedOutMenu" [content]="nav">\n\n  <ion-header [ngClass]="{\'expanded\': expanded}" class="menuHeader">\n    <ion-toolbar color="primary">\n      <ion-title>\n        Menu\n      </ion-title>\n      <ion-buttons end class="btnClose" text-center>\n        <button ion-button icon-only menuClose>\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor="let logoutPage of loggedOutPages" ion-item (click)="openPage(logoutPage)">\n        <ion-icon [name]="logoutPage.icon" item-left></ion-icon>\n        {{ logoutPage.title }}\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- logged in menu -->\n<ion-menu id="loggedInMenu" [content]="nav">\n  <ion-header [ngClass]="{\'expanded\': expanded}" class="menuHeader">\n    <ion-toolbar color="primary">\n      <ion-title>\n        <label>Orgination Name</label>\n        <span *ngIf="organization_name;else other_type" class="organizationName">{{ organization_name }}</span>\n        <ng-template #other_type ><span class="organizationName">{{ authService.userOrg }}</span></ng-template>\n      </ion-title>\n      <ion-buttons end class="btnClose" text-center>\n        <button ion-button icon-only menuClose>\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item ion-item (click)="onLoad(profilePage)">\n        <ion-icon name="ios-person-outline" item-left></ion-icon>\n        My Account\n      </ion-item>\n\n      <ion-item-group submenu [class.visible]="showSubmenu" class="submenu">\n        <ion-item *ngFor="let accountPage of accountPages" submenu-item (click)="openPage(accountPage)">\n          <ion-icon [name]="accountPage.icon" item-left></ion-icon>\n          {{ accountPage.title }}\n        </ion-item>\n      </ion-item-group>\n\n      <!--Managment Patient-->\n      <ion-item ion-item (click)="onLoad(patientTabs)">\n        <ion-icon name="people" item-left></ion-icon>\n        Manage Patients\n      </ion-item>\n\n      <ion-item-group submenu [class.visible]="showSubmenu" class="submenu">\n        <ion-item *ngFor="let patientPage of patientPages" submenu-item (click)="openPage(patientPage)">\n          <ion-icon [name]="patientPage.icon" item-left></ion-icon>\n          {{ patientPage.title }}\n        </ion-item>\n      </ion-item-group>\n\n\n      <ion-item *ngFor="let loginPage of loggedInPages" ion-item (click)="openPage(loginPage)">\n        <ion-icon [name]="loginPage.icon" item-left></ion-icon>\n        {{ loginPage.title }}\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #nav swipeBackEnabled="false" main name="app"></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.isMatching = function (group) {
        var firstPassword = group.controls['password'].value;
        var secondPassword = group.controls['confirm_password'].value;
        if ((firstPassword && secondPassword) && (firstPassword != secondPassword)) {
            group.controls['confirm_password'].setErrors({ "pw_mismatch": true });
            return { "pw_mismatch": true };
        }
        else {
            return null;
        }
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.checkEmail = function (control) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // skip validation if empty (Validators.required should handle this)
        if (!control.value) {
            return null;
        }
        if (!re.test(control.value)) {
            //control.value.setErrors({"invalidEmail": true});
            return {
                "invalidEmail": true
            };
        }
        return null;
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = (function () {
    function Config() {
    }
    return Config;
}());
Config.payPalEnvironmentSandbox = 'AR7K1GJxpF60aesSy0U1Gu8vR4sG7fzqr0QUWPk1eYK8vg9XYjUvTaMn1YfMag3BE5NzjvPP1NANw6sQ';
Config.payPalEnvironmentProduction = 'ARJvcORJ5ur3OL72YnECMzPRZ--yDDuJV2u-65VZJRsm8YqW6PDk85Hmt6ionTGqIn2QCm6eLCqYUpBU';
Config = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Config);

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
var PatientService = (function () {
    function PatientService() {
        this.patients = [];
    }
    PatientService.prototype.deletePatient = function (patient) {
    };
    PatientService.prototype.createPatient = function (patient) {
    };
    PatientService.prototype.closePatient = function (patient) {
        var position = this.patients.findIndex(function (patientEl) {
            return patientEl.p_id == patient.p_id;
        });
        this.patients.splice(position, 1);
    };
    PatientService.prototype.addPatient = function () {
    };
    return PatientService;
}());

//# sourceMappingURL=patients.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_user_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, menuCtrl, userData, loadingCtrl, authService, events, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.expanded = false;
        this.tab = this.navCtrl.parent;
        this.userID = this.userData.userid;
        if (navParams.get('id') != undefined) {
            this.id = navParams.get('id');
        }
        else {
            this.id = this.userData.userid;
        }
        this.name = navParams.get('name');
    }
    ProfilePage.prototype.doRefresh = function (refresher) {
        this.showPatientDetails();
        refresher.complete();
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.events.publish('user:login');
        this.showPatientDetails();
    };
    ProfilePage.prototype.showPatientDetails = function () {
        var _this = this;
        this.showLoader();
        this.authService.getUserInfo({ user_id: this.id }, 'user_profile')
            .then(function (result) {
            _this.userDetails = result;
            console.log('profileeeeee');
            console.log(_this.userDetails);
            //console.log(this.userDetails.response);
            if (_this.userDetails != null) {
                _this.hasLogin = 1;
                _this.zip_code = _this.userDetails.response.zip_code;
                _this.organization_name = _this.userDetails.response.organization_name;
                _this.organization_physical_address = _this.userDetails.response.organization_physical_address;
                _this.address = _this.userDetails.response.address;
                _this.city = _this.userDetails.response.city;
                _this.state = _this.userDetails.response.state;
                _this.alt_contact = _this.userDetails.response.alt_contact;
                _this.primary_contact = _this.userDetails.response.primary_contact;
                _this.organization_business_phone = _this.userDetails.response.organization_business_phone;
                _this.website = _this.userDetails.response.website;
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error, ' + err);
        });
    };
    ProfilePage.prototype.presentProfileModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__["a" /* EditProfilePage */], {
            user_id: this.userID,
            organization_name: this.organization_name,
            organization_physical_address: this.organization_physical_address,
            address: this.address,
            city: this.city,
            state: this.state,
            zip_code: this.zip_code,
            alt_contact: this.alt_contact,
            primary_contact: this.primary_contact,
            organization_business_phone: this.organization_business_phone,
            website: this.website
        });
        profileModal.onDidDismiss(function (data) {
            console.log('uuuuu');
            _this.showPatientDetails();
        });
        profileModal.present();
    };
    // Present Toast
    ProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfilePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    ProfilePage.prototype.somehowToggleExpand = function () {
        this.expanded = true;
    };
    ProfilePage.prototype.onOpenMenu = function () {
        this.menuCtrl.open();
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('userid issss Profile : ' + this.userID);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showSearchbar">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding (ionRefresh)="doRefresh($event)">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="ios">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngIf="hasLogin">\n    <ion-list class="profile_content">\n      <ion-item>\n        <p>Organization Name</p>\n        <h2 *ngIf="userDetails.response.organization_name" >{{ userDetails.response.organization_name }}</h2>\n      </ion-item>\n\n      <ion-item>\n        <p>Physical Address </p>\n        <h2 *ngIf="userDetails.response.address">{{ userDetails.response.address }}</h2>\n      </ion-item>\n\n      <ion-item>\n        <p>City </p>\n        <h2 *ngIf="userDetails.response.city">{{ userDetails.response.city }}</h2>\n      </ion-item>\n\n      <ion-item>\n        <p>State  </p>\n        <h2 *ngIf="userDetails.response.state">{{ userDetails.response.state }}</h2>\n      </ion-item>\n\n      <ion-item>\n        <p>Zip Code  </p>\n        <h2 *ngIf="userDetails.response.zip_code">{{ userDetails.response.zip_code }}</h2>\n      </ion-item>\n      <ion-item>\n        <p>Organization Business Phone </p>\n        <h2 *ngIf="userDetails.response.organization_business_phone">{{ userDetails.response.organization_business_phone }}</h2>\n      </ion-item>\n\n      <ion-item>\n        <p>Primary Mobile Number For Patient Alerts </p>\n        <h2 *ngIf="userDetails.response.primary_contact">{{ userDetails.response.primary_contact }}</h2>\n      </ion-item>\n\n      <ion-item *ngIf="userDetails.response.alt_contact">\n        <p>General/Public Phone Number  </p>\n        <h2 *ngIf="userDetails.response.alt_contact">{{ userDetails.response.alt_contact }} </h2>\n      </ion-item>\n\n      <ion-item *ngIf="userDetails.response.website">\n          <p>Website  </p>\n          <h2 *ngIf="userDetails.response.website">{{ userDetails.response.website }} </h2>\n        </ion-item>\n\n    </ion-list>\n  </ion-card>\n\n  <ion-grid *ngIf="userDetails">\n    <ion-row>\n      <ion-col width-100><button ion-button style="width:100%" (click)="presentProfileModal()">Edit</button></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paypal_page__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayPalModule = (function () {
    function PayPalModule() {
    }
    return PayPalModule;
}());
PayPalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__paypal_page__["a" /* PayPalPage */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__paypal_page__["a" /* PayPalPage */]
        ]
    })
], PayPalModule);

//# sourceMappingURL=paypal.module.js.map

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OtpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OtpPage = (function () {
    //optForm: {}
    function OtpPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.optParameter = this.navParams.get("otpNumber");
        this.id = this.navParams.get("docId");
        console.log(this.navParams.get("docId"));
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpPage');
    };
    OtpPage.prototype.varifacationNumber = function (form) {
        //this.optParameter = this.navParams.get("otpNumber");
        var _this = this;
        console.log(form.value.otp);
        this.authService.getOtp({ "otp_number": form.value.otp, "user_id": this.id }, "otp_check")
            .then(function (result) {
            console.log("hhhh" + result);
            if (_this.optParameter == form.value.otp) {
            }
            else {
            }
        }, function (err) {
            console.log("Error" + err);
        });
    };
    return OtpPage;
}());
OtpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-otp',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/otp/otp.html"*/'<!--\n  Generated template for the OtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4 text-center>Sit back & Relax! while we verify your mobile number</h4>\n  <h2 text-center>(Enter the OTP below in case if we fail to detect the SMS automatically)</h2>\n\n  <form #checkOTP="ngForm" (ngSubmit)="varifacationNumber(checkOTP)">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" ngModel name="otp" autocapitalize="off" placeholder="Enter OTP"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button class="submit-btn theme-btn" full type="submit">Check OTP</button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/otp/otp.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], OtpPage);

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_paypal__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patient_tab_patient_tab__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PayPalPage = (function () {
    function PayPalPage(toastCtrl, plt, payPal, navParams, authService, loadingCtrl, navCtrl, viewCtrl) {
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.payPal = payPal;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.currencies = ['USD'];
        this.payPalEnvironment = 'PayPalEnvironmentProduction';
        this.payment = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_paypal__["c" /* PayPalPayment */](this.navParams.get('totalAmpount'), 'USD', 'Description', 'sale');
        this.totalAmount = this.navParams.get('totalAmpount');
        console.log(this.totalAmount);
        this.patientID = this.navParams.get('patientID');
        this.patientName = this.navParams.get('patientName');
    }
    PayPalPage.prototype.closeModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    PayPalPage.prototype.makePayment = function () {
        var _this = this;
        this.plt.ready().then(function (readySource) {
            console.log('Platform ready from', readySource);
            // Platform now ready, execute any required native code
        });
        this.payPal.init({
            PayPalEnvironmentProduction: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].payPalEnvironmentProduction,
            PayPalEnvironmentSandbox: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].payPalEnvironmentSandbox
        }).then(function () {
            _this.payPal.prepareToRender(_this.payPalEnvironment, new __WEBPACK_IMPORTED_MODULE_1__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                _this.payPal.renderSinglePaymentUI(_this.payment).then(function (response) {
                    //alert(`Successfully paid. Status = ${response.response.state}`);
                    console.log(response);
                    //alert(response.response.id);
                    _this.transectionID = response.response.id;
                    _this.newTransactionID = _this.transectionID.replace("PAY-", "");
                    console.log(_this.newTransactionID);
                    //alert(this.newTransactionID);
                    _this.authService.postData({ transactionid: _this.newTransactionID, EntryId: _this.patientID, amount: _this.totalAmount, status: 'Completed' }, 'update_payment');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__patient_tab_patient_tab__["a" /* PatientTabPage */]);
                }, function () {
                    console.error('Error or render dialog closed without being successful');
                    _this.authService.postData({ transactionid: _this.newTransactionID, EntryId: _this.patientID, amount: _this.totalAmount, status: 'Pending' }, 'update_payment');
                });
            }, function () {
                console.error('Error in configuration');
                _this.authService.postData({ transactionid: _this.newTransactionID, EntryId: _this.patientID, amount: _this.totalAmount, status: 'Canceled' }, 'update_payment');
            });
        }, function (err) {
            console.log(err);
            console.log(err);
            _this.presentToast('ERROR ,' + err);
            console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__patient_tab_patient_tab__["a" /* PatientTabPage */], { tabIndex: 1 });
        });
    };
    PayPalPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    PayPalPage.prototype.presentToast = function (error) {
        var toast = this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return PayPalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Nav */])
], PayPalPage.prototype, "nav", void 0);
PayPalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-paypal',template:/*ion-inline-start:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/paypal/paypal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Paypal</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showSearchbar">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="paypal_page" padding>\n  <form name="paymentForm">\n    <ion-item>\n      <ion-label floating>Amount</ion-label>\n      <ion-input type="text" name="amount" [(ngModel)]="payment.amount"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Currency</ion-label>\n      <ion-select [(ngModel)]="payment.currency" name="currency">\n        <ion-option value="{{currency}}" *ngFor="let currency of currencies">{{currency}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <p>\n      <button ion-button block color="secondary" (click)="makePayment()">MAKE PAYMENT</button>\n    </p>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/mobileapps/Desktop/BPCI-26-02/BPCI/src/pages/paypal/paypal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_paypal__["a" /* PayPal */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */]])
], PayPalPage);

//# sourceMappingURL=paypal.page.js.map

/***/ })

},[589]);
//# sourceMappingURL=main.js.map