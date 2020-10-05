import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
