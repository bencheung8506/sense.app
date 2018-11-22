webpackJsonp([9],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_page__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = (function () {
    function SignupPage(fb, navCtrl, auth, alertCtrl, afAuth, toast, afDatabase) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.toast = toast;
        this.afDatabase = afDatabase;
        this.defaultProfile = {
            valid: false,
            academicGoal: '',
            workGoal: '',
            socialGoal: '',
            lifestyleGoal: '',
        };
        this.form = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[a-zA-Z0-9]*')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)])]
        });
        this.auth = auth;
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.username.concat("@sense.com"),
            password: data.password
        };
        var userProfile = {
            id: '-1',
            name: data.username,
        };
        this.auth.signUp(credentials).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home_page__["a" /* HomePage */]);
            _this.afAuth.authState.take(1).subscribe(function (data) {
                if (data) {
                    userProfile.id = data.uid;
                    _this.afDatabase.object("profile/" + data.uid).set(_this.defaultProfile);
                    _this.afDatabase.object("userList/" + data.uid).set(userProfile);
                    _this.toast.create({
                        message: "Welcome, " + data.email.split('@sense.com')[0] + ".",
                        duration: 2000
                    }).present();
                }
            });
        }, function (error) { return _this.signupError = error.message; });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'as-page-signup',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\signup\signup.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Sign up</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n	<form (ngSubmit)="signup()" [formGroup]="form">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: usernameErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="text" placeholder="User Name" formControlName="username" required></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="username" #usernameErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters.</div>\n\n				<div [ngxError]="[\'pattern\']" [when]="[\'touched\']">Please use only alphabets and numbers.</div>\n\n			</div>\n\n\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters.</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{signupError}}</div>\n\n\n\n			<button ion-button full type="submit" [disabled]="!form.valid">Sign up</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_edit_profile_edit__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_page__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfilePage = (function () {
    function ProfilePage(afAuth, navCtrl, navParams, auth, afDatabase) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.afDatabase = afDatabase;
        this.profile = {};
        this.currentUser = {};
        this.SENlist = '';
    }
    ProfilePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            _this.profileDataNg = _this.afDatabase.object("profile/" + data.uid);
            _this.profileDataNg.snapshotChanges().subscribe(function (action) {
                _this.currentUser = action.payload.val();
                var SENarr = [_this.currentUser.ADHD, _this.currentUser.PH,
                    _this.currentUser.SL, _this.currentUser.AU,
                    _this.currentUser.VI, _this.currentUser.SI,
                    _this.currentUser.HI, _this.currentUser.MI];
                var SENname = ["ADHD", "PH", "SL", "AU",
                    "VI", "SI", "HI", "MI"];
                var SENnullState = 1;
                if (_this.currentUser.isSEN == false)
                    _this.SENlist = "Not applicable";
                else {
                    for (var k in SENarr) {
                        if (SENarr[k] != null) {
                            SENnullState = 0;
                        }
                        if (SENarr[k] == true) {
                            if (_this.SENlist != '')
                                _this.SENlist += ', ';
                            _this.SENlist += SENname[k];
                        }
                    }
                    if (_this.SENlist == '') {
                        if (SENnullState == 1) {
                            _this.SENlist = 'Not stated';
                        }
                        else {
                            _this.SENlist = 'None';
                        }
                    }
                }
            });
        });
    };
    ProfilePage.prototype.toProfileEditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_edit_profile_edit__["a" /* ProfileEditPage */], {});
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("profile/" + auth.uid).update(_this.profile)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home_page__["a" /* HomePage */]); }, function (error) { return _this.profileError = error.message; });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\profile\profile.html"*/'<ion-content padding>\n    <ion-card>\n    <ion-card-header> Basic information </ion-card-header>\n    <ion-card-content> \n        <ion-row align-items-center>\n            <ion-col col-5>\n                <ion-label class="label-pad"> User name </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p> {{ auth.email.split(\'@sense.com\')[0] }} </p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-center>\n            <ion-col col-5>\n                <ion-label class="label-pad"> Age </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p *ngIf = "currentUser.age"> {{ currentUser.age }} </p>\n                <p *ngIf = "!currentUser.age">  Not stated  </p>\n            </ion-col>\n        </ion-row> \n\n        <ion-row align-items-center>\n            <ion-col col-5>\n                <ion-label class="label-pad"> Profile Visibility </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p *ngIf = "currentUser.publicProfile == true"> Public </p>\n                <p *ngIf = "currentUser.publicProfile != true">  Private  </p>\n            </ion-col>\n        </ion-row> \n    </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n    <ion-card-header> SEN information </ion-card-header>\n    <ion-card-content>\n        <ion-row align-items-center>\n            <ion-col col-5>\n                <ion-label class="label-pad"> Is SEN </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p *ngIf = "currentUser.isSEN == true"> Yes </p>\n                <p *ngIf = "currentUser.isSEN == false">  No  </p>\n                <p *ngIf = "currentUser.isSEN == null">  Not stated  </p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-center>\n            <ion-col col-5>\n                <ion-label class="label-pad"> SEN type </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p> {{ SENlist }} </p>\n            </ion-col>\n        </ion-row>\n    </ion-card-content>\n    </ion-card>\n\n    <button ion-button block (click)="toProfileEditPage()"> Edit Profile </button>\n \n</ion-content>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = (function () {
    function Config() {
        this.wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Config);
    return Config;
}());

