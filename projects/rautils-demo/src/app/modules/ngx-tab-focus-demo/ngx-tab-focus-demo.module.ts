import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTabFocusModule } from 'projects/ngx-tab-focus/src';

import { NgxTabFocusDemoRoutingModule } from './ngx-tab-focus-demo-routing.module';

import { NgxTabFocusDemoComponent } from './pages';

@NgModule({
	declarations: [NgxTabFocusDemoComponent],
	imports: [NgxTabFocusDemoRoutingModule, NgxTabFocusModule],
	exports: [NgxTabFocusDemoComponent],
})
export class NgxTabFocusDemoModule {}
