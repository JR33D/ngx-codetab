(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ngx-codetab/src/lib/codebox/codebox.component.html":
/*!*************************************************************!*\
  !*** ../ngx-codetab/src/lib/codebox/codebox.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"codebox\">\n    <div class=\"codebox-header codebox-{{language | lowercase}}\">{{title || (language | uppercase)}}</div>\n    <div class=\"codebox-content\">\n        <ngx-prism language=\"{{language | lowercase}}\" [code]=\"source\"></ngx-prism>\n    </div>\n</div>\n"

/***/ }),

/***/ "../ngx-codetab/src/lib/codebox/codebox.component.scss":
/*!*************************************************************!*\
  !*** ../ngx-codetab/src/lib/codebox/codebox.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0 5%; }\n\nbody {\n  font-family: sans-serif; }\n\n.codebox {\n  margin-bottom: 16px; }\n\n.codebox-header, .codetabs-header {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #fff;\n  background: #575656; }\n\n.codebox-header {\n  padding: 6px 16px; }\n\n.codebox-header.codebox-html {\n    background-color: #e44d26; }\n\n.codebox-header.codebox-css {\n    background-color: #0270ba; }\n\n.codebox-header.codebox-javascript {\n    background-color: #f7df1e; }\n\n.codebox-header.codebox-php {\n    background-color: #6082bb; }\n\n.codebox-header.codebox-java {\n    background-color: #f89820; }\n\n.codebox-header.codebox-csharp {\n    background-color: #68217a; }\n\n.codebox-content {\n  padding: 16px;\n  font-family: Inconsolata, monospaced;\n  font-size: 14px;\n  color: #fff;\n  background-color: #3d3d3d; }\n\n.codebox-content pre {\n    margin: 0; }\n\n.codebox-content .codetab-content {\n    display: none; }\n\n.codebox-content .codetab-content.active {\n      display: block; }\n"

/***/ }),

/***/ "../ngx-codetab/src/lib/codebox/codebox.component.ts":
/*!***********************************************************!*\
  !*** ../ngx-codetab/src/lib/codebox/codebox.component.ts ***!
  \***********************************************************/
/*! exports provided: CodeboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeboxComponent", function() { return CodeboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeboxComponent = /** @class */ (function () {
    function CodeboxComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodeboxComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodeboxComponent.prototype, "language", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodeboxComponent.prototype, "source", void 0);
    CodeboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-codebox',
            template: __webpack_require__(/*! ./codebox.component.html */ "../ngx-codetab/src/lib/codebox/codebox.component.html"),
            styles: [__webpack_require__(/*! ./codebox.component.scss */ "../ngx-codetab/src/lib/codebox/codebox.component.scss")]
        })
    ], CodeboxComponent);
    return CodeboxComponent;
}());



/***/ }),

/***/ "../ngx-codetab/src/lib/codetab-collection/codetab-collection.component.html":
/*!***********************************************************************************!*\
  !*** ../ngx-codetab/src/lib/codetab-collection/codetab-collection.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"codebox\">\n    <div class=\"codetabs-header\">\n        <ul>\n            <li *ngFor=\"let tab of tabs\" ngClass=\"{active: tab.selected}\" class=\"codebox-{{tab.language | lowercase}}\">\n                <a href=\"javascript:void(0);\" (click)=\"select(tab)\">{{tab.title || (tab.language | uppercase)}}</a>\n            </li>\n        </ul>\n    </div>\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../ngx-codetab/src/lib/codetab-collection/codetab-collection.component.scss":
/*!***********************************************************************************!*\
  !*** ../ngx-codetab/src/lib/codetab-collection/codetab-collection.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0 5%; }\n\nbody {\n  font-family: sans-serif; }\n"

/***/ }),