var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyDqunC_avNOdhIRF2EZ1uL7Qwwi0BSB9xg",
        authDomain: "newproj4-ebeac.firebaseapp.com",
        databaseURL: "https://newproj4-ebeac.firebaseio.com",
        projectId: "newproj4-ebeac",
        storageBucket: "newproj4-ebeac.appspot.com",
        messagingSenderId: "86191986132"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarPage = (function () {
    function CalendarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\calendar\calendar.html"*/'<ion-content padding>\n    <p> Calendar </p>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_profile_popover_profile__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popover_goal_popover_goal__ = __webpack_require__(614);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var ChatBoxPage = (function () {
    function ChatBoxPage(navCtrl, navParams, auth, fb, afDatabase, alertCtrl, afAuth, popoverController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.popoverController = popoverController;
        this.chatOut = [];
        this.chatIn = [];
        this.allChat = [];
        this.chatter = {};
        this.toBlur = false;
        this.nameTo = navParams.get('nameTo');
        this.idTo = navParams.get('idTo');
        this.auth = auth;
        this.chatForm = fb.group({
            message: ['',]
        });
        if (this.auth.uid < this.idTo) {
            this.idFirst = this.auth.uid;
            this.idLast = this.idTo;
        }
        else {
            this.idFirst = this.idTo;
            this.idLast = this.auth.uid;
        }
        this.roomKey = '/chat/' + this.idFirst + '&and&' + this.idLast;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref(this.roomKey).orderByChild('timestamp')
            .on('value', function (itemSnapshot) {
            _this.allChat = [];
            itemSnapshot.forEach(function (itemSnap) {
                _this.allChat.push(itemSnap.val());
                return false;
            });
        });
        var profileKey = '/profile/' + this.idTo;
        this.chatterNg = this.afDatabase.object(profileKey);
        this.chatterNg.snapshotChanges().subscribe(function (action) {
            _this.chatter = action.payload.val();
        });
    }
    ChatBoxPage.prototype.ionViewDidEnter = function () {
        this.content.scrollToBottom();
    };
    ChatBoxPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref(this.roomKey).orderByChild('timestamp')
            .on('value', function (itemSnapshot) {
            _this.allChat = [];
            itemSnapshot.forEach(function (itemSnap) {
                _this.allChat.push(itemSnap.val());
                return false;
            });
        });
        this.content.scrollToBottom();
    };
    ChatBoxPage.prototype.ngOnChanges = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref(this.roomKey).orderByChild('timestamp')
            .on('value', function (itemSnapshot) {
            _this.allChat = [];
            itemSnapshot.forEach(function (itemSnap) {
                _this.allChat.push(itemSnap.val());
                return false;
            });
        });
        this.content.scrollToBottom();
    };
    ChatBoxPage.prototype.sendMessage = function () {
        var _this = this;
        var data = this.chatForm.value;
        data.timestamp = new Date().toISOString();
        data.sender = this.auth.name;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.list(_this.roomKey).push(data);
        });
        this.msgInput.value = '';
        setTimeout(function () {
            _this.content.scrollToBottom(100);
        }, 150);
    };
    ChatBoxPage.prototype.showGoal = function () {
        // let alert = this.alertCtrl.create({
        //     title: 'Goal',
        //     subTitle: this.chatter.publicGoal ? 'Public' : 'Private',
        //     buttons: ['Dismiss']
        //     });
        // alert.present();
        var popover = this.popoverController.create(__WEBPACK_IMPORTED_MODULE_8__popover_goal_popover_goal__["a" /* PopoverGoalPage */], {
            name: this.nameTo,
            academicGoal: this.chatter.academicGoal,
            workGoal: this.chatter.workGoal,
            socialGoal: this.chatter.socialGoal,
            lifestyleGoal: this.chatter.lifestyleGoal,
        }, { showBackdrop: true, cssClass: "custom-popover" });
        popover.present();
    };
    ChatBoxPage.prototype.showProfile = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var SENarr, SENname, SENnullState, SENlist, k, popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SENarr = [this.chatter.ADHD, this.chatter.PH,
                            this.chatter.SL, this.chatter.AU,
                            this.chatter.VI, this.chatter.SI,
                            this.chatter.HI, this.chatter.MI];
                        SENname = ["ADHD", "PH", "SL", "AU",
                            "VI", "SI", "HI", "MI"];
                        SENnullState = 1;
                        SENlist = '';
                        if (this.chatter.isSEN == false)
                            SENlist = "Not applicable";
                        else {
                            for (k in SENarr) {
                                if (SENarr[k] != null) {
                                    SENnullState = 0;
                                }
                                if (SENarr[k] == true) {
                                    if (SENlist != '')
                                        SENlist += ', ';
                                    SENlist += SENname[k];
                                }
                            }
                            if (SENlist == '') {
                                if (SENnullState == 1) {
                                    SENlist = 'Not stated';
                                }
                                else {
                                    SENlist = 'None';
                                }
                            }
                        }
                        return [4 /*yield*/, this.popoverController.create(__WEBPACK_IMPORTED_MODULE_7__popover_profile_popover_profile__["a" /* PopoverProfilePage */], {
                                name: this.nameTo,
                                age: this.chatter.age,
                                isSEN: this.chatter.isSEN,
                                SENlist: SENlist,
                            }, { showBackdrop: true, cssClass: "custom-popover" })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgInput'),
        __metadata("design:type", Object)
    ], ChatBoxPage.prototype, "msgInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]) === "function" && _a || Object)
    ], ChatBoxPage.prototype, "content", void 0);
    ChatBoxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-box',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\chat-box\chat-box.html"*/'<ion-content padding (change)="content.scrollToBottom()" [ngClass]=\'{"blur": toBlur}\'>\n    <div ion-fixed>\n        <ion-row class=\'chatter\' align-items-center>\n            <ion-col col-8 class=\'chat-name\'> {{nameTo}} </ion-col>\n            <ion-col col-4 style=\'text-align: right;\'> \n                <button ion-button icon-only clear (click)=\'showProfile($event)\' [disabled] = \'chatter.publicProfile != true\'>\n                    <ion-icon name="contact" style=\'font-size: 16px;\'></ion-icon>\n                </button>\n                <button ion-button icon-only clear (click)=\'showGoal()\'[disabled] = \'chatter.publicGoal != true\'>\n                    <ion-icon name="checkmark-circle-outline" style=\'font-size: 16px;\'></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <ion-grid>\n        <ion-row *ngFor="let msg of allChat" align-items-center> \n            <ion-col offset-4 col-8 *ngIf=\'msg.sender==auth.name\' class=\'message right\'>\n                <p> {{msg.message}} </p>\n                <p style=\'font-size:2px\' align=\'right\'> {{msg.timestamp | date:\'dd/MM/yyyy &nbsp; HH:mm\'}}</p>\n            </ion-col>\n            <ion-col col-8 *ngIf=\'msg.sender!=auth.name\' class=\'message left\'>\n                <p> {{msg.message}} </p>\n                <p style=\'font-size:2px\' align=\'right\'> {{msg.timestamp | date:\'dd/MM/yyyy &nbsp; HH:mm\'}}</p>\n           </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<form [formGroup]="chatForm">\n    <ion-footer [ngClass]=\'{"blur": toBlur}\'>\n    	<ion-grid>\n    		<ion-row align-items-center>\n    			<ion-col col-10>\n    				<ion-input type="text" placeholder="Type a message" name="message" formControlName=\'message\' #msgInput></ion-input>\n    			</ion-col>\n    			<ion-col col-2>\n                    <button ion-button icon-only clear (click)="sendMessage()" [disabled]=\'!msgInput.value\'>\n        				<ion-icon name="paper-plane" style=\'font-size: 24px;\'></ion-icon>\n                    </button>\n    			</ion-col>\n    		</ion-row>\n    	</ion-grid>\n    </ion-footer>\n</form>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\chat-box\chat-box.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]) === "function" && _j || Object])
    ], ChatBoxPage);
    return ChatBoxPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=chat-box.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_box_chat_box__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, afAuth, auth, afDatabase, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.rooms = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/userList/');
        this.auth = auth;
        this.ref.orderByChild('name')
            .on('value', function (itemSnapshot) {
            _this.users = [];
            itemSnapshot.forEach(function (itemSnap) {
                if (itemSnap.val().id != _this.auth.uid)
                    _this.users.push(itemSnap.val());
                return false;
            });
        });
    }
    ChatPage.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.users == null) {
            this.ref.on('value', function (itemSnapshot) {
                _this.users = [];
                itemSnapshot.forEach(function (itemSnap) {
                    if (itemSnap.val().id != _this.auth.uid)
                        _this.users.push(itemSnap.val());
                    return false;
                });
            });
        }
    };
    ChatPage.prototype.usersReload = function () {
        var _this = this;
        this.ref.on('value', function (itemSnapshot) {
            _this.users = [];
            itemSnapshot.forEach(function (itemSnap) {
                if (itemSnap.val().id != _this.auth.uid)
                    _this.users.push(itemSnap.val());
                return false;
            });
            _this.toast.create({
                message: "List of users reloaded.",
                duration: 2000
            }).present();
        });
    };
    ChatPage.prototype.toChat = function (chatter) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_box_chat_box__["a" /* ChatBoxPage */], {
            idTo: chatter.id,
            nameTo: chatter.name,
        });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\chat\chat.html"*/'<ion-content padding>\n    <ion-row align-items-center>\n        <ion-col col-10>\n            <p> Please select the user you would like to chat with. </p>\n        </ion-col>\n        <ion-col col-2>\n            <button ion-button icon-only clear (click)=\'usersReload()\'>\n                <ion-icon ion-icon name=\'sync\'>\n                </ion-icon> \n            </button>\n        </ion-col>\n    </ion-row>\n    \n    <ion-list>\n        <ion-item *ngFor="let user of users" (click)="toChat(user)" align-items-center>\n            <button ion-button clear full class="btn-align"> \n                <ion-icon name=\'contact\' style=\'font-size: 24px;\'></ion-icon> \n                &nbsp; <p> {{user.name}} </p>\n            </button>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ChatPage);
    return ChatPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_page__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProfileEditPage = (function () {
    function ProfileEditPage(afAuth, navCtrl, navParams, auth, fb, cd, toast, app, afDatabase) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.cd = cd;
        this.toast = toast;
        this.app = app;
        this.afDatabase = afDatabase;
        this.profile = {};
        this.currentUser = {};
        this.profileEditForm = fb.group({
            age: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required])],
            isSEN: [,],
            ADHD: [,],
            PH: [,],
            SL: [,],
            AU: [,],
            VI: [,],
            SI: [,],
            HI: [,],
            MI: [,],
            publicProfile: [,],
        });
    }
    ProfileEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            _this.cd.detectChanges();
            _this.profileDataNg = _this.afDatabase.object("profile/" + data.uid);
            _this.profileData = _this.profileDataNg.valueChanges();
            _this.profileDataNg.snapshotChanges().subscribe(function (action) {
                _this.currentUser = action.payload.val();
                _this.profileEditForm.controls['isSEN'].setValue(_this.currentUser.isSEN);
                var isPublic = (_this.currentUser.publicProfile == true);
                _this.profileEditForm.controls['publicProfile'].setValue(isPublic);
            });
        });
    };
    ProfileEditPage.prototype.editProfile = function () {
        var _this = this;
        var data = this.profileEditForm.value;
        data.ADHD = (data.ADHD == true);
        data.PH = (data.PH == true);
        data.SL = (data.SL == true);
        data.AU = (data.AU == true);
        data.VI = (data.VI == true);
        data.SI = (data.SI == true);
        data.HI = (data.HI == true);
        data.MI = (data.MI == true);
        var SENbool = data.ADHD || data.PH || data.SL || data.AU
            || data.VI || data.SI || data.HI || data.MI;
        if (!SENbool && data.isSEN) {
            this.profileEditError =
                'You have selected "Yes" for "Is SEN", but you have not selected any SEN type.';
            this.content.scrollToTop();
            return;
        }
        data.valid = true;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("profile/" + auth.uid).update(data)
                .then(function () {
                _this.profileEditError = '';
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home_page__["a" /* HomePage */]);
                _this.toast.create({
                    message: "Profile edit is successful.",
                    duration: 2000
                }).present();
            }, function (error) { return _this.profileError = error.message; });
        });
        console.log(this.currentUser);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ProfileEditPage.prototype, "content", void 0);
    ProfileEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-edit',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\profile-edit\profile-edit.html"*/'<ion-content padding>\n    <form [formGroup]="profileEditForm">\n\n    <ion-card class="error-card" [hidden]="!profileEditError">\n    <ion-card-header> Error </ion-card-header>\n    <ion-card-content> \n        <p class="label-pad"> {{ profileEditError }} </p>\n    </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n    <ion-card-header> Basic information </ion-card-header>\n    <ion-card-content> \n        <ion-row align-items-center>\n            <ion-label class="label-pad label-header" > Age </ion-label>\n        </ion-row>\n        <ion-row align-items-center radio-group formControlName="isSEN" required>\n            <ion-item no-padding>\n                <ion-input name="age" type="number" [value]="currentUser?.age" \n                [placeholder]="currentUser?.age ? currentUser.age : \'Not stated\' " formControlName="age" pattern="[0-9]*" [min]="5" [max]="30"></ion-input>\n            </ion-item>\n        </ion-row> \n\n        <ion-row align-items-center>\n            <ion-label class="label-pad label-header" > Profile Visibility </ion-label>\n        </ion-row>\n        <ion-row align-items-center radio-group formControlName="publicProfile" required>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> Public </ion-label>\n                    <ion-radio [value]="true"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> Private </ion-label>\n                    <ion-radio [value]="false"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row> \n    </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n    <ion-card-header> SEN information </ion-card-header>\n    <ion-card-content> \n        <ion-row align-items-center>\n            <ion-label class="label-pad label-header" > Is SEN </ion-label>\n        </ion-row>\n        <ion-row align-items-center radio-group formControlName="isSEN" required>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> Yes </ion-label>\n                    <ion-radio [value]="true"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> No </ion-label>\n                    <ion-radio [value]="false"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row> \n\n        <ion-row align-items-center>\n            <ion-label class="label-pad label-header"> SEN type </ion-label>\n        </ion-row>\n        <ion-row align-items-center>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> ADHD </ion-label>\n                    <ion-checkbox \n                    [checked]="currentUser?.ADHD && profileEditForm.value.isSEN" formControlName="ADHD"\n                    [disabled]="!profileEditForm.value.isSEN"> \n                    </ion-checkbox>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> PH </ion-label>\n                    <ion-checkbox \n                    [checked]="currentUser?.PH && profileEditForm.value.isSEN" formControlName="PH"\n                    [disabled]="!profileEditForm.value.isSEN"> \n                    </ion-checkbox>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row align-items-center>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> SL </ion-label>\n                    <ion-checkbox \n                    [checked]="currentUser?.SL && profileEditForm.value.isSEN" formControlName="SL"\n                    [disabled]="!profileEditForm.value.isSEN"> \n                    </ion-checkbox>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> AU </ion-label>\n                    <ion-checkbox \n                    [checked]="currentUser?.AU && profileEditForm.value.isSEN" formControlName="AU"\n                    [disabled]="!profileEditForm.value.isSEN"> \n                    </ion-checkbox>\n                </ion-item>\n            </ion-col>\n        </ion-row> \n        <ion-row align-items-center>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> VI </ion-label>\n                    <ion-checkbox \n                    [checked]="currentUser?.VI && profileEditForm.value.isSEN" formControlName="VI"\n                    [disabled]="!profileEditForm.value.isSEN"> \n                    </ion-checkbox>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> SI </ion-label>\n                    <ion-checkbox \n                    [checked]="currentUser?.SI && profileEditForm.value.isSEN" formControlName="SI"\n                    [disabled]="!profileEditForm.value.isSEN"> \n                    </ion-checkbox>\n                </ion-item>\n            </ion-col>\n        </ion-row>  \n        <ion-row align-items-center>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> HI </ion-label>\n                    <ion-checkbox \n                    [checked]="currentUser?.HI && profileEditForm.value.isSEN" formControlName="HI"\n                    [disabled]="!profileEditForm.value.isSEN"> \n                    </ion-checkbox>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> MI </ion-label>\n                    <ion-checkbox \n                    [checked]="currentUser?.MI && profileEditForm.value.isSEN" formControlName="MI"\n                    [disabled]="!profileEditForm.value.isSEN"> \n                    </ion-checkbox>\n                </ion-item>\n            </ion-col>\n        </ion-row> \n    </ion-card-content>\n    </ion-card>\n\n    </form>\n\n    <button ion-button block [disabled]="!profileEditForm.valid" (click)="editProfile()"> Submit </button>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\profile-edit\profile-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfileEditPage);
    return ProfileEditPage;
}());

