import { Component, ViewChild, NgModule, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Message } from '../../model/message.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';

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
    chatForm: FormGroup;
    allChat = [];

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
        firebase.database().ref('/chat/'+this.auth.uid+'/'+this.idTo).orderByChild('timestamp').on('value', itemSnapshot => {
            this.chatOut = [];
            itemSnapshot.forEach( itemSnap => {
                this.chatOut.push(itemSnap.val());
                return false;
            });
        });
        firebase.database().ref('/chat/'+this.idTo+'/'+this.auth.uid).orderByChild('timestamp').on('value', itemSnapshot => {
            this.chatIn = [];
            itemSnapshot.forEach( itemSnap => {
                this.chatOut.push(itemSnap.val());
                return false;
            });
            let tempOut = this.chatOut;
            this.allChat = tempOut.concat(this.chatIn)
            .sort(function(o1,o2){
                let d1 = o1['timestamp'];
                let d2 = o2['timestamp'];
                let t1 = new Date(d1);
                let t2 = new Date(d2);
                return t1 - t2;
            });
            console.log('out',this.chatOut,'in', this.chatIn);
        });
    }

    ionViewWillLoad() {
        firebase.database().ref('/chat/'+this.auth.uid+'/'+this.idTo).orderByChild('timestamp').on('value', itemSnapshot => {
            this.chatOut = [];
            itemSnapshot.forEach( itemSnap => {
                this.chatOut.push(itemSnap.val());
                return false;
            });
        });
        firebase.database().ref('/chat/'+this.idTo+'/'+this.auth.uid).orderByChild('timestamp').on('value', itemSnapshot => {
            this.chatIn = [];
            itemSnapshot.forEach( itemSnap => {
                this.chatOut.push(itemSnap.val());
                return false;
            });
            let tempOut = this.chatOut;
            this.allChat = tempOut.concat(this.chatIn)
            .sort(function(o1,o2){
                let d1 = o1['timestamp'];
                let d2 = o2['timestamp'];
                let t1 = new Date(d1);
                let t2 = new Date(d2);
                return t1 - t2;
            });
            console.log('out',this.chatOut,'in', this.chatIn);
        });
    }

    ngOnChanges() {
        firebase.database().ref('/chat/'+this.auth.uid+'/'+this.idTo).orderByChild('timestamp').on('value', itemSnapshot => {
            this.chatOut = [];
            itemSnapshot.forEach( itemSnap => {
                this.chatOut.push(itemSnap.val());
                return false;
            });
        });
        firebase.database().ref('/chat/'+this.idTo+'/'+this.auth.uid).orderByChild('timestamp').on('value', itemSnapshot => {
            this.chatIn = [];
            itemSnapshot.forEach( itemSnap => {
                this.chatOut.push(itemSnap.val());
                return false;
            });
            let tempOut = this.chatOut;
            this.allChat = tempOut.concat(this.chatIn)
            .sort(function(o1,o2){
                let d1 = o1['timestamp'];
                let d2 = o2['timestamp'];
                let t1 = new Date(d1);
                let t2 = new Date(d2);
                return t1 - t2;
            });
            console.log('out',this.chatOut,'in', this.chatIn);
        });
    }

    sendMessage() {
        let data = this.chatForm.value;
        data.timestamp = new Date().toISOString();
        data.sender = this.auth.name;
        this.afAuth.authState.take(1).subscribe(auth => {
            this.afDatabase.list(`chat/${auth.uid}/${this.idTo}`).push(data)
        });
        this.msgInput.value = '';
    }
}