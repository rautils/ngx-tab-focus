import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxTabFocusDemoComponent } from './ngx-tab-focus-demo.component';

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
