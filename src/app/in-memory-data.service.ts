import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const contacts = [
      {id:11, firstName: 'Abhishek',lastName:'Singh',email:'abhishek.singh@trial.com',phoneNumber:4269695612,status:'Active'},
      {id:12, firstName: 'Aakanksha',lastName:'Channa',email:'aakanksha.channa@trial.com',phoneNumber:4269699934,status:'Inactive'},
      {id:13, firstName: 'Harsh',lastName:'Mewar',email:'harsh.mewar@trial.com',phoneNumber:4269696756,status:'Active'},
      {id:14, firstName: 'Abhas',lastName:'Chaudhary',email:'abhas.chaudhary@trial.com',phoneNumber:4269699778,status:'Inactive'},
      {id:15, firstName: 'Kritika',lastName:'Kumari',email:'kritika.kumari@trial.com',phoneNumber:4269694590, status:'Active'},
      {id:16, firstName: 'Nidhi',lastName:'Shrivastava',email:'nidhi.shrivastava@trial.com',phoneNumber:4269690012,status:'Active'}
    ];
    return {contacts};
  }

  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 11;
  }
}
