import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component'

import { AppComponent } from './app.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { SupplyChainMappingComponent } from './supply-chain-mapping/supply-chain-mapping.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GraphViewComponent } from './graph-view/graph-view.component';
import { MapBusinessRelationComponentComponent } from './map-business-relation-component/map-business-relation-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NewsletterComponent,
    ContactFormComponent,
    ContactListComponent,
    AddContactComponent,
    ContactDetailComponent,
    SupplyChainMappingComponent,
    ListViewComponent,
    GraphViewComponent,
    MapBusinessRelationComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
