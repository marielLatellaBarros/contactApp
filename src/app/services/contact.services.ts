import { Contact } from '../models/contact.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactSerivce {
    contactList;

    constructor(private http: HttpClient) {}

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