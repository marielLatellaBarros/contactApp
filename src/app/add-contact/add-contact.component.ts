import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { EditorState } from '../models/editor-state.enum';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  state: EditorState = EditorState.null;
  editorState: any = EditorState;

  constructor(private contactService: ContactService) {}

  createContact(event: Contact) {
    this.contactService.addContact(event).subscribe(() => {
      this.state = EditorState.created;
      setTimeout(() => (this.state = EditorState.null), 5000);
    });
  }
}
