import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApPrismModule } from '@angular-package/prism';

import { CodeTabComponent } from './codetab/codetab.component';
import { CodeTabCollectionComponent } from './codetab-collection/codetab-collection.component';
import { CodeboxComponent } from './codebox/codebox.component';

@NgModule({
   imports: [CommonModule, ApPrismModule],
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