//# sourceMappingURL=profile-edit.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__to_do_list_to_do_list__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PairUpPage = (function () {
    function PairUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabCalendar = __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__["a" /* CalendarPage */];
        this.tabChat = __WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */];
        this.tabToDoList = __WEBPACK_IMPORTED_MODULE_4__to_do_list_to_do_list__["a" /* ToDoListPage */];
    }
    PairUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pair-up',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\pair-up\pair-up.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> PAIR UP</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-tabs id="tabs" selectedIndex=\'0\'>\n        <ion-tab [root]="tabChat" tabTitle="Chat" tabIcon="chatboxes"></ion-tab>\n        <ion-tab [root]="tabCalendar" tabTitle="Calendar" tabIcon="calendar"></ion-tab>\n    </ion-tabs>\n</ion-content>'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\pair-up\pair-up.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object])
    ], PairUpPage);
    return PairUpPage;
    var _a, _b;
}());

//# sourceMappingURL=pair-up.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToDoListPage = (function () {
    function ToDoListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ToDoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-to-do-list',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\to-do-list\to-do-list.html"*/'<ion-content padding>\n    <p> To-do list </p>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\to-do-list\to-do-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ToDoListPage);
    return ToDoListPage;
}());

//# sourceMappingURL=to-do-list.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairUpNoLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the PairUpNoLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PairUpNoLoginPage = (function () {
    function PairUpNoLoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PairUpNoLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PairUpNoLoginPage');
    };
    PairUpNoLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pair-up-no-login',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\pair-up-no-login\pair-up-no-login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pair Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h6> Please log-in to access the pair-up function. </h6>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\pair-up-no-login\pair-up-no-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PairUpNoLoginPage);
    return PairUpNoLoginPage;
}());

//# sourceMappingURL=pair-up-no-login.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "email", {
        get: function () {
            return this.user && this.user.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "uid", {
        get: function () {
            return this.user && this.user.uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            if (this.user) {
                var email = this.user.email;
                return email.split("@sense.com")[0];
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token, user);
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		602,
		8
	],
	"../pages/chat-box/chat-box.module": [
		603,
		7
	],
	"../pages/chat/chat.module": [
		604,
		6
	],
	"../pages/goal-edit/goal-edit.module": [
		256
	],
	"../pages/goal/goal.module": [
		260
	],
	"../pages/login/login.module": [
		605,
		5
	],
	"../pages/note/note.module": [
		606,
		0
	],
	"../pages/pair-up-no-login/pair-up-no-login.module": [
		607,
		4
	],
	"../pages/pair-up/pair-up.module": [
		608,
		3
	],
	"../pages/profile-edit/profile-edit.module": [
		609,
		2
	],
	"../pages/profile/profile.module": [
		261
	],
	"../pages/setting-tab/setting-tab.module": [
		262
	],
	"../pages/to-do-list/to-do-list.module": [
		610,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverProfilePage = (function () {
    function PopoverProfilePage(navParams, popoverController, viewCtrl) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.viewCtrl = viewCtrl;
        this.name = null;
        this.age = null;
        this.isSEN = null;
        this.SENlist = null;
    }
    PopoverProfilePage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('name');
        this.age = this.navParams.get('age');
        this.isSEN = this.navParams.get('isSEN');
        this.SENlist = this.navParams.get('SENlist');
    };
    PopoverProfilePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-popover-profile',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\popover-profile\popover-profile.html"*/'<ion-grid style=\'padding-left: 20px\'>\n    <h5 class="label-pad"> Profile of {{ name }} </h5>\n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> Age </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p *ngIf = "age"> {{ age }} </p>\n            <p *ngIf = "!age">  Not stated  </p>\n        </ion-col>\n    </ion-row> \n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> Is SEN </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p *ngIf = "isSEN == true"> Yes </p>\n            <p *ngIf = "isSEN == false">  No  </p>\n            <p *ngIf = "isSEN == null">  Not stated  </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> SEN type </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p> {{ SENlist }} </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n        <ion-col offset-6 col-2>\n            <button ion-button clear (click)=\'close()\'> Dismiss </button>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\popover-profile\popover-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ViewController */]])
    ], PopoverProfilePage);
    return PopoverProfilePage;
}());

//# sourceMappingURL=popover-profile.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalEditPageModule", function() { return GoalEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goal_edit__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoalEditPageModule = (function () {
    function GoalEditPageModule() {
    }
    GoalEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__goal_edit__["a" /* GoalEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__goal_edit__["a" /* GoalEditPage */]),
            ],
        })
    ], GoalEditPageModule);
    return GoalEditPageModule;
}());

//# sourceMappingURL=goal-edit.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_page__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var GoalEditPage = (function () {
    function GoalEditPage(afAuth, navCtrl, navParams, auth, fb, app, cd, toast, afDatabase) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.app = app;
        this.cd = cd;
        this.toast = toast;
        this.afDatabase = afDatabase;
        this.profile = {};
        this.currentUser = {};
        this.goalEditForm = fb.group({
            academicGoal: ['',],
            workGoal: ['',],
            socialGoal: ['',],
            lifestyleGoal: ['',],
            publicGoal: [,],
        });
    }
    GoalEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            _this.cd.detectChanges();
            _this.profileDataNg = _this.afDatabase.object("profile/" + data.uid);
            _this.profileData = _this.profileDataNg.valueChanges();
            _this.profileDataNg.snapshotChanges().subscribe(function (action) {
                _this.currentUser = action.payload.val();
                var isPublic = (_this.currentUser.publicGoal == true);
                _this.goalEditForm.controls['publicGoal'].setValue(isPublic);
            });
        });
    };
    GoalEditPage.prototype.editProfile = function () {
        var _this = this;
        var data = this.goalEditForm.value;
        if (data.academicGoal == null)
            data.academicGoal = '';
        if (data.workGoal == null)
            data.workGoal = '';
        if (data.socialGoal == null)
            data.socialGoal = '';
        if (data.lifeStlyeGoal == null)
            data.lifeStlyeGoal = '';
        data.academicGoal = data.academicGoal.trimEnd();
        data.workGoal = data.workGoal.trimEnd();
        data.socialGoal = data.socialGoal.trimEnd();
        data.lifeStlyeGoal = data.lifeStlyeGoal.trimEnd();
        // data.valid = true;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("profile/" + auth.uid).update(data)
                .then(function () {
                _this.profileEditError = '';
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home_page__["a" /* HomePage */]);
                _this.toast.create({
                    message: "Goal edit is successful.",
                    duration: 2000
                }).present();
            }, function (error) { return _this.profileError = error.message; });
        });
        console.log(this.currentUser);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], GoalEditPage.prototype, "content", void 0);
    GoalEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-goal-edit',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\goal-edit\goal-edit.html"*/'<ion-content padding>\n    <form [formGroup]="goalEditForm">\n\n    <ion-card class="error-card" [hidden]="!profileEditError">\n    <ion-card-header> Error </ion-card-header>\n    <ion-card-content> \n        <p class="label-pad"> {{ profileEditError }} </p>\n    </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n    <ion-card-header> Short term goals </ion-card-header>\n    <ion-card-content> \n        <ion-row align-items-center>\n            <ion-label class="label-pad label-header" > Goal Visibility </ion-label>\n        </ion-row>\n        <ion-row align-items-center radio-group formControlName="publicGoal" required>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> Public </ion-label>\n                    <ion-radio [value]="true"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item no-padding>\n                    <ion-label class="label-pad"> Private </ion-label>\n                    <ion-radio [value]="false"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row> \n\n        <ion-row align-items-center>\n            <ion-checkbox [checked]=\'currentUser?.academicGoal !="" \' #aGoalBox> \n            </ion-checkbox>\n            <ion-label class="label-pad"> Academic (e.g. exam, test etc.) </ion-label>\n        </ion-row>\n        <ion-row align-items-center>\n            <ion-item no-padding>\n            <ion-input formControlName="academicGoal" [disabled]="!aGoalBox.value" [value]="aGoalBox.value ? currentUser?.academicGoal : \'\' " placeholder="Not stated"> </ion-input>\n            </ion-item>\n        </ion-row> \n        <ion-row align-items-center>\n            <ion-checkbox [checked]=\'currentUser?.workGoal != ""\' #wGoalBox> \n            </ion-checkbox>\n            <ion-label class="label-pad"> Work (e.g. find a job etc.) </ion-label>\n        </ion-row>\n        <ion-row align-items-center>\n            <ion-item no-padding>\n            <ion-input formControlName="workGoal" [disabled]="!wGoalBox.value" [value]="wGoalBox.value ? currentUser?.workGoal : \'\' " placeholder="Not stated"> </ion-input>\n            </ion-item>\n        </ion-row> \n        <ion-row align-items-center>\n            <ion-checkbox [checked]=\'currentUser?.socialGoal !="" \' #sGoalBox> \n            </ion-checkbox>\n            <ion-label class="label-pad"> Social (e.g. make new friends etc.) </ion-label>\n        </ion-row>\n        <ion-row align-items-center>\n            <ion-item no-padding>\n            <ion-input formControlName="socialGoal" [disabled]="!sGoalBox.value" [value]="sGoalBox.value ? currentUser?.socialGoal : \'\' " placeholder="Not stated"> </ion-input>\n            </ion-item>\n        </ion-row> \n        <ion-row align-items-center>\n            <ion-checkbox [checked]=\'currentUser?.lifestyleGoal !="" \' #lGoalBox> \n            </ion-checkbox>\n            <ion-label class="label-pad"> Lifestyle (e.g. punctuality etc.) </ion-label>\n        </ion-row>\n        <ion-row align-items-center>\n            <ion-item no-padding>\n            <ion-input formControlName="lifestyleGoal" [disabled]="!lGoalBox.value" [value]="lGoalBox.value ? currentUser?.lifestyleGoal : \'\' " placeholder="Not stated"> </ion-input>\n            </ion-item>\n        </ion-row> \n    </ion-card-content>\n    </ion-card>\n\n    </form>\n\n    <button ion-button block [disabled]="!goalEditForm.valid" (click)="editProfile()"> Submit </button>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\goal-edit\goal-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], GoalEditPage);
    return GoalEditPage;
}());

//# sourceMappingURL=goal-edit.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goal_goal__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingTabPage = (function () {
    function SettingTabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabProfile = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.tabGoal = __WEBPACK_IMPORTED_MODULE_3__goal_goal__["a" /* GoalPage */];
    }
    SettingTabPage.prototype.ionViewDidLoad = function () {
    };
    SettingTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting-tab',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\setting-tab\setting-tab.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title> SETTING </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-tabs id="tabs">\n        <ion-tab [root]="tabProfile" tabTitle="Profile" tabIcon="contact"></ion-tab>\n        <ion-tab [root]="tabGoal" tabTitle="Goal" tabIcon="checkmark-circle-outline"></ion-tab>\n    </ion-tabs>\n</ion-content>'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\setting-tab\setting-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SettingTabPage);
    return SettingTabPage;
}());

