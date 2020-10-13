import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Contact } from '../models/contact.models';

@Component({
    selector:'app-contact',
    templateUrl: './contact.component.html',
    styleUrls : ['./contact.component.css']
})

export class ContactComponent{
    name: string;
    email: string;
    phone: string;
    isFavorite: boolean;

    @Input() contact: Contact;
    @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();
    
    onClick(): void {
        console.log('Button clicked. Status van favorite is:' + this.isFavorite);
    }

    submit() {
        this.onSubmit.emit(this.contact);
    }
}