/***/ "../ngx-codetab/src/lib/codetab-collection/codetab-collection.component.ts":
/*!*********************************************************************************!*\
  !*** ../ngx-codetab/src/lib/codetab-collection/codetab-collection.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CodeTabCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeTabCollectionComponent", function() { return CodeTabCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CodeTabCollectionComponent = /** @class */ (function () {
    function CodeTabCollectionComponent() {
        this.tabs = [];
    }
    CodeTabCollectionComponent.prototype.select = function (tab) {
        this.tabs.forEach(function (item) {
            item.selected = false;
        });
        tab.selected = true;
    };
    CodeTabCollectionComponent.prototype.addPane = function (tab) {
        if (this.tabs.length === 0) {
            this.select(tab);
        }
        this.tabs.push(tab);
    };
    CodeTabCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-codetab-collection',
            template: __webpack_require__(/*! ./codetab-collection.component.html */ "../ngx-codetab/src/lib/codetab-collection/codetab-collection.component.html"),
            styles: [__webpack_require__(/*! ./codetab-collection.component.scss */ "../ngx-codetab/src/lib/codetab-collection/codetab-collection.component.scss")],
        })
    ], CodeTabCollectionComponent);
    return CodeTabCollectionComponent;
}());



/***/ }),

/***/ "../ngx-codetab/src/lib/codetab.module.ts":
/*!************************************************!*\
  !*** ../ngx-codetab/src/lib/codetab.module.ts ***!
  \************************************************/
/*! exports provided: NgxCodeTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCodeTabModule", function() { return NgxCodeTabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_package_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-package/prism */ "../node_modules/@angular-package/prism/index.js");
/* harmony import */ var _codetab_codetab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codetab/codetab.component */ "../ngx-codetab/src/lib/codetab/codetab.component.ts");
/* harmony import */ var _codetab_collection_codetab_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./codetab-collection/codetab-collection.component */ "../ngx-codetab/src/lib/codetab-collection/codetab-collection.component.ts");
/* harmony import */ var _codebox_codebox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codebox/codebox.component */ "../ngx-codetab/src/lib/codebox/codebox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NgxCodeTabModule = /** @class */ (function () {
    function NgxCodeTabModule() {
    }
    NgxCodeTabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_package_prism__WEBPACK_IMPORTED_MODULE_2__["ApPrismModule"]],
            declarations: [
                _codetab_codetab_component__WEBPACK_IMPORTED_MODULE_3__["CodeTabComponent"],
                _codetab_collection_codetab_collection_component__WEBPACK_IMPORTED_MODULE_4__["CodeTabCollectionComponent"],
                _codebox_codebox_component__WEBPACK_IMPORTED_MODULE_5__["CodeboxComponent"]
            ],
            exports: [
                _codetab_codetab_component__WEBPACK_IMPORTED_MODULE_3__["CodeTabComponent"]
            ],
        })
    ], NgxCodeTabModule);
    return NgxCodeTabModule;
}());



/***/ }),

/***/ "../ngx-codetab/src/lib/codetab/codetab.component.html":
/*!*************************************************************!*\
  !*** ../ngx-codetab/src/lib/codetab/codetab.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"codetab-content\" ng-class=\"{active: selected}\">\n    <ngx-prism language=\"{{language | lowercase}}\" [code]=\"source\"></ngx-prism>\n</div>\n"

/***/ }),

