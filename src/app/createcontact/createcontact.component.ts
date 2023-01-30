import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent {

  msg:string="";

  contact:Contact= new Contact;

  constructor(private service:ContactService, private router:Router){}

  saveContact(){
    this.service.createContact(this.contact).subscribe(response =>{
      this.msg=response
      this.router.navigate(['/contacts'])
    })
  }


}
