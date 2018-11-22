import { Component, ViewChild, NgModule, OnChanges, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Message } from '../../model/message.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { Content, List } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Profile } from "../../model/profile.model";
import { PopoverProfilePage } from '../popover-profile/popover-profile'

@IonicPage()
@Component({
    selector: 'page-chat-box',
    templateUrl: 'chat-box.html',
})
export class ChatBoxPage implements OnChanges {
    nameTo: string;
    idTo: string;
    private auth: AuthService;
    chatOut = [];
    chatIn = [];
    @ViewChild('msgInput') msgInput;
    @ViewChild(Content) content: Content; 
    chatForm: FormGroup;
    allChat = [];
    idFirst: string;
    idLast: string;
    roomKey: string;

    chatterNg: any;
    chatter = {} as Profile;

    constructor(public navCtrl: NavController, 
        public navParams: NavParams,  
        auth: AuthService,
        fb: FormBuilder,
        private afDatabase: AngularFireDatabase,
        private alertCtrl: AlertController,
        private afAuth: AngularFireAuth,
        private popoverController: PopoverController) {
        
        this.nameTo = navParams.get('nameTo');
        this.idTo = navParams.get('idTo');
        this.auth = auth;
        this.chatForm = fb.group({
            message: ['', ]
        });
        if (this.auth.uid < this.idTo){
            this.idFirst = this.auth.uid;
            this.idLast = this.idTo;
        }
        else {
            this.idFirst = this.idTo;
            this.idLast = this.auth.uid;    
        }

        this.roomKey = '/chat/'+this.idFirst+'&and&'+this.idLast;
        firebase.database().ref(this.roomKey).orderByChild('timestamp')
        .on('value', itemSnapshot => {
            this.allChat = [];
            itemSnapshot.forEach( itemSnap => {
                this.allChat.push(itemSnap.val());
                return false;
            });
        });

        let profileKey = '/profile/'+this.idTo;
        this.chatterNg = this.afDatabase.object(profileKey);
        this.chatterNg.snapshotChanges().subscribe(action => {
            this.chatter = action.payload.val();
        });
    }

    ionViewDidEnter() {
        this.content.scrollToBottom();
    }

    ionViewWillLoad() {
        firebase.database().ref(this.roomKey).orderByChild('timestamp')
        .on('value', itemSnapshot => {
            this.allChat = [];
            itemSnapshot.forEach( itemSnap => {
                this.allChat.push(itemSnap.val());
                return false;
            });
        });
        this.content.scrollToBottom();
    }

    ngOnChanges() {
        firebase.database().ref(this.roomKey).orderByChild('timestamp')
        .on('value', itemSnapshot => {
            this.allChat = [];
            itemSnapshot.forEach( itemSnap => {
                this.allChat.push(itemSnap.val());
                return false;
            });
        });
        this.content.scrollToBottom();
    }

    sendMessage() {
        let data = this.chatForm.value;
        data.timestamp = new Date().toISOString();
        data.sender = this.auth.name;
        this.afAuth.authState.take(1).subscribe(auth => {
            this.afDatabase.list(this.roomKey).push(data);
        });
        this.msgInput.value = '';
        setTimeout(() => {
            this.content.scrollToBottom(100);
        }, 150);
    }

    showGoal() {
        let alert = this.alertCtrl.create({
            title: 'Goal',
            subTitle: this.chatter.publicGoal ? 'Public' : 'Private',
            buttons: ['Dismiss']
            });
        alert.present();
    }

    async showProfile(ev: Event) {
        let SENarr = [this.chatter.ADHD, this.chatter.PH, 
                this.chatter.SL, this.chatter.AU,
                this.chatter.VI, this.chatter.SI,
                this.chatter.HI, this.chatter.MI];
        let SENname = ["ADHD", "PH", "SL", "AU", 
            "VI", "SI", "HI", "MI"];
        let SENnullState = 1;
        let SENlist = '';
        if (this.chatter.isSEN == false)
            SENlist = "Not applicable";
        else {
            for (var k in SENarr){
                if (SENarr[k] != null) {
                    SENnullState = 0;
                }
                if (SENarr[k] == true) {
                    if (SENlist != '')
                        SENlist += ', ';
                    SENlist += SENname[k];
                }
            }
            if (SENlist == ''){
                if (SENnullState == 1){
                    SENlist = 'Not stated';
                }
                else{
                    SENlist = 'None';
                }
            }
        }

        const popover = await this.popoverController.create(
            PopoverProfilePage, {
                name: this.nameTo,
                age: this.chatter.age,
                isSEN: this.chatter.isSEN,
                SENlist: SENlist,
            });
        await popover.present();
    }
}