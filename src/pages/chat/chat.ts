import { Component } from '@angular/core';
import {Keyboard, NavController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  name: any;
  msg: any;
  CM = [];
  GM = [];
  msgInput: any;
  // nickname: any;
  // messages = [];
  // message;
  // msg;

  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {
    this.name = navParams.get('name');
    this.msg = navParams.get('msg');
    // this.nickname = navParams.get('uname');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendMsg(msgInput) {
    this.GM.push(msgInput);
    this.msgInput = "";
  }
  //
  // sendMessage() {
  //   this.messages.push(this.message);
  //   this.message = "";
  //   console.log("Message sended")
  // }
  //
  // switchEmojiPicker() {
  //
  // }



}
