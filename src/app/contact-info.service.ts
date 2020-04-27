import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor(private httpClient: HttpClient) { }

  private contactUrl = 'api/contacts'; 

  getContacts(): Observable<Contact []> {
    return this.httpClient.get<Contact []>(this.contactUrl);
  }

  getContactById(id: number): Observable<Contact> {
    const url = `${this.contactUrl}/${id}`;
    return this.httpClient.get<Contact>(url);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.httpClient.put(this.contactUrl, contact, httpOptions);
  }

  postContact(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(this.contactUrl,contact, httpOptions);
  } 

  deleteContact(contact: Contact): Observable<Contact> {
    const id =  contact.id;
    const url = `${this.contactUrl}/${id}`;

    return this.httpClient.delete<Contact>(url, { headers: new HttpHeaders().set('Accept', 'application/json') });

  }


}
