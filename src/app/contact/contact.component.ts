import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { Contact } from '../models/contact.models';
import { ContactSerivce } from "../services/contact.services";

@Component({
    selector:'app-contact',
    templateUrl: './contact.component.html',
    styleUrls : ['./contact.component.css']
})

export class ContactComponent implements OnInit {
    @Input() contact: Contact;
    @Input() index: number;
    @Output() onUpdate: EventEmitter<any> = new EventEmitter();

    constructor(private contactService: ContactSerivce){}

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    name: string;
    email: string;
    phone: string;
    isFavorite: boolean;

    onClick(): void {
        console.log('Button clicked. Status van favorite is:' + this.isFavorite);
    }

    toggleFavorite(id: string, isFavorite: boolean): void {
        this.contactService.updateContact(id, {isFavorite: isFavorite}).subscribe(() => {
            this.onUpdate.emit();
        });
    }
}