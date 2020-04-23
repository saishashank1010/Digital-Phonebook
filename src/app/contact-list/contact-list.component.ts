import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactInfoService: ContactInfoService) {}

  ngOnInit() {
     this.getContacts();
  }

  getContacts(): void {
    this.contactInfoService.getContacts().subscribe(contacts => (this.contacts = contacts));
  }

  edit(): void {

  }

  delete(contact: Contact): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactInfoService.deleteContact(contact).subscribe();
  }

}
