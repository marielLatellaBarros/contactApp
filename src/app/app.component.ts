import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

import { ContactService } from "./services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myContact: Contact;
  title = 'contactApp';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}


  handleData(event: Contact) {
    console.log('Received data!', event);
  }

  createContact(event: Contact) {
    this.contactService.addContact(event).subscribe(() => {
      // this.fetchContactList(this.onlyFavorites)
    });
  }
  
}