//# sourceMappingURL=setting-tab.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__goal_edit_goal_edit__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GoalPage = (function () {
    function GoalPage(afAuth, navCtrl, navParams, auth, afDatabase) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.afDatabase = afDatabase;
        this.profile = {};
        this.currentUser = {};
        this.SENlist = '';
    }
    GoalPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            _this.profileDataNg = _this.afDatabase.object("profile/" + data.uid);
            _this.profileData = _this.profileDataNg.valueChanges();
            _this.profileDataNg.snapshotChanges().subscribe(function (action) {
                _this.currentUser = action.payload.val();
            });
        });
    };
    GoalPage.prototype.toGoalEditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__goal_edit_goal_edit__["a" /* GoalEditPage */], {});
    };
    GoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-goal',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\goal\goal.html"*/'<ion-content padding>\n    <ion-card>\n    <ion-card-header> Short term goals </ion-card-header>\n    <ion-card-content>\n        <ion-row align-items-center no-lines class="bottom-border">\n            <ion-col col-5>\n                <ion-label class="label-pad"> Goal Visibility </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p *ngIf = "currentUser.publicGoal == true"> Public </p>\n                <p *ngIf = "currentUser.publicGoal != true">  Private  </p>\n            </ion-col>\n        </ion-row> \n\n        <ion-row align-items-center>\n            <ion-col col-5>\n                <ion-label class="label-pad"> Academic </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p *ngIf = "!currentUser.academicGoal" style="color:#bbbbbb;"> Not stated </p>\n                <p *ngIf = "currentUser.academicGoal">  {{ currentUser.academicGoal }}  </p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-center>\n            <ion-col col-5>\n                <ion-label class="label-pad"> Work </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p *ngIf = "!currentUser.workGoal" style="color:#bbbbbb;"> Not stated </p>\n                <p *ngIf = "currentUser.workGoal">  {{ currentUser.workGoal }}  </p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-center>\n            <ion-col col-5>\n                <ion-label class="label-pad"> Social </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p *ngIf = "!currentUser.socialGoal" style="color:#bbbbbb;"> Not stated </p>\n                <p *ngIf = "currentUser.socialGoal">  {{ currentUser.socialGoal }}  </p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-center>\n            <ion-col col-5>\n                <ion-label class="label-pad"> Lifestyle </ion-label>\n            </ion-col>\n            <ion-col col-7>\n                <p *ngIf = "!currentUser.lifestyleGoal" style="color:#bbbbbb;"> Not stated </p>\n                <p *ngIf = "currentUser.lifestyleGoal">  {{ currentUser.lifestyleGoal }}  </p>\n            </ion-col>\n        </ion-row>\n    </ion-card-content>\n    </ion-card>\n\n    <button ion-button block (click)="toGoalEditPage()"> Edit Goal </button>\n \n</ion-content>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\goal\goal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], GoalPage);
    return GoalPage;
}());

//# sourceMappingURL=goal.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalPageModule", function() { return GoalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goal__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoalPageModule = (function () {
    function GoalPageModule() {
    }
    GoalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__goal__["a" /* GoalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__goal__["a" /* GoalPage */]),
            ],
        })
    ], GoalPageModule);
    return GoalPageModule;
}());

//# sourceMappingURL=goal.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTabPageModule", function() { return SettingTabPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_tab__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingTabPageModule = (function () {
    function SettingTabPageModule() {
    }
    SettingTabPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_tab__["a" /* SettingTabPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_tab__["a" /* SettingTabPage */]),
            ],
        })
    ], SettingTabPageModule);
    return SettingTabPageModule;
}());

//# sourceMappingURL=setting-tab.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsStackedLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsStackedLabelsPage = (function () {
    function ComponentsInputsStackedLabelsPage() {
    }
    ComponentsInputsStackedLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\stacked-labels\components.inputs.stacked-labels.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Stacked Labels</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Username</ion-label>\n\n			<ion-input type="text"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Password</ion-label>\n\n			<ion-input type="password"></ion-input>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n\n\n	<div padding>\n\n		<button ion-button color="primary" block>Sign In</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\stacked-labels\components.inputs.stacked-labels.html"*/
        })
    ], ComponentsInputsStackedLabelsPage);
    return ComponentsInputsStackedLabelsPage;
}());

//# sourceMappingURL=components.inputs.stacked-labels.page.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsPlaceholderLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsPlaceholderLabelsPage = (function () {
    function ComponentsInputsPlaceholderLabelsPage() {
    }
    ComponentsInputsPlaceholderLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\placeholder-labels\components.inputs.placeholder-labels.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Placeholder Labels</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n	<ion-list>\n\n\n\n		<ion-item>\n\n			<ion-input type="text" placeholder="Username"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-input type="password" placeholder="Password"></ion-input>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n\n\n	<div padding>\n\n		<button ion-button color="primary" block>Sign In</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\placeholder-labels\components.inputs.placeholder-labels.html"*/
        })
    ], ComponentsInputsPlaceholderLabelsPage);
    return ComponentsInputsPlaceholderLabelsPage;
}());

//# sourceMappingURL=components.inputs.placeholder-labels.page.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsInsetLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsInsetLabelsPage = (function () {
    function ComponentsInputsInsetLabelsPage() {
    }
    ComponentsInputsInsetLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\inset-labels\components.inputs.inset-labels.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Inset Labels</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list inset>\n\n\n\n		<ion-item>\n\n			<ion-label>Username</ion-label>\n\n			<ion-input type="text" value=""></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label>Password</ion-label>\n\n			<ion-input type="password" value=""></ion-input>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n\n\n	<div padding>\n\n		<button ion-button color="primary" block>Sign In</button>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\inset-labels\components.inputs.inset-labels.html"*/
        })
    ], ComponentsInputsInsetLabelsPage);
    return ComponentsInputsInsetLabelsPage;
}());

//# sourceMappingURL=components.inputs.inset-labels.page.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsInlineLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsInlineLabelsPage = (function () {
    function ComponentsInputsInlineLabelsPage() {
    }
    ComponentsInputsInlineLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\inline-labels\components.inputs.inline-labels.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Inline Labels</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n	<ion-list>\n\n\n\n		<ion-item>\n\n			<ion-label>Username</ion-label>\n\n			<ion-input type="text" value=""></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label>Password</ion-label>\n\n			<ion-input type="password" value=""></ion-input>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n\n\n	<div padding>\n\n		<button ion-button color="primary" block>Sign In</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\inline-labels\components.inputs.inline-labels.html"*/
        })
    ], ComponentsInputsInlineLabelsPage);
    return ComponentsInputsInlineLabelsPage;
}());

//# sourceMappingURL=components.inputs.inline-labels.page.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsFloatingLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsFloatingLabelsPage = (function () {
    function ComponentsInputsFloatingLabelsPage() {
    }
    ComponentsInputsFloatingLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\floating-labels\components.inputs.floating-labels.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Floating Labels</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n	<ion-list>\n\n\n\n		<ion-item>\n\n			<ion-label floating>Username</ion-label>\n\n			<ion-input type="text" value=""></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input type="password" value=""></ion-input>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n\n\n	<div padding>\n\n		<button ion-button color="primary" block>Sign In</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\floating-labels\components.inputs.floating-labels.html"*/
        })
    ], ComponentsInputsFloatingLabelsPage);
    return ComponentsInputsFloatingLabelsPage;
}());

//# sourceMappingURL=components.inputs.floating-labels.page.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsFixedLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsFixedLabelsPage = (function () {
    function ComponentsInputsFixedLabelsPage() {
    }
    ComponentsInputsFixedLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\fixed-labels\components.inputs.fixed-labels.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Fixed Labels</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n	<ion-list>\n\n\n\n		<ion-item>\n\n			<ion-label fixed>Username</ion-label>\n\n			<ion-input type="text"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label fixed>Password</ion-label>\n\n			<ion-input type="password"></ion-input>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n\n\n	<div padding>\n\n		<button ion-button color="primary" block>Sign In</button>\n\n	</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\fixed-labels\components.inputs.fixed-labels.html"*/
        })
    ], ComponentsInputsFixedLabelsPage);
    return ComponentsInputsFixedLabelsPage;
}());

//# sourceMappingURL=components.inputs.fixed-labels.page.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fixed_labels_components_inputs_fixed_labels_page__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__floating_labels_components_inputs_floating_labels_page__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inline_labels_components_inputs_inline_labels_page__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inset_labels_components_inputs_inset_labels_page__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__placeholder_labels_components_inputs_placeholder_labels_page__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stacked_labels_components_inputs_stacked_labels_page__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ComponentsInputsListPage = (function () {
    function ComponentsInputsListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ComponentsInputsListPage.prototype.fixedLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fixed_labels_components_inputs_fixed_labels_page__["a" /* ComponentsInputsFixedLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.floatingLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__floating_labels_components_inputs_floating_labels_page__["a" /* ComponentsInputsFloatingLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.inlineLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inline_labels_components_inputs_inline_labels_page__["a" /* ComponentsInputsInlineLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.insetLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inset_labels_components_inputs_inset_labels_page__["a" /* ComponentsInputsInsetLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.placeholderLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__placeholder_labels_components_inputs_placeholder_labels_page__["a" /* ComponentsInputsPlaceholderLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.stackedLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__stacked_labels_components_inputs_stacked_labels_page__["a" /* ComponentsInputsStackedLabelsPage */]);
    };
    ComponentsInputsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\components.inputs-list.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Inputs</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item (click)="fixedLabelsTapped()">\n\n			Fixed Labels\n\n		</ion-item>\n\n		<ion-item (click)="floatingLabelsTapped()">\n\n			Floating Labels\n\n		</ion-item>\n\n		<ion-item (click)="inlineLabelsTapped()">\n\n			Inline Labels\n\n		</ion-item>\n\n		<ion-item (click)="insetLabelsTapped()">\n\n			Inset Labels\n\n		</ion-item>\n\n		<ion-item (click)="placeholderLabelsTapped()">\n\n			Placeholder Labels\n\n		</ion-item>\n\n		<ion-item (click)="stackedLabelsTapped()">\n\n			Stacked Labels\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\inputs\components.inputs-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ComponentsInputsListPage);
    return ComponentsInputsListPage;
}());

//# sourceMappingURL=components.inputs-list.page.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsIconsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsIconsPage = (function () {
    function ComponentsIconsPage() {
    }
    ComponentsIconsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\icons\components.icons.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Icons</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-center class="icons-page">\n\n\n\n	<ion-row>\n\n		<ion-col>\n\n			<ion-icon name="ionic" color="primary"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="logo-angular"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="heart" color="danger"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="ionitron" color="primary"></ion-icon>\n\n		</ion-col>\n\n\n\n		<ion-col>\n\n			<ion-icon name="happy" color="vibrant"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="people"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="person"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="contact"></ion-icon>\n\n		</ion-col>\n\n\n\n		<ion-col>\n\n			<ion-icon name="apps"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="lock"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="key" color="bright"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="unlock"></ion-icon>\n\n		</ion-col>\n\n\n\n		<ion-col>\n\n			<ion-icon name="map" color="secondary"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="navigate"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="pin"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="locate"></ion-icon>\n\n		</ion-col>\n\n\n\n		<ion-col>\n\n			<ion-icon name="mic"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="musical-notes" color="vibrant"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="volume-up"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="microphone"></ion-icon>\n\n		</ion-col>\n\n\n\n		<ion-col>\n\n			<ion-icon name="cafe" color="bright"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="calculator"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="bus"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="wine" color="danger"></ion-icon>\n\n		</ion-col>\n\n\n\n		<ion-col>\n\n			<ion-icon name="camera"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="image" color="secondary"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="star" color="bright"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="pin"></ion-icon>\n\n		</ion-col>\n\n\n\n		<ion-col>\n\n			<ion-icon name="arrow-dropup-circle" color="vibrant"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="arrow-back"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="arrow-dropdown"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="arrow-forward"></ion-icon>\n\n		</ion-col>\n\n\n\n		<ion-col>\n\n			<ion-icon name="cloud"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="sunny" color="bright"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="umbrella"></ion-icon>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-icon name="rainy" color="primary"></ion-icon>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\icons\components.icons.html"*/
        })
    ], ComponentsIconsPage);
    return ComponentsIconsPage;
}());