/***/ "../ngx-codetab/src/lib/codetab/codetab.component.scss":
/*!*************************************************************!*\
  !*** ../ngx-codetab/src/lib/codetab/codetab.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0 5%; }\n\nbody {\n  font-family: sans-serif; }\n\n.codetabs-header > ul:before, .codetabs-header > ul:after {\n  content: \" \";\n  display: table; }\n\n.codetabs-header > ul:after {\n  clear: both; }\n\n.codetabs-header > ul {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n\n.codetabs-header > ul > li {\n    display: block;\n    float: left; }\n\n.codetabs-header > ul > li > a {\n      display: block;\n      padding: 6px 16px;\n      color: #fff;\n      text-decoration: none;\n      position: relative; }\n\n.codetabs-header > ul > li > a:hover, .codetabs-header > ul > li > a:focus {\n        background-color: #4a4a4a; }\n\n.codetabs-header > ul > li.active > a, .codetabs-header > ul > li.active > a:hover, .codetabs-header > ul > li.active > a:focus {\n      cursor: default;\n      background-color: #303030; }\n\n.codetabs-header > ul > li.active > a:before, .codetabs-header > ul > li.active > a:hover:before, .codetabs-header > ul > li.active > a:focus:before {\n        content: \"\";\n        bottom: -5px;\n        left: calc(50% - 6px);\n        position: absolute;\n        display: block;\n        width: 0;\n        height: 0;\n        border-left: 6px solid transparent;\n        border-right: 6px solid transparent;\n        border-top: 6px solid #303030; }\n\n.codetabs-header > ul > li.codebox-html.active > a, .codetabs-header > ul > li.codebox-html.active > a:hover, .codetabs-header > ul > li.codebox-html.active > a:focus {\n      background-color: #e44d26; }\n\n.codetabs-header > ul > li.codebox-html.active > a:before, .codetabs-header > ul > li.codebox-html.active > a:hover:before, .codetabs-header > ul > li.codebox-html.active > a:focus:before {\n        border-top-color: #e44d26; }\n\n.codetabs-header > ul > li.codebox-css.active > a, .codetabs-header > ul > li.codebox-css.active > a:hover, .codetabs-header > ul > li.codebox-css.active > a:focus {\n      background-color: #0270ba; }\n\n.codetabs-header > ul > li.codebox-css.active > a:before, .codetabs-header > ul > li.codebox-css.active > a:hover:before, .codetabs-header > ul > li.codebox-css.active > a:focus:before {\n        border-top-color: #0270ba; }\n\n.codetabs-header > ul > li.codebox-javascript.active > a, .codetabs-header > ul > li.codebox-javascript.active > a:hover, .codetabs-header > ul > li.codebox-javascript.active > a:focus {\n      background-color: #f7df1e; }\n\n.codetabs-header > ul > li.codebox-javascript.active > a:before, .codetabs-header > ul > li.codebox-javascript.active > a:hover:before, .codetabs-header > ul > li.codebox-javascript.active > a:focus:before {\n        border-top-color: #f7df1e; }\n\n.codetabs-header > ul > li.codebox-php.active > a, .codetabs-header > ul > li.codebox-php.active > a:hover, .codetabs-header > ul > li.codebox-php.active > a:focus {\n      background-color: #6082bb; }\n\n.codetabs-header > ul > li.codebox-php.active > a:before, .codetabs-header > ul > li.codebox-php.active > a:hover:before, .codetabs-header > ul > li.codebox-php.active > a:focus:before {\n        border-top-color: #6082bb; }\n\n.codetabs-header > ul > li.codebox-java.active > a, .codetabs-header > ul > li.codebox-java.active > a:hover, .codetabs-header > ul > li.codebox-java.active > a:focus {\n      background-color: #f89820; }\n\n.codetabs-header > ul > li.codebox-java.active > a:before, .codetabs-header > ul > li.codebox-java.active > a:hover:before, .codetabs-header > ul > li.codebox-java.active > a:focus:before {\n        border-top-color: #f89820; }\n\n.codetabs-header > ul > li.codebox-csharp.active > a, .codetabs-header > ul > li.codebox-csharp.active > a:hover, .codetabs-header > ul > li.codebox-csharp.active > a:focus {\n      background-color: #68217a; }\n\n.codetabs-header > ul > li.codebox-csharp.active > a:before, .codetabs-header > ul > li.codebox-csharp.active > a:hover:before, .codetabs-header > ul > li.codebox-csharp.active > a:focus:before {\n        border-top-color: #68217a; }\n"

/***/ }),

/***/ "../ngx-codetab/src/lib/codetab/codetab.component.ts":
/*!***********************************************************!*\
  !*** ../ngx-codetab/src/lib/codetab/codetab.component.ts ***!
  \***********************************************************/
/*! exports provided: CodeTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeTabComponent", function() { return CodeTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeTabComponent = /** @class */ (function () {
    function CodeTabComponent() {
        // tabsCtrl.addPane(scope);
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodeTabComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodeTabComponent.prototype, "language", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodeTabComponent.prototype, "source", void 0);
    CodeTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-codetab',
            template: __webpack_require__(/*! ./codetab.component.html */ "../ngx-codetab/src/lib/codetab/codetab.component.html"),
            styles: [__webpack_require__(/*! ./codetab.component.scss */ "../ngx-codetab/src/lib/codetab/codetab.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], CodeTabComponent);
    return CodeTabComponent;
}());



/***/ }),

/***/ "../ngx-codetab/src/public_api.ts":
/*!****************************************!*\
  !*** ../ngx-codetab/src/public_api.ts ***!
  \****************************************/
/*! exports provided: CodeTabComponent, NgxCodeTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_codetab_codetab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/codetab/codetab.component */ "../ngx-codetab/src/lib/codetab/codetab.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeTabComponent", function() { return _lib_codetab_codetab_component__WEBPACK_IMPORTED_MODULE_0__["CodeTabComponent"]; });

