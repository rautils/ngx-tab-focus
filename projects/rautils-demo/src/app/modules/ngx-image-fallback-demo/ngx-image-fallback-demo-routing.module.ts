import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxImageFallbackDemoComponent } from './pages';

const routes: Routes = [
	{
		path: '',
		component: NgxImageFallbackDemoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NgxImageFallbackDemoRoutingModule {}
