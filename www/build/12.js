webpackJsonp([12],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverProfilePageModule", function() { return PopoverProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_profile__ = __webpack_require__(612);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverProfilePageModule = (function () {
    function PopoverProfilePageModule() {
    }
    PopoverProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover_profile__["a" /* PopoverProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover_profile__["a" /* PopoverProfilePage */]),
            ],
        })
    ], PopoverProfilePageModule);
    return PopoverProfilePageModule;
}());

//# sourceMappingURL=popover-profile.module.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverProfilePage = (function () {
    function PopoverProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverProfilePage');
    };
    PopoverProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover-profile',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\popover-profile\popover-profile.html"*/'<ion-grid class="label-pad">\n    <h5 class="label-pad"> Profile of {{ name }} </h5>\n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> Age </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p *ngIf = "age"> {{ age }} </p>\n            <p *ngIf = "!age">  Not stated  </p>\n        </ion-col>\n    </ion-row> \n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> Is SEN </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p *ngIf = "isSEN == true"> Yes </p>\n            <p *ngIf = "isSEN == false">  No  </p>\n            <p *ngIf = "isSEN == null">  Not stated  </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> SEN type </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p> {{ SENlist }} </p>\n        </ion-col>\n    </ion-row>\n\n    <button ion-button clear (click)=\'close()\'> Dismiss </button>\n</ion-grid>'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\popover-profile\popover-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PopoverProfilePage);
    return PopoverProfilePage;
}());

//# sourceMappingURL=popover-profile.js.map

/***/ })

});
//# sourceMappingURL=12.js.map