//# sourceMappingURL=components.icons.page.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsGridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsGridPage = (function () {
    function ComponentsGridPage() {
    }
    ComponentsGridPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\grid\components.grid.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Grid</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="grid-page">\n\n	<ion-row>\n\n		<ion-col>\n\n			<div>col</div>\n\n		</ion-col>\n\n		<ion-col>\n\n			<div>col</div>\n\n		</ion-col>\n\n		<ion-col>\n\n			<div>col</div>\n\n		</ion-col>\n\n		<ion-col>\n\n			<div>\n\n				col<br>\n\n				3 lines<br>\n\n				of text<br>\n\n			</div>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n	<ion-row center>\n\n		<ion-col>\n\n			<div>col</div>\n\n		</ion-col>\n\n		<ion-col>\n\n			<div>col</div>\n\n		</ion-col>\n\n		<ion-col>\n\n			<div>col</div>\n\n		</ion-col>\n\n		<ion-col>\n\n			<div>\n\n				col<br>\n\n				3 lines<br>\n\n				center<br>\n\n			</div>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n	<ion-row center>\n\n		<ion-col offset-25>\n\n			<div>col</div>\n\n		</ion-col>\n\n		<ion-col>\n\n			<div>col</div>\n\n		</ion-col>\n\n		<ion-col>\n\n			<div>\n\n				col<br>\n\n				3 lines<br>\n\n				center<br>\n\n			</div>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n	<ion-row baseline>\n\n		<ion-col offset-50>\n\n			<div>col</div>\n\n		</ion-col>\n\n		<ion-col>\n\n			<div>\n\n				col<br>\n\n				3 lines<br>\n\n				baseline<br>\n\n			</div>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n	<ion-row baseline>\n\n		<ion-col offset-75>\n\n			<div>\n\n				col<br>\n\n				2 lines<br>\n\n			</div>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\grid\components.grid.html"*/
        })
    ], ComponentsGridPage);
    return ComponentsGridPage;
}());

//# sourceMappingURL=components.grid.page.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsGesturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsGesturesPage = (function () {
    function ComponentsGesturesPage() {
        this.press = 0;
        this.pan = 0;
        this.swipe = 0;
        this.tap = 0;
    }
    ComponentsGesturesPage.prototype.pressEvent = function (e) {
        this.press++;
    };
    ComponentsGesturesPage.prototype.panEvent = function (e) {
        this.pan++;
    };
    ComponentsGesturesPage.prototype.swipeEvent = function (e) {
        this.swipe++;
    };
    ComponentsGesturesPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    ComponentsGesturesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\gestures\components.gestures.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Gestures</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n	<ion-card (tap)="tapEvent($event)">\n\n		<ion-item>\n\n			Tapped: {{tap}} times\n\n		</ion-item>\n\n	</ion-card>\n\n\n\n	<ion-card (press)="pressEvent($event)">\n\n		<ion-item>\n\n			Pressed: {{press}} times\n\n		</ion-item>\n\n	</ion-card>\n\n\n\n	<ion-card (pan)="panEvent($event)">\n\n		<ion-item>\n\n			Panned: {{pan}} times\n\n		</ion-item>\n\n	</ion-card>\n\n\n\n	<ion-card (swipe)="swipeEvent($event)">\n\n		<ion-item>\n\n			Swiped: {{swipe}} times\n\n		</ion-item>\n\n	</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\gestures\components.gestures.html"*/
        })
    ], ComponentsGesturesPage);
    return ComponentsGesturesPage;
}());

//# sourceMappingURL=components.gestures.page.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsFloatingActionButtonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsFloatingActionButtonsPage = (function () {
    function ComponentsFloatingActionButtonsPage() {
    }
    ComponentsFloatingActionButtonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\floating-action-buttons\components.floating-action-buttons.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>\n\n			FABs\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n	<ion-fab top right edge>\n\n		<button ion-fab color="vibrant" mini>\n\n			<ion-icon name="add"></ion-icon>\n\n		</button>\n\n		<ion-fab-list>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-facebook"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-twitter"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-vimeo"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-googleplus"></ion-icon>\n\n			</button>\n\n		</ion-fab-list>\n\n	</ion-fab>\n\n\n\n	<ion-fab right bottom>\n\n		<button ion-fab color="light">\n\n			<ion-icon name="arrow-dropleft"></ion-icon>\n\n		</button>\n\n		<ion-fab-list side="left">\n\n			<button ion-fab>\n\n				<ion-icon name="logo-facebook"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-twitter"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-vimeo"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-googleplus"></ion-icon>\n\n			</button>\n\n		</ion-fab-list>\n\n	</ion-fab>\n\n\n\n	<ion-fab left top>\n\n		<button ion-fab color="secondary">\n\n			<ion-icon name="arrow-dropright"></ion-icon>\n\n		</button>\n\n		<ion-fab-list side="right">\n\n			<button ion-fab>\n\n				<ion-icon name="logo-facebook"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-twitter"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-vimeo"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-googleplus"></ion-icon>\n\n			</button>\n\n		</ion-fab-list>\n\n	</ion-fab>\n\n\n\n	<ion-fab left bottom>\n\n		<button ion-fab color="dark">\n\n			<ion-icon name="arrow-dropup"></ion-icon>\n\n		</button>\n\n		<ion-fab-list side="top">\n\n			<button ion-fab>\n\n				<ion-icon name="logo-facebook"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-twitter"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-vimeo"></ion-icon>\n\n			</button>\n\n			<button ion-fab>\n\n				<ion-icon name="logo-googleplus"></ion-icon>\n\n			</button>\n\n		</ion-fab-list>\n\n	</ion-fab>\n\n\n\n	<ion-fab center middle>\n\n		<button ion-fab color="danger">\n\n			<ion-icon name="md-share"></ion-icon>\n\n		</button>\n\n		<ion-fab-list side="top">\n\n			<button ion-fab color="primary">\n\n				<ion-icon name="logo-vimeo"></ion-icon>\n\n			</button>\n\n		</ion-fab-list>\n\n		<ion-fab-list side="bottom">\n\n			<button ion-fab color="secondary">\n\n				<ion-icon name="logo-facebook"></ion-icon>\n\n			</button>\n\n		</ion-fab-list>\n\n		<ion-fab-list side="left">\n\n			<button ion-fab color="light">\n\n				<ion-icon name="logo-googleplus"></ion-icon>\n\n			</button>\n\n		</ion-fab-list>\n\n		<ion-fab-list side="right">\n\n			<button ion-fab color="dark">\n\n				<ion-icon name="logo-twitter"></ion-icon>\n\n			</button>\n\n		</ion-fab-list>\n\n	</ion-fab>\n\n\n\n	<ion-fab right middle>\n\n		<button ion-fab color="danger">\n\n			<ion-icon name="add"></ion-icon>\n\n		</button>\n\n	</ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\floating-action-buttons\components.floating-action-buttons.html"*/
        })
    ], ComponentsFloatingActionButtonsPage);
    return ComponentsFloatingActionButtonsPage;
}());

//# sourceMappingURL=components.floating-action-buttons.page.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsCheckboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsCheckboxPage = (function () {
    function ComponentsCheckboxPage() {
    }
    ComponentsCheckboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\checkbox\components.checkbox.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Checkbox</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-list-header>\n\n			Items List\n\n		</ion-list-header>\n\n\n\n		<ion-item>\n\n			<ion-label>Item 1</ion-label>\n\n			<ion-checkbox color="dark" checked="true"></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label>Item 2</ion-label>\n\n			<ion-checkbox></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label>Item 3</ion-label>\n\n			<ion-checkbox value="item 3" disabled="true"></ion-checkbox>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\checkbox\components.checkbox.html"*/
        })
    ], ComponentsCheckboxPage);
    return ComponentsCheckboxPage;
}());

//# sourceMappingURL=components.checkbox.page.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsCardsPage = (function () {
    function ComponentsCardsPage() {
    }
    ComponentsCardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\cards\components.cards.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Cards</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-card>\n\n		<ion-card-content>\n\n			This is just your basic card with some text to boot.\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-header>\n\n			Header\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			This is a card with some text and a header.\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-header>\n\n			List In Card\n\n		</ion-card-header>\n\n\n\n		<ion-list>\n\n			<button ion-item>\n\n				<ion-icon name=\'cart\' item-left></ion-icon>\n\n				Shopping\n\n			</button>\n\n\n\n			<button ion-item>\n\n				<ion-icon name=\'medical\' item-left></ion-icon>\n\n				Hospital\n\n			</button>\n\n\n\n			<button ion-item>\n\n				<ion-icon name=\'cafe\' item-left></ion-icon>\n\n				Cafe\n\n			</button>\n\n\n\n			<button ion-item>\n\n				<ion-icon name=\'paw\' item-left></ion-icon>\n\n				Dog Park\n\n			</button>\n\n\n\n			<button ion-item>\n\n				<ion-icon name=\'beer\' item-left></ion-icon>\n\n				Pub\n\n			</button>\n\n\n\n			<button ion-item>\n\n				<ion-icon name=\'planet\' item-left></ion-icon>\n\n				Space\n\n			</button>\n\n		</ion-list>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<img src="assets/img/bjork-live.jpg"/>\n\n		<ion-card-content>\n\n			<ion-card-title>\n\n				Björk\n\n			</ion-card-title>\n\n			<p>\n\n				Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the\n\n				Sugarcubes, but when...\n\n			</p>\n\n		</ion-card-content>\n\n		<ion-row no-padding>\n\n			<ion-col>\n\n				<button ion-button clear small color="danger" icon-left>\n\n					<ion-icon name=\'star\'></ion-icon>\n\n					Favorite\n\n				</button>\n\n			</ion-col>\n\n			<ion-col text-center>\n\n				<button ion-button clear small color="danger" icon-left>\n\n					<ion-icon name=\'musical-notes\'></ion-icon>\n\n					Listen\n\n				</button>\n\n			</ion-col>\n\n			<ion-col text-right>\n\n				<button ion-button clear small color="danger" icon-left>\n\n					<ion-icon name=\'share-alt\'></ion-icon>\n\n					Share\n\n				</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-card>\n\n	<div class="card-background-page">\n\n		<ion-card>\n\n			<img src="assets/img/bjork-live.jpg"/>\n\n			<div class="card-title">Björk</div>\n\n			<div class="card-subtitle">9 Albums</div>\n\n		</ion-card>\n\n	</div>\n\n	<ion-card>\n\n		<ion-item>\n\n			<ion-avatar item-left>\n\n				<img src="assets/img/marty-avatar.png">\n\n			</ion-avatar>\n\n			<h2>Marty McFly</h2>\n\n			<p>November 5, 1955</p>\n\n		</ion-item>\n\n\n\n		<img src="assets/img/advance-card-bttf.png">\n\n\n\n		<ion-card-content>\n\n			<p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a\n\n				DeLorean?! Whoa. This is heavy.</p>\n\n		</ion-card-content>\n\n\n\n		<ion-row no-padding>\n\n			<ion-col>\n\n				<button ion-button clear small color="primary" icon-left>\n\n					<ion-icon name=\'thumbs-up\'></ion-icon>\n\n					12 Likes\n\n				</button>\n\n			</ion-col>\n\n			<ion-col text-center>\n\n				<button ion-button clear small color="primary" icon-left>\n\n					<ion-icon name=\'text\'></ion-icon>\n\n					4 Comments\n\n				</button>\n\n			</ion-col>\n\n			<ion-col center text-center>\n\n				<ion-note>\n\n					11h ago\n\n				</ion-note>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\cards\components.cards.html"*/
        })
    ], ComponentsCardsPage);
    return ComponentsCardsPage;
}());

