import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component'

import { AppComponent } from './app.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactSerivce } from "./services/contact.services";
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NewsletterComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
