import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uname: any = "";
  pass: any;
  buttonText: any = 'LOGIN';
  buttonText2: any = 'CHECKING';
  loginClicked: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginForm(uname) {
    this.buttonText = this.buttonText2;
    this.loginClicked = !this.loginClicked;
    setTimeout(() => {
      this.navCtrl.setRoot(TabsPage, {uname: uname});
    }, 2500)
    console.log(uname + " Olarak giriş yapıldı");
  }
}
