import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { GoalPage } from '../goal/goal';
import { HomePage } from '../home/home.page';

@IonicPage()
@Component({
  selector: 'page-setting-tab',
  templateUrl: 'setting-tab.html',
})
export class SettingTabPage {
    tabProfile = ProfilePage;
    tabGoal = GoalPage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
    }
}
