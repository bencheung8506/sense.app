import { Component, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Content } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-comment-create',
	templateUrl: 'comment-create.html',
})
export class CommentCreatePage implements OnChanges {
    id: string;
    commentNum: number;
    commentCreateForm: FormGroup;
    @ViewChild(Content) content: Content;

	constructor(private afAuth: AngularFireAuth, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public auth: AuthService, 
        private alertCtrl: AlertController,
        fb: FormBuilder,
        private afDatabase: AngularFireDatabase) {
            this.id = this.navParams.get('id');
            this.commentNum = this.navParams.get('commentNum');
            this.commentCreateForm = fb.group({
                content: ['', ],
                timestamp: ['', ],
                id: [this.auth.uid, ],
                name: [this.auth.name, ]
            })
	}

    ngOnChanges() {
        this.content.scrollToTop();
    }

    submitComment() {
        let comment = this.commentCreateForm.value;
        if (comment.content.trim() == ''){
            this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Comment is left blank.',
                buttons: ['Dismiss'],
            }).present();
        }
        else {
            let time = new Date().toISOString();
            comment.timestamp = time;
            let commentKey = '/comment/' + this.id;
            this.afAuth.authState.take(1).subscribe(auth => {
                this.afDatabase.list(commentKey).push(comment);
                let postID = '/post/' + this.id;
                this.afDatabase.object(postID).update({
                    comment: this.commentNum + 1,
                    timestamp_modified: time
                });
            });
            this.navCtrl.pop();
        }
    }

}
