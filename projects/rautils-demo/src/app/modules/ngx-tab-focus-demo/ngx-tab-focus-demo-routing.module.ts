import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxTabFocusDemoComponent } from './pages';

const routes: Routes = [
	{
		path: '',
		component: NgxTabFocusDemoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NgxTabFocusDemoRoutingModule {}
