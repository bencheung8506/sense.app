webpackJsonp([1],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_edit__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileEditPageModule = (function () {
    function ProfileEditPageModule() {
    }
    ProfileEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_edit__["a" /* ProfileEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_edit__["a" /* ProfileEditPage */]),
            ],
        })
    ], ProfileEditPageModule);
    return ProfileEditPageModule;
}());

//# sourceMappingURL=profile-edit.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the ProfileEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileEditPage = (function () {
    function ProfileEditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfileEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileEditPage');
    };
    ProfileEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-edit',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\profile-edit\profile-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>EDIT PROFILE</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n\n    <ion-row align-items-center>\n        <ion-col col-1>\n            <ion-label class="label-pad"> Age </ion-label>\n        </ion-col>\n        <ion-col col-11>\n            <ion-item>\n                <ion-input [(ngModel)]="profile.age" type="text" \n                placeholder="(profileData | async)?.age"></ion-input>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-label class="label-pad"> SEN type: </ion-label>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-6>\n            <ion-item no-lines> <ion-label> ADHD </ion-label>\n            <ion-checkbox> </ion-checkbox> </ion-item>\n        </ion-col>\n        <ion-col col-6>\n            <ion-item no-lines> <ion-label> PH </ion-label>\n            <ion-checkbox> </ion-checkbox> </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <button ion-button block (click)="editProfile()"> Edit Profile </button>\n\n    </ion-grid>    \n</ion-content>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\profile-edit\profile-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfileEditPage);
    return ProfileEditPage;
}());

//# sourceMappingURL=profile-edit.js.map

/***/ })

});
//# sourceMappingURL=1.js.map