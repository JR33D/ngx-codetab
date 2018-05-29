import { Component } from '@angular/core';

@Component({
   selector: 'ngx-demo-configurations',
   templateUrl: './configurations.component.html',
   styleUrls: ['./configurations.component.scss'],
})
export class ConfigurationsComponent {
   installCmd = `
   npm i ngx-codetab --save`;

   moduleCode = `
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxCodeTabModule } from 'ngx-codetab';

    @NgModule({
        imports: [BrowserModule, NgxCodeTabModule],
        declarations: [AppComponent],
    })
    export class AppModule { }`;

    prismInstall = `
    npm i prismJs --save`;

    prismStyles = `
    "styles": [
        "node_modules/prismjs/themes/prism-tomorrow.css"
     ]`;

   interfaceCode = `
    export interface Tab {
        title?: string;
        language: string;
        source: string;
        selected?: boolean; // Setup internally starting with first element in array/list
    }`;

   boxUse = `
   <ngx-codebox [title]="phpItem.title" [language]="phpItem.language" [source]="phpItem.source"></ngx-codebox>`;

   templateCode = `
    <ngx-codetab-collection>
        <ngx-codebox title="Custom Title" [language]="phpItem.language" [source]="phpItem.source"></ngx-codebox>
        <ngx-codebox [language]="jsItem.language" [source]="jsItem.source"></ngx-codebox>
    </ngx-codetab-collection>`;

   goToRoute(id) {
      const elm = document.getElementById(id).scrollIntoView();
      const scrolledY = window.scrollY;

      if (scrolledY) {
         window.scroll(0, scrolledY - 75);
      }
   }
}
