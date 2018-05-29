import { Injectable } from '@angular/core';
import { Tab } from '../models/tab.interface';

@Injectable()
export class TabService {
   private tabs: Array<Tab> = [];

   addTab(tab: Tab) {
      if (this.tabs.length === 0) {
         tab.selected = true;
      } else {
          tab.selected = false;
      }
      this.tabs.push(tab);
      return tab.selected;
   }

   getTabs(): Array<Tab> {
      return this.tabs;
   }

   isTabSelected(tab) {
       const selectedTab = this.tabs.find((t) => t === tab);
       return selectedTab.selected;
   }
}
