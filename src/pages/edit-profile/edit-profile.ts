import { Component, OnInit } from '@angular/core';
import {
  Events, LoadingController, MenuController, NavController, NavParams,
  Tabs, ViewController
} from 'ionic-angular';
import {UserData} from "../../providers/auth-service/user-data";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {NgForm} from "@angular/forms";

/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage implements OnInit {

  showSearchbar: boolean = false;
  tab: Tabs;
  userID: string;
  userDetails: any;
  loading: any;

  public user_id: any;
  public organization_name: any;
  public organization_physical_address: any;
  public address: any;
  public city: any;
  public state: any;
  public zip_code: any;
  public primary_contact: any;
  public organization_business_phone: any;
  public alt_contact: any;
  public website: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    public userData: UserData,
    public loadingCtrl: LoadingController,
    private authService: AuthServiceProvider,
    public events: Events,
    public viewCtrl: ViewController,
    public params: NavParams
  ) {
    this.user_id = this.params.get('user_id');
    this.organization_name= this.params.get('organization_name');
    this.organization_physical_address = this.params.get('organization_physical_address');
    this.address= this.params.get('address');
    this.city = this.params.get('city');
    this.state = this.params.get('state');
    this.zip_code = this.params.get('zip_code');
    this.alt_contact = this.params.get('alt_contact');
    this.primary_contact = this.params.get('primary_contact');
    this.organization_business_phone = this.params.get('organization_business_phone');
    this.website = this.params.get('website');
  }

  ngOnInit(){
    this.events.publish('user:login');
    this.authService.getUserInfo({user_id: this.userID}, 'user_profile')
      .then((result) => {
        this.userDetails = result;
        console.log('User Details');
        console.log(this.userDetails);
      }, (err) => {
        console.log('getting error');
      });
  }

  updateProfile(form: NgForm){
    //this.showLoader();
    this.authService.updateProfile({formData: form.value}, 'update_user_profile')
      .then((result) => {
        //this.loading.dismiss();
        this.viewCtrl.dismiss();
      }, (err) => {
        //this.loading.dismiss();
        console.log(err);
      })
  }
  closeModal() {
    this.navCtrl.pop();
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    this.loading.present();
  }

  expanded = false;
  somehowToggleExpand() {
    this.expanded = true;
  }
  onOpenMenu(){
    this.menuCtrl.open();
  }

  ionViewDidLoad() {
    console.log('userid is : ' + this.userID);
  }

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
    this.tab.select(1);
  }

}
