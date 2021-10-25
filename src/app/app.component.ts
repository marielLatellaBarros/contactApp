import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myContact: Contact;
  title = 'contactApp';

  constructor() {}

  ngOnInit(): void {}


  handleData(event: Contact): void {
    console.log('Received data!', event);
  }
}
