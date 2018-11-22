import { Component, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
	selector: 'page-calendar',
	templateUrl: 'calendar.html',
})
export class CalendarPage implements OnChanges {
	eventSource = [];
	viewTitle: string;
	selectedDay = new Date();
    private auth: AuthService;
    calendarKey: string;

	calendar = {
		mode: 'month',
		currentDate: new Date()
	};

	constructor(public navCtrl: NavController, 
		private modalCtrl: ModalController, 
		private alertCtrl: AlertController,
        auth: AuthService,
        private afDatabase: AngularFireDatabase,
        private afAuth: AngularFireAuth,) {
            this.auth = auth;
            this.calendarKey = '/calendar/' + this.auth.uid;

            firebase.database().ref(this.calendarKey)
            .on('value', itemSnapshot => {
                this.eventSource = [];
                itemSnapshot.forEach( itemSnap => {
                    let raw = itemSnap.val();
                    let data = {
                        title: raw.title,
                        startTime: new Date(raw.startTime),
                        endTime: new Date(raw.endTime),
                        allDay: raw.allDay,
                        id: itemSnap.key
                    }

                    this.eventSource.push(data);
                    return false;
                });
            });
	}

    ionViewWillLoad() {
        firebase.database().ref(this.calendarKey)
        .on('value', itemSnapshot => {
            this.eventSource = [];
            itemSnapshot.forEach( itemSnap => {
                let raw = itemSnap.val();
                let data = {
                    title: raw.title,
                    startTime: new Date(raw.startTime),
                    endTime: new Date(raw.endTime),
                    allDay: raw.allDay,
                    id: itemSnap.key
                }

                this.eventSource.push(data);
                return false;
            });
        });
    }

    ngOnChanges() {
        firebase.database().ref(this.calendarKey)
        .on('value', itemSnapshot => {
            this.eventSource = [];
            itemSnapshot.forEach( itemSnap => {
                let raw = itemSnap.val();
                let data = {
                    title: raw.title,
                    startTime: new Date(raw.startTime),
                    endTime: new Date(raw.endTime),
                    allDay: raw.allDay,
                    id: itemSnap.key
                }

                this.eventSource.push(data);
                return false;
            });
        });
    }

	addEvent() {
		let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
		modal.present();
		modal.onDidDismiss(data => {
			if (data) {
				let eventData = data;
 
				eventData.startTime = new Date(data.startTime);
				eventData.endTime = new Date(data.endTime);

				let events = this.eventSource;
                let dataSaving = {
                    title: eventData.title,
                    startTime: eventData.startTime.toISOString(),
                    endTime: eventData.endTime.toISOString(),
                    allDay: eventData.allDay
                }

                this.afAuth.authState.take(1).subscribe(auth => {
                    this.afDatabase.list(this.calendarKey).push(dataSaving);
                }); 
			}
		});
	}
 
	onViewTitleChanged(title) {
		this.viewTitle = title;
	}
 
	onEventSelected(event) {
        let subtitle = '';
        if (!event.allDay){
            let start = moment(event.startTime).format('LLLL');
            let end = moment(event.endTime).format('LLLL');
            subtitle = 'From: ' + start + '<br>To: ' + end;
        }	
        else {
            let start = moment(event.startTime).format('LL');
            let end = moment(event.endTime).format('LL');
            subtitle = 'From: ' + start + '<br>To: ' + end + '<br><br> All Day';
        }	
		
		let alert = this.alertCtrl.create({
			title: '' + event.title,
			subTitle: subtitle,
			buttons: [
            {text:'Delete',
            handler: () => {
                this.afDatabase.list(this.calendarKey).remove(event.id);
            }}, 
            {text:'OK'}]
		})
		alert.present();
	}
 
	onTimeSelected(ev) {
		this.selectedDay = ev.selectedTime;
	}
}
