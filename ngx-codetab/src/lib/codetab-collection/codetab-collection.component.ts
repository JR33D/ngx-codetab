import { Component, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { TabService } from '../services/tabs.service';
import { Tab } from '../models/tab.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CodeTabComponent } from '../codetab/codetab.component';

@Component({
   selector: 'ngx-codetab-collection',
   templateUrl: './codetab-collection.component.html',
   styleUrls: ['./codetab-collection.component.scss'],
   providers: [ TabService ]
})
export class CodeTabCollectionComponent implements AfterViewInit {
   tabs: Tab[];

   constructor(private tabService: TabService) {}

   select(tab: Tab) {
       this.tabs.forEach((t) => (t !== tab ? t.selected = false : t.selected = true));
   }

   ngAfterViewInit() {
       this.tabs = this.tabService.getTabs();
   }

}
