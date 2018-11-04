import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home.page';
import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../signup/signup';
import { ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		fb: FormBuilder,
        private afAuth: AngularFireAuth,
        private toast: ToastController,
	) {
		this.loginForm = fb.group({
			username: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

    login() {
		let data = this.loginForm.value;
        let loginEmail = data.username.trim().concat("@sense.com");

		if (!loginEmail) {
			return;
		}

		let credentials = {
			email: loginEmail,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => {this.navCtrl.setRoot(HomePage);
                this.afAuth.authState.take(1).subscribe(data => {
                    if (data) {
                        this.toast.create({
                            message: `Welcome back, ${data.email.split('@sense.com')[0]}.`,
                            duration: 2000
                        }).present();
                    }
                })},
				error => this.loginError = error.message
			);
    }

    signup(){
        this.navCtrl.push(SignupPage);
    }

    loginWithGoogle() {
    this.auth.signInWithGoogle()
        .then(
            () => this.navCtrl.setRoot(HomePage),
            error => console.log(error.message)
        );
    }

}
