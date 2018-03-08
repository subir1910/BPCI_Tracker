import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Tabs} from 'ionic-angular';
import {AddPatientPage} from "../add-patient/add-patient";
import {AddManualeventPage} from "../add-manualevent/add-manualevent";
import {AlertFrequencyPage} from "../alert-frequency/alert-frequency";
import {PatientListPage} from "../patient-list/patient-list";
import {UserData} from "../../providers/auth-service/user-data";

/**
 * Generated class for the PatientTabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-patient-tab',
  templateUrl: 'patient-tab.html',
})
export class PatientTabPage {

  @ViewChild('page-tabs') tabRef: Tabs;

  addPatient :any = AddPatientPage;
  addManualEvent: any = AddManualeventPage;
  alertFrequency: any = AlertFrequencyPage;
  patientList: any = PatientListPage;
  userID: any;
  mySelectedIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user_data: UserData) {

    let tabIndex = this.navParams.get('tabIndex');
    console.log(tabIndex);
    if(tabIndex){
      this.mySelectedIndex = tabIndex;
    }

    this.mySelectedIndex = navParams.data.tabIndex || 0;
    let id = navParams.get('id');
    let name = navParams.get('name');

  }

  ionViewDidLoad() {
    this.userID = this.user_data.userid;
  }

}
