import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  created: boolean = false;

  constructor(private contactService: ContactService) { }

  createContact(event: Contact) {
    this.contactService.addContact(event).subscribe(() => {
      this.created = true;
      setTimeout(() => this.created = false, 5000);
    });
  }
}
