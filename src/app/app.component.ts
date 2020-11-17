import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.models';

import { ContactSerivce } from "./services/contact.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myContact: Contact;
  contactList: Contact[];
  title = 'contactApp';

  constructor(private contactService: ContactSerivce) {}

  ngOnInit(): void {
    this.fetchContactList();
  }

  fetchContactList(): void {
    this.contactService.getContactList().subscribe(data => {
      this.contactList = data;
    })
  }

  handleData(event: Contact) {
    console.log('Received data!', event);
  }

  createContact(event: Contact) {
    this.contactService.addContact(event).subscribe(() => {
      this.fetchContactList()
    });
  }

  handleUpdate(): void {
    this.fetchContactList();
  }

  
}
