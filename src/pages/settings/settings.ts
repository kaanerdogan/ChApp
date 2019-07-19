import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  settings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.settings = "user";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