//# sourceMappingURL=components.cards.page.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsButtonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsButtonsPage = (function () {
    function ComponentsButtonsPage() {
    }
    ComponentsButtonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\buttons\components.buttons.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Buttons</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div>\n\n		<button ion-button color="light">Light</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button>Default</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="secondary">Secondary</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="danger">Danger</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="dark">Dark</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="light" outline>Light</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button outline>Default</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="secondary" outline>Secondary</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="danger" outline>Danger</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="dark" outline>Dark</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="light" clear>Light</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button clear>Default</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="secondary" clear>Secondary</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="danger" clear>Danger</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="dark" clear>Dark</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="light" round>Light</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button round>Default</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="secondary" round>Secondary</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="danger" round>Danger</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="dark" round>Dark</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="light" block>Light</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button block>Default</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="secondary" block>Secondary</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="danger" block>Danger</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="dark" block>Dark</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="light" full>Light</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button full>Default</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="secondary" full>Secondary</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="danger" full>Danger</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="dark" full>Dark</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="light" small>Light Small</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button small>Default Small</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="secondary">Secondary Medium</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="danger" medium>Danger Medium</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="dark" large>Dark Large</button>\n\n	</div>\n\n	<div>\n\n		<button ion-button color="dark" round icon-left>\n\n			<ion-icon name=\'construct\'></ion-icon>\n\n			Tools\n\n		</button>\n\n		<button ion-button color="dark" clear icon-only>\n\n			<ion-icon name=\'hammer\'></ion-icon>\n\n		</button>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\buttons\components.buttons.html"*/
        })
    ], ComponentsButtonsPage);
    return ComponentsButtonsPage;
}());

//# sourceMappingURL=components.buttons.page.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsBadgesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsBadgesPage = (function () {
    function ComponentsBadgesPage() {
    }
    ComponentsBadgesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\badges\components.badges.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Badges</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n	<ion-card>\n\n\n\n		<img src="assets/img/bjork-live.jpg"/>\n\n\n\n		<ion-card-content>\n\n			<h2 class="card-title">\n\n				Björk\n\n			</h2>\n\n			<p>\n\n				Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the\n\n				Sugarcubes, but when...\n\n			</p>\n\n		</ion-card-content>\n\n\n\n		<ion-item>\n\n			<ion-icon name=\'musical-notes\' item-left style="color: #d03e84"></ion-icon>\n\n			Albums\n\n			<ion-badge item-right>9</ion-badge>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-icon name=\'logo-twitter\' item-left style="color: #55acee"></ion-icon>\n\n			Followers\n\n			<ion-badge item-right>260k</ion-badge>\n\n		</ion-item>\n\n\n\n	</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\badges\components.badges.html"*/
        })
    ], ComponentsBadgesPage);
    return ComponentsBadgesPage;
}());

//# sourceMappingURL=components.badges.page.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsAlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentsAlertsPage = (function () {
    function ComponentsAlertsPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    ComponentsAlertsPage.prototype.doAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            message: 'This is some important information!',
            buttons: ['Ok']
        });
        alert.present();
    };
    ComponentsAlertsPage.prototype.doPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Password',
            message: 'Enter your password to login',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        console.log('Login clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ComponentsAlertsPage.prototype.doConfirmation = function () {
        var confirmation = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                    }
                }
            ]
        });
        confirmation.present();
    };
    ComponentsAlertsPage.prototype.doRadioAlert = function () {
        var _this = this;
        var radioAlert = this.alertCtrl.create();
        radioAlert.setTitle('Select color');
        radioAlert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });
        radioAlert.addButton('Cancel');
        radioAlert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        radioAlert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    ComponentsAlertsPage.prototype.doCheckboxAlert = function () {
        var _this = this;
        var checkboxAlert = this.alertCtrl.create();
        checkboxAlert.setTitle('Which fruits you like?');
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Apple',
            value: 'apple',
            checked: true
        });
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Banana',
            value: 'banana'
        });
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Kiwi',
            value: 'kiwi'
        });
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Strawberry',
            value: 'strawberry'
        });
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Pineapple',
            value: 'pineapple'
        });
        checkboxAlert.addButton('Cancel');
        checkboxAlert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        checkboxAlert.present().then(function () {
            _this.testCheckboxOpen = true;
        });
    };
    ComponentsAlertsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\alerts\components.alerts.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Alerts</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<button ion-button color="dark" block (click)="doAlert()">\n\n		Show Basic Alert\n\n	</button>\n\n	<button ion-button color="secondary" block (click)="doPrompt()">\n\n		Show Prompt Alert\n\n	</button>\n\n	<button ion-button color="danger" block (click)="doConfirmation()">\n\n		Show Confirmation Alert\n\n	</button>\n\n	<button ion-button color="light" block (click)="doRadioAlert()">\n\n		Show Radio Alert\n\n	</button>\n\n	<button ion-button color="primary" block (click)="doCheckboxAlert()">\n\n		Show Checkbox Alert\n\n	</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\alerts\components.alerts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ComponentsAlertsPage);
    return ComponentsAlertsPage;
}());

//# sourceMappingURL=components.alerts.page.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsActionSheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentsActionSheetPage = (function () {
    function ComponentsActionSheetPage(platform, actionsheetCtrl) {
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    ComponentsActionSheetPage.prototype.openActionSheet = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Select an action',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ComponentsActionSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\actionsheet\components.actionsheet.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Action Sheet</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<button ion-button block (click)="openActionSheet()">\n\n		Show Action Sheet\n\n	</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\actionsheet\components.actionsheet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ComponentsActionSheetPage);
    return ComponentsActionSheetPage;
}());

