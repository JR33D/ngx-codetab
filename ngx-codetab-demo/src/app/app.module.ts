import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DemoComponent } from './demo/demo.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxCodeTabModule } from 'ngx-codetab';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';

library.add(fab);

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      DemoComponent,
      ConfigurationsComponent,
   ],
   imports: [
       BrowserModule,
       AppRoutingModule,
       FontAwesomeModule,
       NgxCodeTabModule
    ],
   providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseRef }
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
