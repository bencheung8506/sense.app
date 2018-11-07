import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home.page';
import { ProfilePage } from '../profile/profile';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from "../../model/profile.model";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})

export class SignupPage {
	signupError: string;
	form: FormGroup;
	private auth: AuthService;
	defaultProfile = {
		valid: false,
		academicGoal: '',
		workGoal: '',
		socialGoal: '',
		lifestyleGoal: '',
	} as Profile;

	constructor(
		fb: FormBuilder,
		private navCtrl: NavController,
    	auth: AuthService,
    	private alertCtrl: AlertController,
		private afAuth: AngularFireAuth,
		private toast: ToastController, 
        private afDatabase: AngularFireDatabase
	) {
		this.form = fb.group({
			username: ['', Validators.compose([Validators.required, 
				Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')])],
			password: ['', Validators.compose([Validators.required, 
				Validators.minLength(6)])]
		});
		this.auth = auth;
    }

    signup() {
		let data = this.form.value;
		let credentials = {
			email: data.username.concat("@sense.com"),
			password: data.password
		};
		let userProfile = {
			id: '-1',
			name: data.username,
		}
		this.auth.signUp(credentials).then(
			() => {
				this.navCtrl.setRoot(HomePage);
				this.afAuth.authState.take(1).subscribe(data => {
				if (data) {
					userProfile.id = data.uid;
					this.afDatabase.object(`profile/${data.uid}`).set(this.defaultProfile);
					this.afDatabase.object(`userList/${data.uid}`).set(userProfile);
					this.toast.create({
						message: `Welcome, ${data.email.split('@sense.com')[0]}.`,
						duration: 2000
					}).present();
				}});
			},
			error => this.signupError = error.message
		);
    }
}
