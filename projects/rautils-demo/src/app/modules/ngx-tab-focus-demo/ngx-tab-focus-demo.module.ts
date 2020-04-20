import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTabFocusModule } from 'projects/ngx-tab-focus/src';

import { NgxTabFocusDemoComponent } from './ngx-tab-focus-demo.component';

@NgModule({
	declarations: [NgxTabFocusDemoComponent],
	imports: [NgxTabFocusModule],
	exports: [NgxTabFocusDemoComponent],
})
export class NgxTabFocusDemoModule {}
