import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ChatPage} from "../pages/chat/chat";
import {ChatlistPage} from "../pages/chatlist/chatlist";
import {LoginPage} from "../pages/login/login";
import {SettingsPage} from "../pages/settings/settings";
import {VisitorsPage} from "../pages/visitors/visitors";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChatPage,
    ChatlistPage,
    LoginPage,
    SettingsPage,
    VisitorsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, [
      {tabsHideOnSubPages: "true"},
      'luegg.directives'
      ])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChatPage,
    ChatlistPage,
    LoginPage,
    SettingsPage,
    VisitorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
