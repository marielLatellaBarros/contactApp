import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact} from '../models/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  //https://stackoverflow.com/questions/41791933/in-typescript-what-is-the-type-of-image
  // avatar: HTMLImageElement;
  avatar: string;
  isFavorite: boolean;
  form: FormGroup;

  @Input() contact: Contact;
  @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(this.contact ? this.contact.name: null,
         [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(this.contact ? this.contact.email: null,
         [Validators.required, Validators.pattern(/^[a-z0-9_\.]+/i)]),
      'phone': new FormControl(this.contact ? this.contact.phone: null, 
         [Validators.required, Validators.minLength(9)]),
      'isFavorite': new FormControl(this.contact ? this.contact.isFavorite: false),
      'avatar': new FormControl(this.contact ? this.contact.avatar: null),
    });
  }

  submit(form): void {
    //NOTE: Form values are linked to the name property of the input field!!!
    /* @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * */
    console.log('Submitted ' + JSON.stringify(form.value, null, 10));
    let contact: Contact = new Contact(
      form.value.name,
      form.value.email,
      form.value.phone,
      form.value.isFavorite,
      form.value.avatar
    );
    form.reset();
    this.onSubmit.emit(contact);
  }


}
