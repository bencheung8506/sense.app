import { NavParams, PopoverController, ViewController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-popover-goal',
    templateUrl: 'popover-goal.html',
})
export class PopoverGoalPage implements OnInit {
    name = null;
    academicGoal = null;
    workGoal = null;
    socialGoal = null;
    lifestyleGoal = null;
 
    constructor(private navParams: NavParams, 
        private popoverController: PopoverController,
        public viewCtrl: ViewController) { }
 
    ngOnInit() {
        this.name = this.navParams.get('name');
        this.academicGoal = this.navParams.get('academicGoal');
        this.workGoal = this.navParams.get('workGoal');
        this.socialGoal = this.navParams.get('socialGoal');
        this.lifestyleGoal = this.navParams.get('lifestyleGoal');
    }

    close() {
        this.viewCtrl.dismiss();
    }
}
