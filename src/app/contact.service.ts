import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact, contacts } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts():Observable<Contact[]>{
    return of(contacts).pipe();
  }

  addContacts(c:Contact){
    const newContact=contacts.unshift(c);
    return of(newContact).pipe();
  }
}
