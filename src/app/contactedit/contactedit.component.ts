import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css']
})
export class ContacteditComponent {
  
ngOnInit():void{
this.editContact()
}
  contact:Contact=new Contact;
id:number=0;
msg:string="";

constructor(private service:ContactService, private router:Router , private activeRouter:ActivatedRoute){}

editContact(){
  this.id=this.activeRouter.snapshot.params['id'];
  this.service.findContactById(this.id).subscribe(response=>{
    this.contact=response
  })
}



updateContact(){
  this.service.createContact(this.contact).subscribe(response =>{
    this.msg=response
    this.router.navigate(['/contacts'])
  })
}

}
