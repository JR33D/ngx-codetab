import { Injectable } from '@angular/core';
import { Tab } from '../models/tab.interface';

@Injectable()
export class TabService {
   private tabs: Array<Tab> = [];

   addTab(tab: Tab) {
      if (this.tabs.length === 0) {
         tab.selected = true;
      }
      this.tabs.push(tab);
   }

   getTabs(): Array<Tab> {
      return this.tabs;
   }
}