//# sourceMappingURL=components.actionsheet.page.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_sort__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__["a" /* TrimHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_3__sort_sort__["a" /* SortPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__["a" /* TrimHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_3__sort_sort__["a" /* SortPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordpressItemPage = (function () {
    function WordpressItemPage(navParams) {
        this.post = navParams.get('item');
    }
    WordpressItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\wordpress\item\wordpress.item.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>WP post</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-card>\n\n		<img *ngIf="!!post.image" src="{{post.image}}"/>\n\n		<ion-card-content>\n\n			<h2 class="card-title">{{post.title}}</h2>\n\n			<div [innerHTML]="post.content"></div>\n\n			<p><strong>{{post.author}}</strong> - {{post.date}}</p>\n\n			<p><i>[{{post.tags.join(\', \')}}]</i></p>\n\n		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\wordpress\item\wordpress.item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], WordpressItemPage);
    return WordpressItemPage;
}());

//# sourceMappingURL=wordpress.item.page.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(385);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pair_up_pair_up__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pair_up_no_login_pair_up_no_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__setting_tab_setting_tab__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(nav, navCtrl, auth, afAuth, toast, afDatabase) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.afDatabase = afDatabase;
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.auth = auth;
    }
    HomePage.prototype.toLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {});
    };
    HomePage.prototype.toProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], {});
    };
    HomePage.prototype.logout = function () {
        this.auth.signOut();
        this.toast.create({
            message: "Logged out successfully.",
            duration: 2000
        }).present();
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.toPairUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pair_up_pair_up__["a" /* PairUpPage */]);
    };
    HomePage.prototype.toPairUpNoLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pair_up_no_login_pair_up_no_login__["a" /* PairUpNoLoginPage */]);
    };
    HomePage.prototype.toSettingTabPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__setting_tab_setting_tab__["a" /* SettingTabPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\home\home.html"*/'<ion-header>\n\n	<ion-navbar>\n\n        <ion-buttons left> <button (click)="toSettingTabPage()" class="navbutton" *ngIf="auth.authenticated" float-right> <ion-icon name="ios-construct"></ion-icon> </button> \n\n        </ion-buttons>\n\n		<ion-title class="navtitle">\n\n			SENSE\n\n		</ion-title>\n\n        <ion-buttons right> <button (click)="toLoginPage()" class="navbutton" *ngIf="!auth.authenticated"> <ion-icon name="ios-log-in"></ion-icon> </button> \n\n        </ion-buttons>\n\n        <ion-buttons right> <button (click)="logout()" class="navbutton" *ngIf="auth.authenticated"> <ion-icon name="ios-log-out"></ion-icon> </button> \n\n        </ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce padding>\n\n	<h2 align="center"> Welcome to Sense!</h2>\n\n	<p align="center" *ngIf="auth.authenticated"> Please choose either one: </p>\n\n    <p align="center" *ngIf="!auth.authenticated"> Please log-in to access the following functions: </p>\n\n	<ion-grid class="home-grid">\n\n	<ion-row class="home-row1">\n\n		<ion-col col-6>\n\n			<button ion-button full name="forum" style="height: 100%;" >\n\n				Forum\n\n			</button>\n\n		</ion-col>\n\n		<ion-col col-6>\n\n            <button ion-button full name="pairup" style="height: 100%;" *ngIf="!auth.authenticated" (click)="toPairUpNoLoginPage() ">\n\n                Pair-up\n\n            </button>\n\n			<button ion-button full name="pairup" style="height: 100%;" *ngIf="auth.authenticated" (click)="toPairUpPage()">\n\n				Pair-up\n\n			</button>\n\n		</ion-col>\n\n	</ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\home\home.html"*/,
            providers: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.page.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ultimate_ngxerrors__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_components_components_module__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_google_maps_google_maps_module__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_slide_box_slide_box_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wordpress_wordpress_module__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_module__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_goal_edit_goal_edit_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_goal_goal_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_edit_profile_edit__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_validation__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_pair_up_pair_up__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_calendar_calendar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_to_do_list_to_do_list__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_pipes_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_pair_up_no_login_pair_up_no_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_chat_box_chat_box__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_setting_tab_setting_tab_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_popover_profile_popover_profile_module__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_popover_goal_popover_goal_module__ = __webpack_require__(613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_edit_profile_edit__["a" /* ProfileEditPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_pair_up_pair_up__["a" /* PairUpPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_to_do_list_to_do_list__["a" /* ToDoListPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_pair_up_no_login_pair_up_no_login__["a" /* PairUpNoLoginPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_chat_box_chat_box__["a" /* ChatBoxPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                    tabsHideOnSubPages: false,
                }, {
                    links: [
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-box/chat-box.module#ChatBoxPageModule', name: 'ChatBoxPage', segment: 'chat-box', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/goal-edit/goal-edit.module#GoalEditPageModule', name: 'GoalEditPage', segment: 'goal-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/goal/goal.module#GoalPageModule', name: 'GoalPage', segment: 'goal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/note/note.module#NotePageModule', name: 'NotePage', segment: 'note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pair-up-no-login/pair-up-no-login.module#PairUpNoLoginPageModule', name: 'PairUpNoLoginPage', segment: 'pair-up-no-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pair-up/pair-up.module#PairUpPageModule', name: 'PairUpPage', segment: 'pair-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-edit/profile-edit.module#ProfileEditPageModule', name: 'ProfileEditPage', segment: 'profile-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-tab/setting-tab.module#SettingTabPageModule', name: 'SettingTabPage', segment: 'setting-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/to-do-list/to-do-list.module#ToDoListPageModule', name: 'ToDoListPage', segment: 'to-do-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__agm_core__["a" /* AgmCoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__config__["b" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_8__pages_components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_google_maps_google_maps_module__["a" /* GoogleMapsModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_slide_box_slide_box_module__["a" /* SlideBoxModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wordpress_wordpress_module__["a" /* WordpressModule */],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_25_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_24__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_30__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_21__pages_goal_goal_module__["GoalPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_setting_tab_setting_tab_module__["SettingTabPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_goal_edit_goal_edit_module__["GoalEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_popover_profile_popover_profile_module__["a" /* PopoverProfilePageModule */],
                __WEBPACK_IMPORTED_MODULE_35__pages_popover_goal_popover_goal_module__["a" /* PopoverGoalPageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_edit_profile_edit__["a" /* ProfileEditPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_pair_up_pair_up__["a" /* PairUpPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_to_do_list_to_do_list__["a" /* ToDoListPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_pair_up_no_login_pair_up_no_login__["a" /* PairUpNoLoginPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_chat_box_chat_box__["a" /* ChatBoxPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ToastController */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputs_stacked_labels_components_inputs_stacked_labels_page__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputs_placeholder_labels_components_inputs_placeholder_labels_page__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputs_inset_labels_components_inputs_inset_labels_page__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inputs_inline_labels_components_inputs_inline_labels_page__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inputs_floating_labels_components_inputs_floating_labels_page__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inputs_fixed_labels_components_inputs_fixed_labels_page__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inputs_components_inputs_list_page__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__icons_components_icons_page__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_components_grid_page__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gestures_components_gestures_page__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__floating_action_buttons_components_floating_action_buttons_page__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkbox_components_checkbox_page__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cards_components_cards_page__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__buttons_components_buttons_page__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__badges_components_badges_page__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__alerts_components_alerts_page__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__actionsheet_components_actionsheet_page__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__list_components_list_page__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__list_components_list_page__["a" /* ComponentsListPage */],
                __WEBPACK_IMPORTED_MODULE_18__actionsheet_components_actionsheet_page__["a" /* ComponentsActionSheetPage */],
                __WEBPACK_IMPORTED_MODULE_17__alerts_components_alerts_page__["a" /* ComponentsAlertsPage */],
                __WEBPACK_IMPORTED_MODULE_16__badges_components_badges_page__["a" /* ComponentsBadgesPage */],
                __WEBPACK_IMPORTED_MODULE_15__buttons_components_buttons_page__["a" /* ComponentsButtonsPage */],
                __WEBPACK_IMPORTED_MODULE_14__cards_components_cards_page__["a" /* ComponentsCardsPage */],
                __WEBPACK_IMPORTED_MODULE_13__checkbox_components_checkbox_page__["a" /* ComponentsCheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_12__floating_action_buttons_components_floating_action_buttons_page__["a" /* ComponentsFloatingActionButtonsPage */],
                __WEBPACK_IMPORTED_MODULE_11__gestures_components_gestures_page__["a" /* ComponentsGesturesPage */],
                __WEBPACK_IMPORTED_MODULE_10__grid_components_grid_page__["a" /* ComponentsGridPage */],
                __WEBPACK_IMPORTED_MODULE_9__icons_components_icons_page__["a" /* ComponentsIconsPage */],
                __WEBPACK_IMPORTED_MODULE_8__inputs_components_inputs_list_page__["a" /* ComponentsInputsListPage */],
                __WEBPACK_IMPORTED_MODULE_7__inputs_fixed_labels_components_inputs_fixed_labels_page__["a" /* ComponentsInputsFixedLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_6__inputs_floating_labels_components_inputs_floating_labels_page__["a" /* ComponentsInputsFloatingLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_5__inputs_inline_labels_components_inputs_inline_labels_page__["a" /* ComponentsInputsInlineLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_4__inputs_inset_labels_components_inputs_inset_labels_page__["a" /* ComponentsInputsInsetLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_3__inputs_placeholder_labels_components_inputs_placeholder_labels_page__["a" /* ComponentsInputsPlaceholderLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_2__inputs_stacked_labels_components_inputs_stacked_labels_page__["a" /* ComponentsInputsStackedLabelsPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__list_components_list_page__["a" /* ComponentsListPage */],
                __WEBPACK_IMPORTED_MODULE_18__actionsheet_components_actionsheet_page__["a" /* ComponentsActionSheetPage */],
                __WEBPACK_IMPORTED_MODULE_17__alerts_components_alerts_page__["a" /* ComponentsAlertsPage */],
                __WEBPACK_IMPORTED_MODULE_16__badges_components_badges_page__["a" /* ComponentsBadgesPage */],
                __WEBPACK_IMPORTED_MODULE_15__buttons_components_buttons_page__["a" /* ComponentsButtonsPage */],
                __WEBPACK_IMPORTED_MODULE_14__cards_components_cards_page__["a" /* ComponentsCardsPage */],
                __WEBPACK_IMPORTED_MODULE_13__checkbox_components_checkbox_page__["a" /* ComponentsCheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_12__floating_action_buttons_components_floating_action_buttons_page__["a" /* ComponentsFloatingActionButtonsPage */],
                __WEBPACK_IMPORTED_MODULE_11__gestures_components_gestures_page__["a" /* ComponentsGesturesPage */],
                __WEBPACK_IMPORTED_MODULE_10__grid_components_grid_page__["a" /* ComponentsGridPage */],
                __WEBPACK_IMPORTED_MODULE_9__icons_components_icons_page__["a" /* ComponentsIconsPage */],
                __WEBPACK_IMPORTED_MODULE_8__inputs_components_inputs_list_page__["a" /* ComponentsInputsListPage */],
                __WEBPACK_IMPORTED_MODULE_7__inputs_fixed_labels_components_inputs_fixed_labels_page__["a" /* ComponentsInputsFixedLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_6__inputs_floating_labels_components_inputs_floating_labels_page__["a" /* ComponentsInputsFloatingLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_5__inputs_inline_labels_components_inputs_inline_labels_page__["a" /* ComponentsInputsInlineLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_4__inputs_inset_labels_components_inputs_inset_labels_page__["a" /* ComponentsInputsInsetLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_3__inputs_placeholder_labels_components_inputs_placeholder_labels_page__["a" /* ComponentsInputsPlaceholderLabelsPage */],
                __WEBPACK_IMPORTED_MODULE_2__inputs_stacked_labels_components_inputs_stacked_labels_page__["a" /* ComponentsInputsStackedLabelsPage */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionsheet_components_actionsheet_page__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alerts_components_alerts_page__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__badges_components_badges_page__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buttons_components_buttons_page__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards_components_cards_page__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkbox_components_checkbox_page__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__floating_action_buttons_components_floating_action_buttons_page__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gestures_components_gestures_page__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_components_grid_page__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__icons_components_icons_page__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__inputs_components_inputs_list_page__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ComponentsListPage = (function () {
    function ComponentsListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ComponentsListPage.prototype.actionsheetTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__actionsheet_components_actionsheet_page__["a" /* ComponentsActionSheetPage */]);
    };
    ComponentsListPage.prototype.alertsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__alerts_components_alerts_page__["a" /* ComponentsAlertsPage */]);
    };
    ComponentsListPage.prototype.badgesTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__badges_components_badges_page__["a" /* ComponentsBadgesPage */]);
    };
    ComponentsListPage.prototype.buttonsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__buttons_components_buttons_page__["a" /* ComponentsButtonsPage */]);
    };
    ComponentsListPage.prototype.cardsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cards_components_cards_page__["a" /* ComponentsCardsPage */]);
    };
    ComponentsListPage.prototype.checkboxTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__checkbox_components_checkbox_page__["a" /* ComponentsCheckboxPage */]);
    };
    ComponentsListPage.prototype.floatingActionButtonsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__floating_action_buttons_components_floating_action_buttons_page__["a" /* ComponentsFloatingActionButtonsPage */]);
    };
    ComponentsListPage.prototype.gesturesTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__gestures_components_gestures_page__["a" /* ComponentsGesturesPage */]);
    };
    ComponentsListPage.prototype.gridTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__grid_components_grid_page__["a" /* ComponentsGridPage */]);
    };
    ComponentsListPage.prototype.iconsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__icons_components_icons_page__["a" /* ComponentsIconsPage */]);
    };
    ComponentsListPage.prototype.inputsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__inputs_components_inputs_list_page__["a" /* ComponentsInputsListPage */]);
    };
    ComponentsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\list\components.list.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Components</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item (click)="actionsheetTapped()">\n\n			Action Sheet\n\n		</ion-item>\n\n		<ion-item (click)="alertsTapped()">\n\n			Alerts\n\n		</ion-item>\n\n		<ion-item (click)="badgesTapped()">\n\n			Badges\n\n		</ion-item>\n\n		<ion-item (click)="buttonsTapped()">\n\n			Buttons\n\n		</ion-item>\n\n		<ion-item (click)="cardsTapped()">\n\n			Cards\n\n		</ion-item>\n\n		<ion-item (click)="checkboxTapped()">\n\n			Checkbox\n\n		</ion-item>\n\n		<ion-item (click)="floatingActionButtonsTapped()">\n\n			Floating Action Buttons\n\n		</ion-item>\n\n		<ion-item (click)="gesturesTapped()">\n\n			Gestures\n\n		</ion-item>\n\n		<ion-item (click)="gridTapped()">\n\n			Grid\n\n		</ion-item>\n\n		<ion-item (click)="iconsTapped()">\n\n			Icons\n\n		</ion-item>\n\n		<ion-item (click)="inputsTapped()">\n\n			Inputs\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\components\list\components.list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ComponentsListPage);
    return ComponentsListPage;
}());

//# sourceMappingURL=components.list.page.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_page__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GoogleMapsModule = (function () {
    function GoogleMapsModule() {
    }
    GoogleMapsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__google_maps_page__["a" /* GoogleMapsPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__google_maps_page__["a" /* GoogleMapsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */]]
        })
    ], GoogleMapsModule);
    return GoogleMapsModule;
}());

