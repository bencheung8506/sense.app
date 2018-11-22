import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
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
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { Content } from 'ionic-angular';

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
    profileEditForm: FormGroup;
    profileEditError: string;

    @ViewChild(Content) content: Content; 
    currentUser = {} as Profile;

    constructor(private afAuth: AngularFireAuth, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public auth: AuthService,
        fb: FormBuilder,
        private cd: ChangeDetectorRef,
        private toast: ToastController,
        private app: App,
        private afDatabase: AngularFireDatabase) {
        this.profileEditForm = fb.group({
            age: ['', Validators.compose([Validators.required])],
            isSEN: [ , ],
            ADHD: [ , ],
            PH: [ , ],
            SL: [ , ],
            AU: [ , ],
            VI: [ , ],
            SI: [ , ],
            HI: [ , ],
            MI: [ , ],
            publicProfile: [ , ],
        });
    }

    ngOnInit() {
        this.afAuth.authState.take(1).subscribe(data => {
            this.cd.detectChanges();
            this.profileDataNg = this.afDatabase.object(`profile/${data.uid}`);
            this.profileData = this.profileDataNg.valueChanges();
            this.profileDataNg.snapshotChanges().subscribe(action => {
                this.currentUser = action.payload.val();
                this.profileEditForm.controls['isSEN'].setValue(this.currentUser.isSEN);
                let isPublic = (this.currentUser.publicProfile == true);
                this.profileEditForm.controls['publicProfile'].setValue(isPublic);
            });
        });
    }

    editProfile() {
        let data = this.profileEditForm.value;

        data.ADHD = (data.ADHD == true);
        data.PH = (data.PH == true);
        data.SL = (data.SL == true);
        data.AU = (data.AU == true);
        data.VI = (data.VI == true);
        data.SI = (data.SI == true);
        data.HI = (data.HI == true);
        data.MI = (data.MI == true);
        let SENbool = data.ADHD || data.PH || data.SL || data.AU
            || data.VI || data.SI || data.HI || data.MI;
        if (!SENbool && data.isSEN) {
            this.profileEditError = 
                'You have selected "Yes" for "Is SEN", but you have not selected any SEN type.';
            this.content.scrollToTop();
            return;
        }

        data.valid = true;

        this.afAuth.authState.take(1).subscribe(auth => {
            this.afDatabase.object(`profile/${auth.uid}`).update(data)
                .then(() => {
                    this.profileEditError = '';
                    this.app.getRootNav().setRoot(HomePage);
                    this.toast.create({
                        message: `Profile edit is successful.`,
                        duration: 2000
                    }).present();
                },
                error => this.profileError = error.message);
        });
        console.log(this.currentUser);
    }
}
