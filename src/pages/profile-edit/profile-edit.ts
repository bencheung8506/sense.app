import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from "../../model/profile.model";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { HomePage } from '../home/home.page';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ChangeDetectorRef, OnChanges, OnInit } from "@angular/core";
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage implements OnInit{
    profile = {} as Profile;
    profileError: string;
    profileData: Observable<any>;
    profileDataNg: AngularFireObject<Profile>;
    
    currentUser = {} as Profile;

    constructor(private afAuth: AngularFireAuth, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public auth: AuthService,
        private cd: ChangeDetectorRef,
        private toast: ToastController,
        private afDatabase: AngularFireDatabase) {
    }

    ngOnInit() {
        this.afAuth.authState.take(1).subscribe(data => {
            this.cd.detectChanges();
            this.profileDataNg = this.afDatabase.object(`profile/${data.uid}`);
            this.profileData = this.profileDataNg.valueChanges();
            this.profileDataNg.snapshotChanges().subscribe(action => {
                this.currentUser = action.payload.val();
            });
        });
    }

    editProfile() {
        this.afAuth.authState.take(1).subscribe(auth => {
            this.afDatabase.object(`profile/${auth.uid}`).update(this.profile)
                .then(() => {this.navCtrl.setRoot(HomePage);
                    this.toast.create({
                        message: `Profile edit is successful.`,
                        duration: 2000
                    }).present();
                },
                error => this.profileError = error.message);
        });
    }
}
