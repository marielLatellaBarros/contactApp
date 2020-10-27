import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
