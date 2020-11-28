import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  id: string;
  contact: Contact;
  deleted: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getContact(this.id);
  }
  getContact(id: string) {
    this.contactService.getContact(id).subscribe((data) => {
      this.contact = data;
    });
  }

  deleteContact(id: string): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.deleted = true;
      setTimeout(() => this.router.navigateByUrl(''), 3000);
    });

  }
}
