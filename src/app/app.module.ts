import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component'

import { AppComponent } from './app.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NewsletterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
