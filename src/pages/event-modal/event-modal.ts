import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
 
@IonicPage()
@Component({
	selector: 'page-event-modal',
	templateUrl: 'event-modal.html',
})
export class EventModalPage { 
	event = { title: '',
        startTime: new Date().toISOString(), 
		endTime: new Date().toISOString(), 
		allDay: false };
	minDate = new Date().toISOString();
    maxDate: any;
 
	constructor(public navCtrl: NavController, 
        private navParams: NavParams, 
        public viewCtrl: ViewController,
        public alertCtrl: AlertController) {
		let preselectedDate = moment(this.navParams.get('selectedDay')).format();
		this.event.startTime = preselectedDate;
		this.event.endTime = preselectedDate;

        let maxDateRaw = new Date(new Date().getUTCFullYear() + 1, 11, 31, 23, 59, 59, 999);
        this.maxDate = maxDateRaw.toISOString();
	}
 
	cancel() {
		this.viewCtrl.dismiss();
	}
 
	save() {
        this.event.title = this.event.title.trim();
        if (!this.event.allDay && 
            (this.event.startTime > this.event.endTime)){
            this.alertCtrl.create({
                title: 'Error',
                subTitle: 'The input time range is invalid.',
                buttons: ['Confirm']
            }).present();
        }
        else if (this.event.title == '') {
            this.alertCtrl.create({
                title: 'Error',
                subTitle: 'The title is blank.',
                buttons: ['Confirm']
            }).present();
        }
        else if (this.event.allDay) {
            let sDate =  new Date(this.event.startTime);
            this.event.startTime = new Date(
                sDate.getUTCFullYear(), sDate.getUTCMonth(), 
                sDate.getUTCDate(), 
                12, 0, 0, 0).toISOString();
            let eDate =  new Date(this.event.endTime);
            this.event.endTime = new Date(
                eDate.getUTCFullYear(), eDate.getUTCMonth(), 
                eDate.getUTCDate(), 
                12, 0, 0, 0).toISOString();
            this.viewCtrl.dismiss(this.event);
        }
        else{
    		this.viewCtrl.dismiss(this.event);
        }
	}
 
}