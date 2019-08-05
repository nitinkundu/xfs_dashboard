(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"card\">\n\n    <h1 style=\"font-size: 150%\" > \n        <!-- <img src=\"https://banner2.kisspng.com/20180708/w/kisspng-wipro-logo-business-corporate-identity-5b420d04296d14.4683181615310553641697.jpg\" alt=\"Wipro logo\" style=\"width:60px;height:40px;\"> -->\n    XFS | Digital Rig </h1>\n  \n</div>\n<div class= \"space\"></div>\n<div class= \"element\">\n <h2 style=\"font-size:120%; text-align: center; font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial,\"> <b>Jenkins Build Status</b> </h2><br>\n<!-- <b>Commiter's Name</b> : {{dash.commiter}}\n<hr>\n<b>Job Name</b> : {{dash.jobtitle}}\n<hr>\n<b>Build Number</b> : {{dash.number}}\n<hr>\n<b>Build status</b> : {{dash.status}}\n<hr>\n<b>Build Url</b> : {{link}} -->\n<b>Commiter's Name</b> : {{dash.commiter}}\n<br><br>\n<b>Job Name</b> : {{dash.jobtitle}}\n<br><br>\n<b>Build Number</b> : {{dash.number}}\n<br><br>\n<b>Build Status</b> : {{dash.status}}\n<br><br>\n<b>Build URL</b> : {{link}}\n<br><br>\n</div>\n<div class=\"footer\">\n    <p>Team KSR [Ankush, Ashish, Bizeet, Manisa, Nitin, Samlee, Sudipa]</p>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"card\">\n\n  <h1 style=\"font-size: 150%\" >\n     <!-- <img src=\"https://banner2.kisspng.com/20180708/w/kisspng-wipro-logo-business-corporate-identity-5b420d04296d14.4683181615310553641697.jpg\" alt=\"Wipro logo\" style=\"width:60px;height:40px;\"> -->\n     XFS | Digital Rig </h1>\n\n</div>\n<div class= \"space\"></div>\n<mat-card class=\"example-card\">\n  <h2 style=\"font-size:120%; text-align: center; font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial,\"> <b>XFS Login</b> </h2><br>\n    <mat-card-content>\n      <form class=\"example-form\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n          <td><mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" [(ngModel)]=\"password\"type=\"password\" name=\"password\" required>\n          </mat-form-field></td>\n        </tr></table>\n      </form>\n      <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n    </mat-card-actions>\n  </mat-card>\n  <div class=\"footer\">\n  <p>Team KSR</p>\n</div>\n   <router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    // { path: '', component: LoginComponent },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.service */ "./src/app/services.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.title = 'XFS';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.findAll().subscribe(function (data) {
            console.log(data);
            _this.dash = data;
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services.service */ "./src/app/services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["CustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_services_service__WEBPACK_IMPORTED_MODULE_7__["ServicesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .card {\r\n    box-shadow: 0 6px 10px 0 rgba(100, 100, 104, 0.644); \r\n   font-family: arial;\r\n   font-size: 100%;\r\n   height: 50px;\r\n   background-color: rgb(252, 248, 248);\r\n   padding-top: 8px;\r\n   font-size: 100%;\r\n   padding-right: 0px;\r\n   padding-bottom: 0px;\r\n   padding-left: 20px;\r\n  }\r\n  \r\n  .element {\r\n   box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.2);\r\n   max-width: 1000px;\r\n   margin: auto;\r\n   text-align: left;\r\n   font-family: 'Times New Roman', Times, serif;\r\n   padding-top: 50px;\r\n   padding-right: 30px;\r\n   padding-bottom: 40px;\r\n   padding-left: 30px;\r\n   font-size:120%\r\n  }\r\n  \r\n  .footer {\r\n   box-shadow: 8px 4px 8px 20px rgba(13, 5, 92, 0.2);\r\n   position: fixed;\r\n   left: 0;\r\n   bottom: 0;\r\n   width: 100%;\r\n   background-color: rgb(0, 0, 0);\r\n   color: white;\r\n   text-align: center;\r\n }\r\n  \r\n  .space {\r\n   padding-top: 40px;\r\n   padding-right: 30px;\r\n   padding-bottom: 15px;\r\n   padding-left: 40px;\r\n }\r\n  \r\n  hr{\r\n border-width: 1px;\r\n border-color: grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFDQTtJQUNFLG1EQUFtRDtHQUNwRCxrQkFBa0I7R0FDbEIsZUFBZTtHQUNmLFlBQVk7R0FDWixvQ0FBb0M7R0FDcEMsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsbUJBQW1CO0dBQ25CLGtCQUFrQjtFQUNuQjs7RUFDQTtHQUNDLDRDQUE0QztHQUM1QyxpQkFBaUI7R0FDakIsWUFBWTtHQUNaLGdCQUFnQjtHQUNoQiw0Q0FBNEM7R0FDNUMsaUJBQWlCO0dBQ2pCLG1CQUFtQjtHQUNuQixvQkFBb0I7R0FDcEIsa0JBQWtCO0dBQ2xCO0VBQ0Q7O0VBQ0Q7R0FDRSxpREFBaUQ7R0FDakQsZUFBZTtHQUNmLE9BQU87R0FDUCxTQUFTO0dBQ1QsV0FBVztHQUNYLDhCQUE4QjtHQUM5QixZQUFZO0dBQ1osa0JBQWtCO0NBQ3BCOztFQUNBO0dBQ0UsaUJBQWlCO0dBQ2pCLG1CQUFtQjtHQUNuQixvQkFBb0I7R0FDcEIsa0JBQWtCO0NBQ3BCOztFQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgxMDAsIDEwMCwgMTA0LCAwLjY0NCk7IFxyXG4gICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgaGVpZ2h0OiA1MHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDgsIDI0OCk7XHJcbiAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5lbGVtZW50IHtcclxuICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgZm9udC1zaXplOjEyMCVcclxuICB9XHJcbiAuZm9vdGVyIHtcclxuICAgYm94LXNoYWRvdzogOHB4IDRweCA4cHggMjBweCByZ2JhKDEzLCA1LCA5MiwgMC4yKTtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICBsZWZ0OiAwO1xyXG4gICBib3R0b206IDA7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLnNwYWNlIHtcclxuICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiB9XHJcbmhye1xyXG4gYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiBib3JkZXItY29sb3I6IGdyZXk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.service */ "./src/app/services.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.title = 'XFS';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.findAll().subscribe(function (data) {
            console.log(data);
            _this.dash = data;
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width\r\n{\r\n    /* box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.2); */\r\n    max-width: 1000px;\r\n    margin: auto;\r\n    text-align: left;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size:120%\r\n}\r\n.mat-raised-button\r\n{\r\n    box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.2);\r\n    max-width: 1000px;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size:120%\r\n}\r\n.space {\r\n    padding-top: 150px;\r\n    padding-right: 30px;\r\n    padding-bottom: 15px;\r\n    padding-left: 40px;\r\n  }\r\n.example-card\r\n  {\r\n    box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.2);\r\n    max-width: 1000px;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size:120%\r\n  }\r\n.card {\r\n    box-shadow: 0 6px 10px 0 rgba(100, 100, 104, 0.644); \r\n   font-family: arial;\r\n   font-size: 100%;\r\n   height: 50px;\r\n   background-color: rgb(252, 248, 248);\r\n   padding-top: 8px;\r\n   font-size: 100%;\r\n   padding-right: 0px;\r\n   padding-bottom: 0px;\r\n   padding-left: 20px;\r\n  }\r\n.footer {\r\n    box-shadow: 8px 4px 8px 20px rgba(13, 5, 92, 0.2);\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgb(0, 0, 0);\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrREFBa0Q7SUFDbEQsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDO0FBQ0o7QUFDQTs7SUFFSSw0Q0FBNEM7SUFDNUMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjtBQUNGOztJQUVJLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUM7RUFDRjtBQUNBO0lBQ0UsbURBQW1EO0dBQ3BELGtCQUFrQjtHQUNsQixlQUFlO0dBQ2YsWUFBWTtHQUNaLG9DQUFvQztHQUNwQyxnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixtQkFBbUI7R0FDbkIsa0JBQWtCO0VBQ25CO0FBQ0E7SUFDRSxpREFBaUQ7SUFDakQsZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGhcclxue1xyXG4gICAgLyogYm94LXNoYWRvdzogMCA0cHggOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7ICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxMjAlXHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uXHJcbntcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxMjAlXHJcbn1cclxuLnNwYWNlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICB9XHJcbi5leGFtcGxlLWNhcmRcclxuICB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTIwJVxyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgxMDAsIDEwMCwgMTA0LCAwLjY0NCk7IFxyXG4gICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgaGVpZ2h0OiA1MHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDgsIDI0OCk7XHJcbiAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXIge1xyXG4gICAgYm94LXNoYWRvdzogOHB4IDRweCA4cHggMjBweCByZ2JhKDEzLCA1LCA5MiwgMC4yKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (this.username == 'admin' && this.password == 'admin') {
            this.router.navigate(["home"]);
        }
        else {
            alert("Invalid credentials");
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/services.service.ts":
/*!*************************************!*\
  !*** ./src/app/services.service.ts ***!
  \*************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
        this.usersUrl = 'http://18.188.202.13:8080/ManisaSpringSample/users';
    }
    ServicesService.prototype.findAll = function () {
        return this.http.get(this.usersUrl);
    };
    ServicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ServicesService);
    return ServicesService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\XFS\xfs_dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map