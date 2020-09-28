import { Injectable } from '@angular/core';

import { StorageMap } from '@ngx-pwa/local-storage';

import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const STORAGE_KEY = 'todoapp:data';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private PREFIX = 'DataService';
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line);
	}

	constructor(private storage: StorageMap) {
		this.log('DataService');
	}

	set(item) {
		this.log('set', JSON.stringify(item));

		this.storage.set(STORAGE_KEY, item).subscribe((data) => {
			this.log('set', JSON.stringify(data));
		});
	}

	getX(): any {
		this.storage.get(STORAGE_KEY).subscribe((data) => {
			return data; // undefined
		});
	}

	get(): any {
		this.log('get');

		this.storage.get(STORAGE_KEY, { type: 'string' }).subscribe({
			next: (data) => {
				this.log('get', 'return data: ' + JSON.stringify(data));
				return data;
			},
			error: (error) => { /* Called if data is invalid */ },
		});
	}

	getWithDefault(defaultItem) {
		this.storage.get(STORAGE_KEY).pipe(
			catchError(() => of(defaultItem)),
		).subscribe((result) => { });
	}

	del() {
		this.log('del');

		this.storage.delete(STORAGE_KEY).subscribe((data) => {
			this.log('del', JSON.stringify(data));
		});
	}

	clear() {
		this.log('clear');

		this.storage.clear().subscribe(() => {
			this.log('clear', 'done');
		});
	}

	keys(): Observable<string> {
		this.log('keys');

		return this.storage.keys();

		/*
		this.storage.keys().subscribe((keys) => {
			this.log('keys', 'done');

			return keys;
		});
		*/
	}

	size(): Observable<number> {
		this.log('size');

		this.log('size', JSON.stringify(this.storage.size));
		return this.storage.size;
	}


}
