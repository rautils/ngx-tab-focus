import { NgModule } from '@angular/core';

import { NgxImageFallbackModule } from 'projects/ngx-image-fallback/src';

import { NgxImageFallbackDemoRoutingModule } from './ngx-image-fallback-demo-routing.module';

import { NgxImageFallbackDemoComponent } from './pages';

@NgModule({
	declarations: [NgxImageFallbackDemoComponent],
	imports: [NgxImageFallbackDemoRoutingModule, NgxImageFallbackModule],
	exports: [],
})
export class NgxImageFallbackDemoModule {}
