import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApPrismModule } from '@angular-package/prism';

import { CodeTabComponent } from './codetab/codetab.component';
import { CodeTabCollectionComponent } from './codetab-collection/codetab-collection.component';
import { CodeboxComponent } from './codebox/codebox.component';
import { TabService } from './services/tabs.service';

@NgModule({
   imports: [BrowserModule, ApPrismModule],
   declarations: [
      CodeTabComponent,
      CodeTabCollectionComponent,
      CodeboxComponent
   ],
   exports: [
      CodeTabComponent,
      CodeTabCollectionComponent,
      CodeboxComponent
   ]
})
export class NgxCodeTabModule {}
