import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { Observable } from 'rxjs';
import { OnInit } from "@angular/core";
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage implements OnInit {
    users: any;
    rooms = [];
    ref = firebase.database().ref('userList/');
    private auth: AuthService;

    constructor(public navCtrl: NavController, 
        public navParams: NavParams,
        private afAuth: AngularFireAuth,  
        auth: AuthService,
        private afDatabase: AngularFireDatabase) {
        this.auth = auth;
    }

    ngOnInit() {
        firebase.database().ref('userList').on('value', itemSnapshot => {
            this.users = [];
            itemSnapshot.forEach( itemSnap => {
                if (itemSnap.val().id != this.auth.uid)
                    this.users.push(itemSnap.val());
                return false;
            });
        });
    }
}
