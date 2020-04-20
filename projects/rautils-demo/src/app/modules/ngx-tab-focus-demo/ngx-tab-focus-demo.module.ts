import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTabFocusModule } from 'projects/ngx-tab-focus/src';

import { NgxTabFocusDemoRoutingModule } from './ngx-tab-focus-demo-routing.module';
import { NgxTabFocusDemoComponent } from './ngx-tab-focus-demo.component';

@NgModule({
  declarations: [
    NgxTabFocusDemoComponent
  ],
  imports: [
	NgxTabFocusDemoRoutingModule,
	NgxTabFocusModule
  ],
})
export class NgxTabFocusDemoModule { }
