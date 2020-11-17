import { Contact } from '../models/contact.models';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactSerivce {
    contactList = [
        new Contact('jane doe', 'jane.doe@gmail.com', '01134543212', true, "assets/avatar.png"),
        new Contact('john doe', 'john.doe@gmail.com', '01144323424', false, "assets/avatar.png"),
        new Contact('Dries Swinnen', 'dries.swinnen@gmail.com', '01122233322', true, "assets/avatar.png"),
    ];

    constructor() {}

    getContactList(): Contact[] {
        return this.contactList;
    }

    addContact(contact: Contact) {
        this.contactList.push(contact);
    }

    toggleFavorite(index: number): void {
        this.contactList[index].isFavorite = !this.contactList[index].isFavorite;
    }
}