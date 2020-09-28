import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.page.component';
import { AboutPageComponent } from './pages/about/about.page.component';
import { InsidePageComponent } from './pages/inside/inside.page.component';
import { StorageModule } from '@ngx-pwa/local-storage';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		AboutPageComponent,
		InsidePageComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		StorageModule.forRoot({ IDBNoWrap: true })
	],
	providers: [
		/* { provide: APP_BASE_HREF, useValue: '/' } */
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	private PREFIX = 'AppModule';
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line);
	}

	constructor() {
		this.log('constructor');
	}
}
