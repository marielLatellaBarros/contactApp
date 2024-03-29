import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  isFavorite: boolean;
  @Input() contact: Contact;
  @Input() index: number;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClick(): void {
    console.log('Button clicked. Status van favorite is:' + this.isFavorite);
  }

  toggleFavorite(event: any, id: string, isFavorite: boolean): void {
    event.stopPropagation();
    this.contactService
      .updateContact(id, { isFavorite: !isFavorite })
      .subscribe(() => this.onUpdate.emit);
  }
}
