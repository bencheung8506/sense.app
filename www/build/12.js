webpackJsonp([12],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventModalPageModule = (function () {
    function EventModalPageModule() {
    }
    EventModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]),
            ],
        })
    ], EventModalPageModule);
    return EventModalPageModule;
}());

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventModalPage = (function () {
    function EventModalPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.event = { title: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false };
        this.minDate = new Date().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
        var maxDateRaw = new Date(new Date().getUTCFullYear() + 1, 11, 31, 23, 59, 59, 999);
        this.maxDate = maxDateRaw.toISOString();
    }
    EventModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.save = function () {
        this.event.title = this.event.title.trim();
        if (!this.event.allDay &&
            (this.event.startTime > this.event.endTime)) {
            this.alertCtrl.create({
                title: 'Error',
                subTitle: 'The input time range is invalid.',
                buttons: ['Confirm']
            }).present();
        }
        else if (this.event.title == '') {
            this.alertCtrl.create({
                title: 'Error',
                subTitle: 'The title is blank.',
                buttons: ['Confirm']
            }).present();
        }
        else if (this.event.allDay) {
            var sDate = new Date(this.event.startTime);
            this.event.startTime = new Date(sDate.getUTCFullYear(), sDate.getUTCMonth(), sDate.getUTCDate(), 12, 0, 0, 0).toISOString();
            var eDate = new Date(this.event.endTime);
            this.event.endTime = new Date(eDate.getUTCFullYear(), eDate.getUTCMonth(), eDate.getUTCDate(), 12, 0, 0, 0).toISOString();
            this.viewCtrl.dismiss(this.event);
        }
        else {
            this.viewCtrl.dismiss(this.event);
        }
    };
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-event-modal',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\event-modal\event-modal.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-buttons start>\n			<button ion-button icon-only (click)="cancel()">\n				<ion-icon name="close"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title>Event Details</ion-title>\n	</ion-navbar>\n</ion-header>\n \n<ion-content>\n	<ion-list>\n		<ion-item>\n			<ion-input type="text" placeholder="Event Name" [(ngModel)]="event.title"></ion-input>\n		</ion-item>\n \n		<ion-item>\n			<ion-label style=\'padding-left: 7.5px\'>Start</ion-label>\n			<ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="YY MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate" [max]="maxDate" *ngIf=\'!event.allDay\'></ion-datetime>\n            <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="YY MMM D" [(ngModel)]="event.startTime" [min]="minDate" [max]="maxDate" *ngIf=\'event.allDay\'></ion-datetime>\n		</ion-item>\n \n		<ion-item>\n			<ion-label style=\'padding-left: 7.5px\'>End</ion-label>\n			<ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="YY MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate" [max]="maxDate" *ngIf=\'!event.allDay\'></ion-datetime>\n            <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="YY MMM D" [(ngModel)]="event.endTime" [min]="minDate" [max]="maxDate" *ngIf=\'event.allDay\'></ion-datetime>\n		</ion-item>\n \n		<ion-item>\n			<ion-label>All Day?</ion-label>\n			<ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n		</ion-item>\n	</ion-list>\n \n	<button ion-button full icon-left (click)="save()">\n		<ion-icon name="checkmark"></ion-icon> Add Event\n	</button>\n</ion-content>'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\event-modal\event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object])
    ], EventModalPage);
    return EventModalPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=event-modal.js.map

/***/ })

});
//# sourceMappingURL=12.js.map