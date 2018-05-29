# NGX-codetab

This is a codetab module and components for Angular projects. [Live Demo Here](https://jr33d.github.io/ngx-codetab/)

<!-- ![Logo of the project](./images/green/Icon_256.png) -->

## Badges

[![Build](https://img.shields.io/travis/JR33D/ngx-codetab.svg)](https://travis-ci.org/JR33D/ngx-codetab)
[![npm](https://img.shields.io/npm/v/ngx-codetab.svg)](https://www.npmjs.com/package/ngx-codetab)
[![License](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://github.com/your/your-project/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## Installing / Getting started

To get started using the library install from npm

```shell
npm i ngx-codetab --save
```

This will give you access to the module and components available in the library.

### Add module to you NgModule

After installing the library to get access to the features you need to add it to your AppModule.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCodeTabModule } from 'ngx-codetab';

@NgModule({
   imports: [BrowserModule, NgxCodeTabModule],
   declarations: [AppComponent],
})
export class AppModule {}
```

The inside of you app.component.html you can use the component like so:

```html
<ngx-codetab [language]="html" [content]="<p>Hello World</p>"></ngx-codetab>
```

If you would like a collection of tabs together simple wrap them in the collection component

```html
<ngx-codetab-collection>
    <ngx-codetab [language]="html" [content]="<p>Hello World</p>"></ngx-codetab>
    <ngx-codetab [language]="js" [content]="console.log('loading...');"></ngx-codetab>
    <ngx-codetab [language]="css" [content]="p { color: blue; }"></ngx-codetab>
</ngx-codetab-collection>
```

For more information on using this component go to the [Documentation and Demo site](https://jr33d.github.io/ngx-codetab/)

## Want to Contribute?

Go check out our [Contributing Document](/Contribute.md) for more information on getting setup.
