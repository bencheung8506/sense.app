import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';
import { HomePage } from '../pages/home/home.page';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	private app;
	private platform;

	@ViewChild(Nav) nav: Nav;

	constructor(app: App, platform: Platform,
		private statusBar: StatusBar,
		private auth: AuthService) {
		this.app = app;
		this.platform = platform;
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
		});

		this.auth.afAuth.authState
			.subscribe(
				() => {
					this.rootPage = HomePage;
				}
			);
	}

	login() {
		this.auth.signOut();
		this.nav.setRoot(LoginPage);
	}

	logout() {
		this.auth.signOut();
		this.nav.setRoot(HomePage);
	}

	openPage(page) {
	this.nav.setRoot(page.component);
	}
}
