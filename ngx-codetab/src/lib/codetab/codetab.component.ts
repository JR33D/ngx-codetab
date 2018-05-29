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
   public selected: boolean;
   private tab: Tab;

   constructor(private tabService: TabService) {
   }

   ngOnInit() {
      this.tab = { title: this.title, language: this.language, source: this.source };
      this.selected = this.tabService.addTab(this.tab);
    }

    isSelected() {
        this.selected = this.tabService.isTabSelected(this.tab);
        return this.selected;
    }
}
