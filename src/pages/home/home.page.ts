import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { ProfilePage } from '../profile/profile';
import { Profile } from "../../model/profile.model";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/take';
import { PairUpPage } from '../pair-up/pair-up';

@Component({
    selector: 'page-home',
	templateUrl: 'home.html',
	providers: [],
})
export class HomePage {
	private nav: Nav;
	public navCtrl: NavController;
	private auth: AuthService;

	constructor(
		nav: Nav,
		navCtrl: NavController,
		auth: AuthService,
		private afAuth: AngularFireAuth,
		private toast: ToastController,
		private afDatabase: AngularFireDatabase
	) {
		this.nav = nav;
		this.navCtrl = navCtrl;
		this.auth = auth;
	}

	toLoginPage() {
    	this.navCtrl.push(LoginPage, {});
  	}

	toProfilePage() {
    	this.navCtrl.push(ProfilePage, {});
	}

	logout() {
		this.auth.signOut();
		this.toast.create({
			message: `Logged out successfully.`,
			duration: 2000
		}).present();
	}

	signup(){
	  	this.navCtrl.push(SignupPage);
	}

	toPairUpPage() {
		this.navCtrl.push(PairUpPage);
	}
}
