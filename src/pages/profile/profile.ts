import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from "../../model/profile.model";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { HomePage } from '../home/home.page';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
    profile = {} as Profile;
    profileError: string;
    profileData: Observable<any>;
    // profileDataNg: AngularFireObject<Profile>;

    constructor(private afAuth: AngularFireAuth, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public auth: AuthService,
        private afDatabase: AngularFireDatabase) {
    }

    editProfile() {
        this.afAuth.authState.take(1).subscribe(auth => {
            this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
                .then(() => this.navCtrl.setRoot(HomePage),
                error => this.profileError = error.message);
        })
    }

    ionViewWillLoad() {
        this.afAuth.authState.take(1).subscribe(data => {
            this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
            // this.profileDataNg = this.afDatabase.object(`profile/${data.uid}`);
        })
    }

    SENlist() {
        let test = [this.profileData];
        return "hello";
    }
}
