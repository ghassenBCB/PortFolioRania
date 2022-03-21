import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})

export class ContactsComponent {
  // values="";
  // onKey(event:any){
  //   this.values=event.target.value;
  // }
  input = {
    'width': '360px',
    'background': '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    'border': '0',
    'outline': '0',
    'padding': '22px 18px'
  }

  // person = 'Anet';
  // contacts = [{"first_name":"Tatum","last_name":"Vernon","email":"tvernon0@lycos.com","gender":"Female","company":"Youopia"},
  // {"first_name":"Anet","last_name":"Bellis","email":"abellis1@cnn.com","gender":"Female","company":"Oloo"},
  // {"first_name":"Pippa","last_name":"Goymer","email":"pgoymer2@ihg.com","gender":"Female","company":"Browsecat"},
  // {"first_name":"Addison","last_name":"Lawther","email":"alawther3@walmart.com","gender":"Male","company":"Yoveo"},
  // {"first_name":"Anya","last_name":"Franzman","email":"afranzman4@bravesites.com","gender":"Female","company":"Twitterbeat"}];

  // first_name = '';
  // last_name = '';
  // email = '';
  // gender = '';
  // company = '';

  compagnies=["LinkedIn", "FaceBook", "Amazon", "Apple", "Google"];
  Model=[new Contact("Ghassen", "BEN CHEIKH BRAHIM", "ghassendna@gmail.com", "Male", this.compagnies[0])];

  onSubmit(val:any){
   this.Model.unshift(
     new Contact(
       val.first_name,
       val.last_name,
       val.email,
       val.gender,
       val.company
     )
   )
  }
}
