import { Component } from '@angular/core';

@Component({
	selector: 'app-root', templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'App';

	todoArray = [];

	private PREFIX = 'AppComponent';
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line);
	}

	constructor() {
		this.log('constructor');
	}

}
