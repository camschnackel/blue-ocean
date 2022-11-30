import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactDescription: string = 'Cash offers from qualifying distressed and foreclosed homes, as well as homes with underwater mortages.'
  contact1 = {
    name: 'Luke Grothe',
    phone: '(612) 735-1458',
    email: 'Lukegrothe@me.com'
  }
  contact2 = {
    name: 'Rich Faulhaber',
    phone: '(651) 808-3075',
    email: ''
  }
}
