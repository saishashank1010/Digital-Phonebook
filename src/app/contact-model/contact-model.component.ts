import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Contact } from '../contact';
import { ContactInfoService } from '../contact-info.service';


@Component({
  selector: 'app-contact-model',
  templateUrl: './contact-model.component.html',
  styleUrls: ['./contact-model.component.css']
})
export class ContactModelComponent implements OnInit {
   contactForm: FormGroup;
   contacts: Contact[] = [];

  constructor(
    private contactInfoService: ContactInfoService
  ) {
      this.contactForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        eMail: new FormControl(''),
        phoneNumber: new FormControl(''),
        status: new FormControl('')
      });
   }

   ngOnInit(): void {
  }

  onSubmit(contactForm) {
    var newContact: Contact;
    newContact = {}; 
    newContact.firstName = contactForm.get('firstName').value;
    newContact.lastName = contactForm.get('lastName').value;
    newContact.email = contactForm.get('eMail').value;
    newContact.phoneNumber = contactForm.get('phoneNumber').value;
    newContact.status = contactForm.get('status').value;

    this.contactInfoService.postContact(newContact).subscribe(contact => this.contacts.push(contact));

    contactForm.reset();
  }

}
