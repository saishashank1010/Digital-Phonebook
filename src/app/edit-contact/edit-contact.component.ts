import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ContactInfoService } from '../contact-info.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})

export class EditContactComponent implements OnInit {
  contactForm: FormGroup;
  contact: Contact = {};

  constructor(
    private contactInfoService: ContactInfoService,
    private route: ActivatedRoute,
    private location: Location
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
    this.getContact();
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.contactInfoService.getContactById(id).subscribe(contact => {this.contact = contact
      console.log(contact);
    });
  }

  saveContact(): void {
    console.log("inside save");
    this.contact.firstName = this.contactForm.get('firstName').value;
    this.contact.lastName = this.contactForm.get('lastName').value;
    this.contact.email = this.contactForm.get('eMail').value;
    this.contact.phoneNumber = this.contactForm.get('phoneNumber').value;
    this.contact.status = this.contactForm.get('status').value;
    console.log("contact after save"+this.contact.firstName);

    this.contactInfoService.updateContact(this.contact).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
