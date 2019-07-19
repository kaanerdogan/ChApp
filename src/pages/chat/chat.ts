import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  name: any;
  msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('name');
    this.msg = navParams.get('msg');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
