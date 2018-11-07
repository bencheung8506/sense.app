import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { ChatPage } from '../chat/chat';
import { ToDoListPage } from '../to-do-list/to-do-list';


@IonicPage()
@Component({
    selector: 'page-pair-up',
    templateUrl: 'pair-up.html',
})
export class PairUpPage {
    tabCalendar = CalendarPage;
    tabChat = ChatPage;
    tabToDoList = ToDoListPage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}
