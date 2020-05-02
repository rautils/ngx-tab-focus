import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxFakeEncapsulationDemoComponent } from './pages';

const routes: Routes = [
	{
		path: '',
		component: NgxFakeEncapsulationDemoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NgxFakeEncapsulationDemoRoutingModule {}
