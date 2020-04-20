import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxTabFocusDemoComponent } from './modules/ngx-tab-focus-demo/ngx-tab-focus-demo.component';

const routes: Routes = [
	{
		path: 'ngx-tab-focus',
		component: NgxTabFocusDemoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
