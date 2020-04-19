import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxTabFocusModule } from 'projects/ngx-tab-focus/src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	NgxTabFocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
