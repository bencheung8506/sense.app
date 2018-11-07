import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { Observable } from 'rxjs';
import { OnInit, OnChanges } from "@angular/core";
import { AuthService } from '../../services/auth.service';
import { ToastController } from 'ionic-angular';
import { ChatBoxPage } from '../chat-box/chat-box';

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage implements OnChanges {
    users: any;
    rooms = [];
    ref = firebase.database().ref('/userList/');
    private auth: AuthService;

    constructor(public navCtrl: NavController, 
        public navParams: NavParams,
        private afAuth: AngularFireAuth,  
        auth: AuthService,
        private afDatabase: AngularFireDatabase,
        private toast: ToastController) {
        this.auth = auth;
        this.ref.orderByChild('name')
        .on('value', itemSnapshot => {
            this.users = [];
            itemSnapshot.forEach( itemSnap => {
                if (itemSnap.val().id != this.auth.uid)
                    this.users.push(itemSnap.val());
                return false;
            });
        });
    }

    ngOnChanges() {
        if (this.users == null){
            this.ref.on('value', itemSnapshot => {
                this.users = [];
                itemSnapshot.forEach( itemSnap => {
                    if (itemSnap.val().id != this.auth.uid)
                        this.users.push(itemSnap.val());
                    return false;
                });
            });
        }
    }

    usersReload() {
        this.ref.on('value', itemSnapshot => {
            this.users = [];
            itemSnapshot.forEach( itemSnap => {
                if (itemSnap.val().id != this.auth.uid)
                    this.users.push(itemSnap.val());
                return false;
            });
            this.toast.create({
                message: `List of users reloaded.`,
                duration: 2000
            }).present();
        });
    }

    toChat(chatter) {
        this.navCtrl.push(ChatBoxPage, {
            idTo: chatter.id,
            nameTo: chatter.name,
        });
    }
}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};