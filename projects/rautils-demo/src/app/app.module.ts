import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages';

import { NgxTabFocusDemoModule } from './modules';

@NgModule({
  declarations: [
	AppComponent,
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	NgxTabFocusDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
