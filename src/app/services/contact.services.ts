import { Contact } from '../models/contact.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const BASEAPIURL: string = 'https://webexpert1718.firebaseio.com/contacts.json';
const CONTACTAPIURL: string = 'https://webexpert1718.firebaseio.com/contacts/';
@Injectable()
export class ContactSerivce {
    contactList;


    constructor(private http: HttpClient) {}

    getContactList(): Observable<Contact[]> {
        return this.http.get(BASEAPIURL).pipe(
            map(this.parseContactData)
        );

    }
    parseContactData(rawContacts: any): Contact[] {
        return Object.keys(rawContacts).map(key => {
            let contact = rawContacts[key];
            return new Contact(
                contact.name,
                contact.email,
                contact.phone,
                contact.isFavorite,
                contact.avatar,
                key
            );
        });
    }

    addContact(contact: Contact): Observable<any> {
        return this.http.post(BASEAPIURL, contact);
    }

    // toggleFavorite(index: number): void {
    //     this.contactList[index].isFavorite = !this.contactList[index].isFavorite;
    // }

    updateContact(id: string, data: any): Observable<any> {
        let url: string = `${CONTACTAPIURL}${id}.json`;
        return this.http.patch(url, data);
    }
}