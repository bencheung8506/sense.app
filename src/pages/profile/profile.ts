import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from "../../model/profile.model";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ProfileEditPage } from '../profile-edit/profile-edit';
import { HomePage } from '../home/home.page'

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
    profile = {} as Profile;
    profileError: string;
    profileData: Observable<any>;
    profileDataNg: AngularFireObject<Profile>;
    
    currentUser = {} as Profile;
    SENlist = '';

    constructor(private afAuth: AngularFireAuth, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public auth: AuthService,
        private afDatabase: AngularFireDatabase) {
    }

    ionViewWillLoad() {
        this.afAuth.authState.take(1).subscribe(data => {
            this.profileDataNg = this.afDatabase.object(`profile/${data.uid}`);
            this.profileData = this.profileDataNg.valueChanges();
            this.profileDataNg.snapshotChanges().subscribe(action => {
                this.currentUser = action.payload.val();

            let SENarr = [this.currentUser.ADHD, this.currentUser.PH, 
                this.currentUser.SL, this.currentUser.AU,
                this.currentUser.VI, this.currentUser.SI,
                this.currentUser.HI, this.currentUser.MI];
            let SENname = ["ADHD", "PH", "SL", "AU", 
                "VI", "SI", "HI", "MI"];
            let SENnullState = 1;
            if (this.currentUser.isSEN == false)
                this.SENlist = "Not applicable";
            else {
                for (var k in SENarr){
                    if (SENarr[k] != null) {
                        SENnullState = 0;
                    }
                    if (SENarr[k] == true) {
                        if (this.SENlist != '')
                            this.SENlist += ', ';
                        this.SENlist += SENname[k];
                    }
                }
                if (this.SENlist == ''){
                    if (SENnullState == 1){
                        this.SENlist = 'Not stated';
                    }
                    else{
                        this.SENlist = 'None';
                    }
                }
            }
            });
        });
    }

    toProfileEditPage() {
        this.navCtrl.push(ProfileEditPage, {});
    }

    editProfile() {
        this.afAuth.authState.take(1).subscribe(auth => {
            this.afDatabase.object(`profile/${auth.uid}`).update(this.profile)
                .then(() => this.navCtrl.setRoot(HomePage),
                error => this.profileError = error.message);
        })
    }
}
