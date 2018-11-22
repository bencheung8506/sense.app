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
    selector: 'page-goal-edit',
    templateUrl: 'goal-edit.html',
})
export class GoalEditPage implements OnInit{
    profile = {} as Profile;
    profileError: string;
    profileData: Observable<any>;
    profileDataNg: AngularFireObject<Profile>;
    goalEditForm: FormGroup;
    profileEditError: string;

    @ViewChild(Content) content: Content; 
    currentUser = {} as Profile;

    constructor(private afAuth: AngularFireAuth, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public auth: AuthService,
        fb: FormBuilder,
        private app: App,
        private cd: ChangeDetectorRef,
        private toast: ToastController,
        private afDatabase: AngularFireDatabase) {
        this.goalEditForm = fb.group({
            academicGoal: ['' , ],
            workGoal: ['' , ],
            socialGoal: ['' , ],
            lifestyleGoal: ['' , ],
            publicGoal: [ , ],
        });
    }

    ngOnInit() {
        this.afAuth.authState.take(1).subscribe(data => {
            this.cd.detectChanges();
            this.profileDataNg = this.afDatabase.object(`profile/${data.uid}`);
            this.profileData = this.profileDataNg.valueChanges();
            this.profileDataNg.snapshotChanges().subscribe(action => {
                this.currentUser = action.payload.val();
                let isPublic = (this.currentUser.publicGoal == true);
                this.goalEditForm.controls['publicGoal'].setValue(isPublic);
            });
        });
    }

    editProfile() {
        let data = this.goalEditForm.value;

        if (data.academicGoal == null)
            data.academicGoal = '';
        if (data.workGoal == null)
            data.workGoal = '';
        if (data.socialGoal == null)
            data.socialGoal = '';
        if (data.lifeStlyeGoal == null)
            data.lifeStlyeGoal = '';
        
        data.academicGoal = data.academicGoal.trimEnd();
        data.workGoal = data.workGoal.trimEnd();
        data.socialGoal = data.socialGoal.trimEnd();
        data.lifeStlyeGoal = data.lifeStlyeGoal.trimEnd();
        // data.valid = true;

        this.afAuth.authState.take(1).subscribe(auth => {
            this.afDatabase.object(`profile/${auth.uid}`).update(data)
                .then(() => {
                    this.profileEditError = '';
                    this.app.getRootNav().setRoot(HomePage);
                    this.toast.create({
                        message: `Goal edit is successful.`,
                        duration: 2000
                    }).present();
                },
                error => this.profileError = error.message);
        });
        console.log(this.currentUser);
    }
}
