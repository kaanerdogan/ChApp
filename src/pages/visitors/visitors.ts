import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-visitors',
  templateUrl: 'visitors.html'
})
export class VisitorsPage {

  visitors: any;

  constructor(public navCtrl: NavController) {
    this.visitors = "onvis";

  }

}
