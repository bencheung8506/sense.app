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
import { GoalEditPage } from '../goal-edit/goal-edit';
import { HomePage } from '../home/home.page';

@IonicPage()
@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {
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
            });
        });
    }

    toGoalEditPage() {
        this.navCtrl.push(GoalEditPage, {});
    }
}
