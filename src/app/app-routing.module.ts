import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home/home.page.component';
import { InsidePageComponent } from './pages/inside/inside.page.component';
import { AboutPageComponent } from './pages/about/about.page.component';


const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'demo', component: HomePageComponent },
	{ path: 'inside', component: InsidePageComponent },
	{ path: 'about', component: AboutPageComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes /*, { enableTracing: true } ) */)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	private PREFIX = 'AppRoutingModule';
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line);
	}

	constructor() {
		this.log('constructor');
	}
}