//# sourceMappingURL=google-maps.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapsPage = (function () {
    function GoogleMapsPage() {
        this.initMarkers();
        this.origin = {
            lat: 51.673858,
            lng: 7.815982
        };
        this.zoom = 8;
    }
    GoogleMapsPage.prototype.clickedMarker = function (label) {
        window.alert("clicked the marker: " + (label || ''));
    };
    GoogleMapsPage.prototype.initMarkers = function () {
        this.markers = [{
                lat: 51.673858,
                lng: 7.815982,
                label: 'A'
            }, {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B'
            }, {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C'
            }];
    };
    GoogleMapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\google-maps\google-maps.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Google maps</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<agm-map style="width: 100%; height: 100%;"\n\n			[latitude]="origin.lat"\n\n			[longitude]="origin.lng"\n\n			[zoom]="zoom">\n\n		<agm-marker\n\n				*ngFor="let m of markers"\n\n				(markerClick)="clickedMarker(m.label)"\n\n				[latitude]="m.lat"\n\n				[longitude]="m.lng"\n\n				[label]="m.label">\n\n		</agm-marker>\n\n	</agm-map>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\google-maps\google-maps.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapsPage);
    return GoogleMapsPage;
}());

//# sourceMappingURL=google-maps.page.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_email_service__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_call_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_page__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_in_app_browser_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_maps_service__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__home_page__["a" /* HomePage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__home_page__["a" /* HomePage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_email_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_3__services_call_service__["a" /* CallService */],
                __WEBPACK_IMPORTED_MODULE_5__services_in_app_browser_service__["a" /* InAppBrowserService */],
                __WEBPACK_IMPORTED_MODULE_6__services_maps_service__["a" /* MapsService */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Email */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Email = (function () {
    function Email() {
    }
    return Email;
}());

var EmailService = (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (email) {
        var plugins = window.cordova.plugins;
        plugins.email.isAvailable(function () {
            plugins.email.open(email);
        });
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], EmailService);
    return EmailService;
}());

//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CallService = (function () {
    function CallService() {
    }
    CallService.prototype.call = function (phoneNumber) {
        window.location.href = 'tel:' + phoneNumber;
    };
    CallService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CallService);
    return CallService;
}());

//# sourceMappingURL=call.service.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InAppBrowserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InAppBrowserService = (function () {
    function InAppBrowserService() {
    }
    InAppBrowserService.prototype.open = function (url) {
        window.open(url, '_system', 'location=yes');
        return false;
    };
    InAppBrowserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], InAppBrowserService);
    return InAppBrowserService;
}());

//# sourceMappingURL=in-app-browser.service.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapsService = (function () {
    function MapsService(platform) {
        this.platform = platform;
    }
    MapsService.prototype.openMapsApp = function (location) {
        var q;
        if (this.platform.is('android')) {
            q = 'geo:' + location;
        }
        else {
            q = 'maps://maps.apple.com/?q=' + location;
        }
        window.location.href = q;
    };
    MapsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MapsService);
    return MapsService;
}());

//# sourceMappingURL=maps.service.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideBoxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_box_page__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideBoxModule = (function () {
    function SlideBoxModule() {
    }
    SlideBoxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__slide_box_page__["a" /* SlideBoxPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__slide_box_page__["a" /* SlideBoxPage */]]
        })
    ], SlideBoxModule);
    return SlideBoxModule;
}());

//# sourceMappingURL=slide-box.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideBoxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideBoxPage = (function () {
    function SlideBoxPage() {
        this.items = this.generateItems(7);
    }
    SlideBoxPage.prototype.generateItems = function (n) {
        var items = [];
        for (var i = 0; i < n; i++) {
            items.push({
                image: 'http://lorempixel.com/g/786/1024/city/' + i + '/'
            });
        }
        return items;
    };
    SlideBoxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\slide-box\slide-box.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Slides</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-slides pager loop="true">\n\n		<ion-slide *ngFor="let item of items">\n\n			<img src="{{item.image}}" />\n\n		</ion-slide>\n\n	</ion-slides>\n\n</ion-content>'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\slide-box\slide-box.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SlideBoxPage);
    return SlideBoxPage;
}());

//# sourceMappingURL=slide-box.page.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_wordpress_item_page__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_wordpress_list_page__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WordpressModule = (function () {
    function WordpressModule() {
    }
    WordpressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__item_wordpress_item_page__["a" /* WordpressItemPage */],
                __WEBPACK_IMPORTED_MODULE_4__list_wordpress_list_page__["a" /* WordpressListPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__item_wordpress_item_page__["a" /* WordpressItemPage */],
                __WEBPACK_IMPORTED_MODULE_4__list_wordpress_list_page__["a" /* WordpressListPage */]
            ]
        })
    ], WordpressModule);
    return WordpressModule;
}());

//# sourceMappingURL=wordpress.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimHtmlPipe = (function () {
    function TrimHtmlPipe() {
    }
    TrimHtmlPipe.prototype.transform = function (value) {
        return this.htmlToPlainText(value);
    };
    TrimHtmlPipe.prototype.htmlToPlainText = function (html) {
        return String(html).replace(/<[^>]+>/gm, '');
    };
    TrimHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'trimHtml'
        })
    ], TrimHtmlPipe);
    return TrimHtmlPipe;
}());

//# sourceMappingURL=trim-html.pipe.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit) {
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

//# sourceMappingURL=truncate.pipe.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_service__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_wordpress_item_page__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordpressListPage = (function () {
    function WordpressListPage(wordpressService, nav) {
        this.wordpressService = wordpressService;
        this.nav = nav;
    }
    WordpressListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.wordpressService.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    WordpressListPage.prototype.itemTapped = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__item_wordpress_item_page__["a" /* WordpressItemPage */], {
            item: item
        });
    };
    WordpressListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\wordpress\list\wordpress.list.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>WP posts</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-card *ngFor="let post of posts" (click)="itemTapped(post)">\n\n		<img *ngIf="!!post.image" src="{{post.image}}"/>\n\n		<ion-card-content>\n\n			<h2 class="card-title">{{post.title}}</h2>\n\n			<p>{{post.brief | trimHtml | truncate : 140}}</p>\n\n		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\wordpress\list\wordpress.list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__wordpress_service__["a" /* WordpressService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__wordpress_service__["a" /* WordpressService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], WordpressListPage);
    return WordpressListPage;
}());

//# sourceMappingURL=wordpress.list.page.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WordpressService = (function () {
    function WordpressService(http, config) {
        this.http = http;
        this.config = config;
    }
    WordpressService.prototype.getPosts = function () {
        var _this = this;
        return this.http.get(this.config.wordpressApiUrl)
            .map(function (x) { return x.json(); })
            .map(function (response) {
            _this.articles = response.posts.map(function (item) { return _this.createArticle(item); });
            return _this.articles;
        });
    };
    WordpressService.prototype.createArticle = function (item) {
        var imageUrl = item.attachments.length > 0 ? item.attachments[0].images.full.url : null;
        var tags = item.tags.map(function (x) { return x.title; });
        var contentIndex = item.content.indexOf('</p>') + 4;
        var content = contentIndex === -1 ? item.content : item.content.substring(contentIndex);
        return {
            id: item.id,
            title: item.title,
            brief: item.excerpt,
            image: imageUrl,
            date: item.date,
            content: content,
            author: item.author.name,
            tags: tags,
            url: this.config.wordpressApiUrl
        };
    };
    WordpressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], WordpressService);
    return WordpressService;
}());

//# sourceMappingURL=wordpress.service.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(app, platform, statusBar, auth) {
        this.statusBar = statusBar;
        this.auth = auth;
        this.app = app;
        this.platform = platform;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
        });
        this.auth.afAuth.authState
            .subscribe(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__["a" /* HomePage */];
        });
    };
    MyApp.prototype.login = function () {
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.logout = function () {
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__["a" /* HomePage */]);
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\app\app.html"*/'<ion-nav id="nav" [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_profile__ = __webpack_require__(255);
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

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverGoalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_goal__ = __webpack_require__(614);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverGoalPageModule = (function () {
    function PopoverGoalPageModule() {
    }
    PopoverGoalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover_goal__["a" /* PopoverGoalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover_goal__["a" /* PopoverGoalPage */]),
            ],
        })
    ], PopoverGoalPageModule);
    return PopoverGoalPageModule;
}());

//# sourceMappingURL=popover-goal.module.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverGoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverGoalPage = (function () {
    function PopoverGoalPage(navParams, popoverController, viewCtrl) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.viewCtrl = viewCtrl;
        this.name = null;
        this.academicGoal = null;
        this.workGoal = null;
        this.socialGoal = null;
        this.lifestyleGoal = null;
    }
    PopoverGoalPage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('name');
        this.academicGoal = this.navParams.get('academicGoal');
        this.workGoal = this.navParams.get('workGoal');
        this.socialGoal = this.navParams.get('socialGoal');
        this.lifestyleGoal = this.navParams.get('lifestyleGoal');
    };
    PopoverGoalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverGoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-popover-goal',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\popover-goal\popover-goal.html"*/'<ion-grid style=\'padding-left: 20px\'>\n    <h5 class="label-pad"> Goals of {{ name }} </h5>\n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> Academic </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p *ngIf = "!academicGoal"> Not stated </p>\n            <p *ngIf = "academicGoal">  {{ academicGoal }}  </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> Work </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p *ngIf = "!workGoal"> Not stated </p>\n            <p *ngIf = "workGoal">  {{ workGoal }}  </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> Social </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p *ngIf = "!socialGoal"> Not stated </p>\n            <p *ngIf = "socialGoal">  {{ socialGoal }}  </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n        <ion-col col-5>\n            <ion-label class="label-pad"> Lifestyle </ion-label>\n        </ion-col>\n        <ion-col col-7>\n            <p *ngIf = "!lifestyleGoal"> Not stated </p>\n            <p *ngIf = "lifestyleGoal">  {{ lifestyleGoal }}  </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n        <ion-col offset-6 col-2>\n            <button ion-button clear (click)=\'close()\'> Dismiss </button>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\popover-goal\popover-goal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PopoverController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ViewController */]) === "function" && _c || Object])
    ], PopoverGoalPage);
    return PopoverGoalPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=popover-goal.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_page__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, auth, fb, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.afAuth = afAuth;
        this.toast = toast;
        this.loginForm = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        var loginEmail = data.username.trim().concat("@sense.com");
        if (!loginEmail) {
            return;
        }
        var credentials = {
            email: loginEmail,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home_page__["a" /* HomePage */]);
            _this.afAuth.authState.take(1).subscribe(function (data) {
                if (data) {
                    _this.toast.create({
                        message: "Welcome back, " + data.email.split('@sense.com')[0] + ".",
                        duration: 2000
                    }).present();
                }
            });
        }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home_page__["a" /* HomePage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Ionic App\ionic3-firebase-auth\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Log in</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-login">\n\n	<form (ngSubmit)="login()" [formGroup]="loginForm">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: usernameErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n\n				<ion-input type="text" placeholder="User Name" formControlName="username" required></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="username" #usernameErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\',\'dirty\']">Please enter a valid user name.</div>\n\n			</div>\n\n\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters.</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{loginError}}</div>\n\n\n\n			<button ion-button full type="submit" [disabled]="!loginForm.valid">Log in</button>\n\n\n\n			<ion-list>\n\n				<button ion-button icon-left block clear (click)="signup()">\n\n					<ion-icon name="person-add"></ion-icon>\n\n					Sign up\n\n				</button>\n\n			</ion-list>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ionic App\ionic3-firebase-auth\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.js.map