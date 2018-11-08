import { Component, ViewChild, NgModule, OnChanges, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Message } from '../../model/message.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { Content, List } from 'ionic-angular';

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

    constructor(public navCtrl: NavController, 
        public navParams: NavParams,  
        auth: AuthService,
        fb: FormBuilder,
        private afDatabase: AngularFireDatabase,
        private afAuth: AngularFireAuth) {
        
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
        }, 200);
    }
}