import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myContact: Contact;
  title = 'contactApp';

  ngOnInit(): void {
    this.myContact = new Contact(
      'John Doe', 
      'john.doe@gmail.com', 
      '01166424893',
       true,
      'assets/avatar.png'
      );
  }

  handleData(event: Contact) {
    console.log('Received data!', event);
  }
  
}
