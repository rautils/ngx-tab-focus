import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxTabFocusModule } from 'projects/ngx-tab-focus/src';
import { NgxTabFocusDemoComponent } from './modules/ngx-tab-focus-demo/ngx-tab-focus-demo.component';

@NgModule({
  declarations: [
	AppComponent,
	NgxTabFocusDemoComponent,
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	NgxTabFocusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
