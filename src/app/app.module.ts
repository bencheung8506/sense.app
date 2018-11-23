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
import { GoalEditPage } from '../pages/goal-edit/goal-edit';
import { GoalEditPageModule } from '../pages/goal-edit/goal-edit.module';
import { GoalPageModule } from '../pages/goal/goal.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
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
import { ChatBoxPage } from '../pages/chat-box/chat-box';
import { SettingTabPage } from '../pages/setting-tab/setting-tab';
import { SettingTabPageModule } from '../pages/setting-tab/setting-tab.module';
import { PopoverProfilePageModule } from '../pages/popover-profile/popover-profile.module';
import { PopoverGoalPageModule } from '../pages/popover-goal/popover-goal.module'
import { NgCalendarModule } from 'ionic2-calendar';
import { PostPageModule } from '../pages/post/post.module';
import { PostCreatePageModule } from '../pages/post-create/post-create.module';
import { ForumPageModule } from '../pages/forum/forum.module';
import { CommentCreatePageModule } from '../pages/comment-create/comment-create.module';

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
		ChatBoxPage,
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp, {
			tabsPlacement: 'top',
			tabsHideOnSubPages: false,
			scrollAssist: true,
			autoFocusAssist: true
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
		PipesModule,
		GoalPageModule,
		SettingTabPageModule,
		GoalEditPageModule,
		PopoverProfilePageModule,
		PopoverGoalPageModule,
		NgCalendarModule,
		ForumPageModule,
		PostPageModule,
		PostCreatePageModule,
		CommentCreatePageModule
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
		ChatBoxPage,
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
