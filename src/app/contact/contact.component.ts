import { Component, Input } from "@angular/core"
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
    
    onClick(): void {
        console.log('Button clicked. Status van favorite is:' + this.isFavorite);
    }
}