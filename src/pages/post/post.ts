import { Component, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { Post } from '../../model/post.model';
import { Comment } from '../../model/comment.model';
import { CommentCreatePage } from '../comment-create/comment-create'
import * as firebase from 'firebase';

@IonicPage()
@Component({
	selector: 'page-post',
	templateUrl: 'post.html',
})
export class PostPage implements OnChanges {
    id: string;
    postNg: any;
    post = {} as Post;
    public navCtrl: NavController;
    allComments = [];

	constructor(navCtrl: NavController, 
        public navParams: NavParams,
        auth: AuthService,
        private afDatabase: AngularFireDatabase,
        private afAuth: AngularFireAuth,) {
            this.navCtrl = navCtrl;
            this.id = this.navParams.get('id');

            let postID = '/post/' + this.id;
            this.postNg = this.afDatabase.object(postID)
            this.postNg.snapshotChanges().subscribe(action => {
                this.post = action.payload.val();
            });

            let commentID = '/comment/' + this.id;
            firebase.database().ref(commentID).orderByChild('timestamp')
            .on('value', itemSnapshot => {
                this.allComments = [];
                itemSnapshot.forEach( itemSnap => {
                    this.allComments.push(itemSnap.val());
                    return false;
                });
            });
	}

    leaveComment(id) {
        this.navCtrl.push(CommentCreatePage, {
            id: id,
            commentNum: this.post.comment
        });
    }

    ionViewWillLoad() {
        let postID = '/post/' + this.id;
        this.postNg = this.afDatabase.object(postID)
        this.postNg.snapshotChanges().subscribe(action => {
            this.post = action.payload.val();
        });

        let commentID = '/comment/' + this.id;
        firebase.database().ref(commentID).orderByChild('timestamp')
        .on('value', itemSnapshot => {
            this.allComments = [];
            itemSnapshot.forEach( itemSnap => {
                this.allComments.push(itemSnap.val());
                return false;
            });
        });
    }

    ngOnChanges() {
        let commentID = '/comment/' + this.id;
        firebase.database().ref(commentID).orderByChild('timestamp')
        .on('value', itemSnapshot => {
            this.allComments = [];
            itemSnapshot.forEach( itemSnap => {
                this.allComments.push(itemSnap.val());
                return false;
            });
        });
    }

}
