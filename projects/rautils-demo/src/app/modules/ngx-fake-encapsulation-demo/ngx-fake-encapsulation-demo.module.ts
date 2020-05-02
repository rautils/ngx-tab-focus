import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxFakeEncapsulationModule } from 'projects/ngx-fake-encapsulation/src';

import { NgxFakeEncapsulationDemoRoutingModule } from './ngx-fake-encapsulation-demo-routing.module';

import { NgxFakeEncapsulationDemoComponent } from './pages';
import { EncapsulationContainerDemoComponent } from './components';

@NgModule({
	declarations: [NgxFakeEncapsulationDemoComponent, EncapsulationContainerDemoComponent],
	imports: [
		CommonModule,
		NgxFakeEncapsulationDemoRoutingModule,
		NgxFakeEncapsulationModule,
	],
	exports: [],
})
export class NgxFakeEncapsulationDemoModule {}
