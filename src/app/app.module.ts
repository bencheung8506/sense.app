import { AgmCoreModule } from '@agm/core';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Config } from '../config';
import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
import { ProfileEditPageModule } from '../pages/profile-edit/profile-edit.module';
import { Component, enableProdMode } from "@angular/core";
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { PairUpPage } from '../pages/pair-up/pair-up';
import { ChatPage } from '../pages/chat/chat';
import { CalendarPage } from '../pages/calendar/calendar';
import { ToDoListPage } from '../pages/to-do-list/to-do-list';
import { PipesModule } from '../pipes/pipes.module';
import { PairUpNoLoginPage } from '../pages/pair-up-no-login/pair-up-no-login'
import { ChatBoxPage } from '../pages/chat-box/chat-box'


@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage,
		ProfileEditPage,
		PairUpPage,
		ChatPage,
		CalendarPage,
		ToDoListPage,
		PairUpNoLoginPage,
		ChatBoxPage 
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp, {
			tabsPlacement: 'top',
			tabsHideOnSubPages: false,
		}),
		AgmCoreModule.forRoot(),
		AngularFireModule.initializeApp(firebaseConfig.fire),
		ComponentsModule,
		NgxErrorsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule,
    	AngularFireDatabaseModule,
    	ProfilePageModule, 
    	CustomFormsModule, 
    	ReactiveFormsModule,
		PipesModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		SignupPage,
		ProfileEditPage,
		PairUpPage,
		ChatPage,
		CalendarPage,
		ToDoListPage,
		PairUpNoLoginPage,
		ChatBoxPage 
	],
	providers: [
		Config,
		StatusBar,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		AngularFireAuth,
		AuthService,
    	ToastController
	]
})
export class AppModule {
}
enableProdMode();
