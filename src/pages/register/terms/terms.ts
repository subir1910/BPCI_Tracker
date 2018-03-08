import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
  selector: 'popupTerms',
  templateUrl: 'terms.html'
})
export class TermsPage{
  constructor(public viewCtrl: ViewController){}

  close(){
    this.viewCtrl.dismiss();
  }
}
