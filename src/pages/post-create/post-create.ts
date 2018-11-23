import { Component, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Content } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-post-create',
	templateUrl: 'post-create.html',
})
export class PostCreatePage implements OnChanges {
    postCreateForm: FormGroup;
    @ViewChild(Content) content: Content;

	constructor(private afAuth: AngularFireAuth, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public auth: AuthService, 
        private alertCtrl: AlertController,
        fb: FormBuilder,
        private afDatabase: AngularFireDatabase) {
            this.postCreateForm = fb.group({
                title: ['', ],
                content: ['', ],
                timestamp_created: ['', ],
                timestamp_modified: ['', ],
                creatorId: [this.auth.uid, ],
                creatorName: [this.auth.name, ],
                comment: [0, ]
            })
	}

    ngOnChanges() {
        this.content.scrollToTop();
    }

    submitPost() {
        let post = this.postCreateForm.value;
        if (post.title.trim() == ''){
            this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Title is left blank.',
                buttons: ['Dismiss'],
            }).present();
        }
        else if (post.content.trim() == ''){
            this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Content is left blank.',
                buttons: ['Dismiss'],
            }).present();
        }
        else {
            post.timestamp_created = new Date().toISOString();
            post.timestamp_modified = post.timestamp_created;
            // console.log(post)
            this.afAuth.authState.take(1).subscribe(auth => {
                this.afDatabase.list('/post/').push(post);
            });
            this.navCtrl.pop();
        }
    }

}
