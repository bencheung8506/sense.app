import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-to-do-list',
  templateUrl: 'to-do-list.html',
})
export class ToDoListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
