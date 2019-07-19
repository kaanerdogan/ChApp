import { Component } from '@angular/core';
import {VisitorsPage} from "../visitors/visitors";
import {ChatlistPage} from "../chatlist/chatlist";
import {SettingsPage} from "../settings/settings";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VisitorsPage;
  tab2Root = ChatlistPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
