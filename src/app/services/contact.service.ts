import {Contact} from '../models/contact.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const BASEAPIURL = 'https://webexpert1718.firebaseio.com/contacts.json';
const CONTACTAPIURL = 'https://webexpert1718.firebaseio.com/contacts/';

@Injectable()
export class ContactService {
  contactList;

  constructor(private http: HttpClient) {
  }

  // From chapter http: get contacts based on Favorites
  getContactList(onlyFavorites: boolean): Observable<Contact[]> {
    return this.http.get(BASEAPIURL).pipe(
      map(this.parseContactData),
      map((contacts: Contact[]) => {
        return onlyFavorites ? this.filterContacts(contacts) : contacts;
      })
    );
  }

  filterContacts(contacts: Contact[]): Contact[] {
    return contacts.filter((contact) => contact.isFavorite);
  }

  parseContactData(rawContacts: any): Contact[] {
    return Object.keys(rawContacts).map((key) => {
      const contact = rawContacts[key];
      return new Contact(contact.name, contact.email, contact.phone, contact.isFavorite, contact.avatar, key);
    });
  }

  addContact(contact: Contact): Observable<any> {
    return this.http.post(BASEAPIURL, contact);
  }

  updateContact(id: string, data: any): Observable<any> {
    const url = `${CONTACTAPIURL}${id}.json`;
    return this.http.patch(url, data);
  }

  getContact(id: string): Observable<Contact> {
    const url = `${CONTACTAPIURL}${id}.json`;
    return this.http
      .get(url)
      .pipe(
        map(
          (data: Contact) =>
            new Contact(
              data.name,
              data.email,
              data.phone,
              data.isFavorite,
              data.avatar,
              id
            )
        )
      );
  }

  deleteContact(id: string): Observable<any> {
    const url = `${CONTACTAPIURL}${id}.json`;
    return this.http.delete(url);
  }
}