/* harmony import */ var _lib_codetab_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/codetab.module */ "../ngx-codetab/src/lib/codetab.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxCodeTabModule", function() { return _lib_codetab_module__WEBPACK_IMPORTED_MODULE_1__["NgxCodeTabModule"]; });

/*
 * Public API Surface of ngx-codetab
 */




/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configurations/configurations.component */ "./src/app/configurations/configurations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"],
    },
    {
        path: 'config',
        component: _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-demo-navigation></ngx-demo-navigation>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngx-demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-demo-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configurations/configurations.component */ "./src/app/configurations/configurations.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_codetab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-codetab */ "../ngx-codetab/src/public_api.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fab"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"],
                _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_8__["ConfigurationsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                ngx_codetab__WEBPACK_IMPORTED_MODULE_10__["NgxCodeTabModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["APP_BASE_HREF"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].baseRef }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configurations/configurations.component.html":
/*!**************************************************************!*\
  !*** ./src/app/configurations/configurations.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"row\">\r\n    <aside>\r\n        <span class=\"section-label\">Find More</span>\r\n        <a [routerLink]=\"['/config']\" fragment=\"Install\" (click)=\"goToRoute('Install')\">Installing/Getting Started</a>\r\n        <a [routerLink]=\"['/config']\" fragment=\"Module\" (click)=\"goToRoute('Module')\">Add module to you NgModule</a>\r\n        <a [routerLink]=\"['/config']\" fragment=\"Templates\" (click)=\"goToRoute('Templates')\">Templates</a>\r\n        <a [routerLink]=\"['/config']\" fragment=\"Api\" (click)=\"goToRoute('Api')\">API Reference</a>\r\n    </aside>\r\n    <div class=\"col\">\r\n        <h2 id=\"Install\">Installing / Getting started</h2>\r\n        <p>To get started using the libirary install from npm</p>\r\n        <pre><code>\r\n            {{ installCmd }}\r\n        </code></pre>\r\n        <p>This will give you access to the module and components available in the library.</p>\r\n\r\n        <h3 id=\"Module\">Add module to you NgModule</h3>\r\n        <p>After installing the library to get access to the features you need to add it to your AppModule.</p>\r\n        <pre><code>\r\n            {{ moduleCode }}\r\n        </code></pre>\r\n        <p>The inside of you app.component.html you can use the component directve like so:</p>\r\n        <pre><code>\r\n            {{ tagUse }}\r\n        </code></pre>\r\n\r\n        <h2 id=\"Templates\">Template for Title and Content areas</h2>\r\n        <p>It is possible to override the default display text in area functionality by using templates.\r\n            The code beow makes use of the directives, ngxChronologyTitle and ngxChronologyContent to add in a custom template for each area.</p>\r\n        <pre><code>\r\n            {{ templateCode }}\r\n        </code></pre>\r\n\r\n        <h2 id=\"Api\">Api Reference</h2>\r\n        <p>The array of events passed to ‘ngx-chronology’ component should be a set of objects that match the interface:</p>\r\n        <pre><code>\r\n            {{ interfaceCode }}\r\n        </code></pre>\r\n    </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/configurations/configurations.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/configurations/configurations.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 2fr 1fr;\n      grid-template-columns: 2fr 1fr;\n  grid-gap: 20px;\n  margin: 20px; }\n\n.main-content {\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  height: 3000px;\n  background: rgba(255, 255, 255, 0.5); }\n\n.main-content .section-label {\n    position: relative;\n    top: 160px; }\n\naside {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  background: rgba(221, 221, 221, 0.5);\n  height: 150px;\n  width: 250px;\n  padding: 10px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 80px; }\n\naside .section-label {\n    margin-bottom: 10px; }\n\npre {\n  background-color: rgba(220, 220, 220, 0.5); }\n"

/***/ }),

/***/ "./src/app/configurations/configurations.component.ts":
/*!************************************************************!*\
  !*** ./src/app/configurations/configurations.component.ts ***!
  \************************************************************/
