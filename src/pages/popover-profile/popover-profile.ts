import { NavParams, PopoverController, ViewController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
 
@Component({
    selector: 'app-popover-profile',
	templateUrl: 'popover-profile.html',
})
export class PopoverProfilePage implements OnInit {
	name = null;
    age = null;
    isSEN = null;
    SENlist = null;
 
	constructor(private navParams: NavParams, 
        private popoverController: PopoverController,
        public viewCtrl: ViewController) { }
 
	ngOnInit() {
		this.name = this.navParams.get('name');
        this.age = this.navParams.get('age');
        this.isSEN = this.navParams.get('isSEN');
        this.SENlist = this.navParams.get('SENlist');
	}

    close() {
        this.viewCtrl.dismiss();
    }
}