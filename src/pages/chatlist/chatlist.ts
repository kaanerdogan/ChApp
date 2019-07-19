import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-chatlist',
  templateUrl: 'chatlist.html',
})

export class ChatlistPage {

  chatList: any[];
  chats: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.chats = "ongoing";
    this.chatList = [
      {
        name: 'Harry Potter',
        link: 'https://ecommerce.com/wands/phoenixfeather',
        msgTime: 20190701101010,
        msg: 'I want to buy a wand but if this wand doesn\'t choose me can i return it?',
        browser: 'Chrome',
        signedin: false,
        from: 'USA',
        enteredat: 20190701101000
      },
      {
        name: 'Albus Dumbledore',
        link: 'https://ecommerce.com/animals/phoenix',
        msgTime: 20190701101110,
        msg: 'My phoenix can\'t fly is it broken or something?',
        browser: 'Edge',
        signedin: false,
        from: 'USA',
        enteredat: 20190701101100
      },
      {
        name: 'Hermione Granger',
        link: 'https://ecommerce.com/books/secretspells',
        msgTime: 20190701101210,
        msg: 'Isn\'t this book forbidden? I bet dumbledore doesn\'t know this.',
        browser: 'Yandex',
        signedin: false,
        from: 'USA',
        enteredat: 20190701101200
      },
      {
        name: 'Ronald Weasley',
        link: 'https://ecommerce.com/animals/rats',
        msgTime: 20190701101310,
        msg: 'I wanted to turn my rat in to a water goblet but it become ratgoblet. Return option?',
        browser: 'Chrome',
        signedin: true,
        from: 'USA',
        enteredat: 20190701101300
      },
      {
        name: 'Ginny Weasley',
        link: 'https://ecommerce.com/potions/lovepotion',
        msgTime: 20190701101410,
        msg: 'How long can love potion affect?',
        browser: 'Chrome',
        signedin: true,
        from: 'USA',
        enteredat: 20190701101400
      }

    ];
  }

  chatSelect(event, chat) {
    console.log(chat.name + " ile olan chatlist görüntüleniyor");
    this.navCtrl.push(ChatPage, {name: chat.name, msg: chat.msg});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
