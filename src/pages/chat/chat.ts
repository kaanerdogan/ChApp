import { Component } from '@angular/core';
import {Keyboard, NavController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  name: any;
  msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {
    this.name = navParams.get('name');
    this.msg = navParams.get('msg');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    console.log('Open:' , this.keyboard.isOpen());
  }
  keyboardCheck() {
    console.log('The keyboard is open:', this.keyboard.isOpen());
  }

}
