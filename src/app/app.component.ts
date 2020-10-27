import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myContact: Contact;
  contactList: Contact[] =[
    new Contact('jane doe', 'jane.doe@gmail.com', '0113448239', true, 'assets/avatar.png'),
    new Contact('john doe', 'john.doe@gmail.com', '0113448238', true, 'assets/avatar.png'),
    new Contact('kat doe', 'kat.doe@gmail.com', '0113448237', true, 'assets/avatar.png')
  ];
  title = 'contactApp';

  ngOnInit(): void {
  }

  handleData(event: Contact) {
    console.log('Received data!', event);
  }
  
}
