import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'ngx-tab-focus',
		loadChildren: () =>
			import('./modules/ngx-tab-focus-demo/ngx-tab-focus-demo.module').then(
				(m) => m.NgxTabFocusDemoModule
			),
	},
	{
		path: 'ngx-image-fallback',
		loadChildren: () =>
			import('./modules/ngx-image-fallback-demo/ngx-image-fallback-demo.module').then(
				(m) => m.NgxImageFallbackDemoModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
