import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyDqunC_avNOdhIRF2EZ1uL7Qwwi0BSB9xg",
        authDomain: "newproj4-ebeac.firebaseapp.com",
        databaseURL: "https://newproj4-ebeac.firebaseio.com",
        projectId: "newproj4-ebeac",
        storageBucket: "newproj4-ebeac.appspot.com",
        messagingSenderId: "86191986132"
	}
};