/*! exports provided: ConfigurationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsComponent", function() { return ConfigurationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigurationsComponent = /** @class */ (function () {
    function ConfigurationsComponent() {
        this.installCmd = "\n   npm i ngx-chronology --save";
        this.moduleCode = "\n    import { NgModule } from '@angular/core';\n    import { BrowserModule } from '@angular/platform-browser';\n    import { NgxChronologyModule } from 'ngx-chronology';\n\n    @NgModule({\n        imports: [BrowserModule, NgxChronologyModule],\n        declarations: [AppComponent],\n    })\n    export class AppModule { }";
        this.interfaceCode = "\n   export interface IChronologyEvent {\n        title: string;\n        icon?: string;\n        faLibrary: 'far' | 'fas' | 'fab';\n        content: string;\n    }";
        this.tagUse = "\n   <ngx-chronology [title]=\"chronologyTitle\" [events]=\"ArrayOfEvents\"></ngx-chronology>";
        this.templateCode = "\n    <ngx-chronology [events]=\"events\" title=\"Using custom templates\">\n        <ng-template let-event ngxChronologyTitle>\n            <marquee>{{ event.title }}</marquee>\n        </ng-template>\n        <ng-template let-event ngxChronologyContent>\n            <div>\n                Hello I have access to the event object inside of my templates.<br>\n                title: {{ event.title }}<br>\n                content: {{ event.content }}\n            </div>\n        </ng-template>\n    </ngx-chronology>";
    }
    ConfigurationsComponent.prototype.goToRoute = function (id) {
        var elm = document.getElementById(id).scrollIntoView();
        var scrolledY = window.scrollY;
        if (scrolledY) {
            window.scroll(0, scrolledY - 75);
        }
    };
    ConfigurationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-demo-configurations',
            template: __webpack_require__(/*! ./configurations.component.html */ "./src/app/configurations/configurations.component.html"),
            styles: [__webpack_require__(/*! ./configurations.component.scss */ "./src/app/configurations/configurations.component.scss")],
        })
    ], ConfigurationsComponent);
    return ConfigurationsComponent;
}());



/***/ }),

/***/ "./src/app/demo/demo.component.html":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-app=\"app\" ng-controller=\"CodeCtrl\" class=\"container\">\r\n    <h1>Source Code Boxes Using Angular</h1>\r\n    <h2>Tabbed Code Boxes</h2>\r\n    <ngx-codetab-collection>\r\n      <ngx-codetab ng-repeat=\"item in code\" title=\"{{item.title}}\" language=\"{{item.language}}\" source=\"item.source\"></ngx-codetab>\r\n    </ngx-codetab-collection>\r\n\r\n    <h2>Seperate Code Boxes</h2>\r\n    <codebox ng-repeat=\"item in code | limitTo: 3\" title=\"{{item.title}}\" language=\"{{item.language}}\" source=\"item.source\"></codebox>\r\n\r\n    <h2>Custom Named Code Tabs</h2>\r\n    <ngx-codetab-collection>\r\n      <ngx-codetab ng-repeat=\"item in code | limitTo: 3\" title=\"Tab {{$index + 1}}\" language=\"{{item.language}}\" source=\"item.source\"></ngx-codetab>\r\n    </ngx-codetab-collection>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/demo/demo.component.scss":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.code = [
            { language: 'html', source: '<p>Hello World!</p>' },
            { language: 'css', source: 'p:after { content: "Hello World"; }' },
            { title: 'JS', language: 'javascript', source: 'alert(\'Hello World!\');' },
            { language: 'php', source: '<!--?php echo="Hello World!" ?-->' },
            { language: 'java', source: 'System.out.println("Hello World!");' },
            { title: 'C#', language: 'csharp', source: 'Console.WriteLine("Hello World!");' },
        ];
    }
    DemoComponent.prototype.ngOnInit = function () { };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-demo-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.scss */ "./src/app/demo/demo.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" routerLink=\"/\">NGX-Chronology Demo Site</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a routerLink=\"/\" routerLinkActive=\"active\" class=\"nav-link\">Demo</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a routerLink=\"/config\" routerLinkActive=\"active\" class=\"nav-link\">Configuration</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a href=\"https://github.com/jr33d/NGX-Chronology\" class=\"nav-link\" title=\"Find me on Github\"><fa-icon [icon]=\"['fab', 'github']\" size=\"2x\"></fa-icon></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-demo-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseRef: '/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code\ngx-codetabs\ngx-codetab-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map