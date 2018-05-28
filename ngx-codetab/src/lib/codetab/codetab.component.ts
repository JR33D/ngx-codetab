import { Component, Input, OnInit } from '@angular/core';
import { TabService } from '../services/tabs.service';
import { Tab } from '../models/tab.interface';

@Component({
   selector: 'ngx-codetab',
   templateUrl: './codetab.component.html',
   styleUrls: ['./codetab.component.scss'],
})
export class CodeTabComponent implements OnInit {
   @Input() public title: string;
   @Input() public language: string;
   @Input() public source: string;

   constructor(private tabService: TabService) {
   }

   ngOnInit() {
      const tab: Tab = { title: this.title, language: this.language, source: this.source };
      this.tabService.addTab(tab);
    }
}
