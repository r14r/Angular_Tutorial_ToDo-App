import { Component, OnInit } from '@angular/core';

import { trigger, style, animate, transition, keyframes, state, query, stagger } from '@angular/animations';
import { ToDoModell } from 'src/app/models/todo/todo-modell';

import { DataService } from 'src/app/services/data/data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.component.html',
	styleUrls: ['./home.page.component.scss'],
	animations: [
		trigger('moveInLeft', [
			transition('void=> *', [
				style({ transform: 'translateX(300px)' }),
				animate(400, keyframes([
					style({ transform: 'translateX(300px)' }),
					style({ transform: 'translateX(0)' })
				]))
			]),
			transition('*=>void', [
				style({ transform: 'translateX(0px)' }),
				animate(400, keyframes([
					style({ transform: 'translateX(0px)' }),
					style({ transform: 'translateX(300px)' })
				]))
			])
		]),
		trigger('moveInTeaseOut', [
			transition('void=> *', [
				style({ transform: 'translateX(300px)' }),
				animate(200, keyframes([
					style({ transform: 'translateX(300px)' }),
					style({ transform: 'translateX(0)' })
				]))
			]),
			transition(':leave', [
				animate('1s', style({ opacity: 0 }))
			])
		]),
		trigger('insertRemoveTrigger', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('1s', style({ opacity: 1 })),
			]),
			transition(':leave', [
				animate('1s', style({ opacity: 0 }))
			])
		]),
		trigger('flyInOut', [
			state('in', style({ transform: 'translateX(0)' })),
			transition('void => *', [
				style({ transform: 'translateX(-100%)' }),
				animate(400)
			]),
			transition('* => void', [
				animate(400, style({ transform: 'translateX(100%)' }))
			])
		]),
		trigger('pageAnimations', [
			transition(':enter', [
				query('.hero, form', [
					style({ opacity: 0, transform: 'translateY(-100px)' }),
					stagger(-30, [
						animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
					])
				])
			])
		]),
		trigger('filterAnimation', [
			transition(':enter, * => 0, * => -1', []),
			transition(':increment', [
				query(':enter', [
					style({ opacity: 0, width: '0px' }),
					stagger(400, [
						animate('300ms ease-out', style({ opacity: 1, width: '*' })),
					]),
				], { optional: true })
			]),
			transition(':decrement', [
				query(':leave', [
					stagger(400, [
						animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
					]),
				])
			]),
		]),
	]
})
export class HomePageComponent implements OnInit {

	title = 'App';

	todoArray = [];

	private PREFIX = 'HomePageComponent';
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line);
	}

	constructor(private dataService: DataService) {
		this.log('constructor');
	}

	ngOnInit() {
		this.log('ngOnInit');

		this.todoArray = this.dataService.get() || [];

		this.log('ngOnInit', 'get all: ' + JSON.stringify(this.todoArray));
	}



	addItem(name, desc = '-') {
		this.log('addItem');

		const model = new ToDoModell(name, desc);

		this.todoArray.push(model);

		this.dataService.set(this.todoArray);

		this.log('addItem', JSON.stringify(this.todoArray));

		/*
		this.dataService.keys().subscribe(data => { this.log('addItem', 'keys=' + data); });
		*/

	}

	deleteItem(item: string) {
		this.log('deleteItem');

		for (let i = 0; i <= this.todoArray.length; i++) {
			if (item === this.todoArray[i]) {
				this.todoArray.splice(i, 1);
			}
		}

		this.dataService.set(this.todoArray);
	}

}
