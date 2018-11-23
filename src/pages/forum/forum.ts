import { Component, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { PostCreatePage } from '../post-create/post-create';
import * as firebase from 'firebase';
import { PostPage } from '../post/post';

@IonicPage()
@Component({
	selector: 'page-forum',
	templateUrl: 'forum.html',
})
export class ForumPage implements OnChanges {
    private auth: AuthService;
    public navCtrl: NavController;
    allPosts = [];

	constructor(navCtrl: NavController, 
		public navParams: NavParams,
        auth: AuthService,
        private afDatabase: AngularFireDatabase,
        private afAuth: AngularFireAuth,) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        firebase.database().ref('/post/').orderByChild('timestamp_modified')
        .on('value', itemSnapshot => {
            this.allPosts = [];
            itemSnapshot.forEach( itemSnap => {
                let data = itemSnap.val();
                data.id = itemSnap.key;
                this.allPosts.push(data);
                return false;
            });
        });
	}

    createPost(){
        this.navCtrl.push(PostCreatePage);
    }

    ionViewWillLoad() {
        firebase.database().ref('/post/').orderByChild('timestamp_modified')
        .on('value', itemSnapshot => {
            this.allPosts = [];
            itemSnapshot.forEach( itemSnap => {
                let data = itemSnap.val();
                data.id = itemSnap.key;
                this.allPosts.push(data);
                return false;
            });
        });
    }

    ngOnChanges() {
        firebase.database().ref('/post/').orderByChild('timestamp_modified')
        .on('value', itemSnapshot => {
            itemSnapshot.forEach( itemSnap => {
                let data = itemSnap.val();
                data.id = itemSnap.key;
                this.allPosts.push(data);
                return false;
            });
        });
    }

    toPost(id) {
        this.navCtrl.push(PostPage, {id: id});
    }

}
