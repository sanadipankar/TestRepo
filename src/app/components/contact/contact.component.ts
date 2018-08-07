import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { Comment } from '../../models/Comment';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /*contact:Contact ={
    clients:{
      clientname:'',
      clientmailid:'',
      comment:''
      }
  }*/
  contact:Contact;
  enableAdd:boolean = false;
  showContactForm:boolean = false;
  constructor() { }

  ngOnInit() {
        this.contact = {
          sec1:"CONTACT INFO",
          address:"Hinjewadi,Phase-1,Pune - 411057,Maharashtra",
          email:"nilanjanadutta.sit@gmail.com",
          phone:"+91-9739333232",
          website:"www.nilanjana-dutta.com",
          skype:"nilanjana1212",
          linkedin:"abc",
          github:"bcvf",
          /*clients:{
            clientname:"Peter Parker",
            clientmailid:"peter.parker@gmail.com",
            comment:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for  hope is uncover many web sites still"
            }*/
        }
  }

  onSubmit(e){
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e){
    console.log(e.type);
    console.log(e.target.value);
  }

  /*addComment(contacts:Contact){
    this.contacts.unshift(contacts);
  }*/
}

/*export class CommentComponent implements OnInit{
  comments:Comment[];
  constructor() { }
  ngOnInit() {
    this.comments=[
      {
        name:'Peter Parker',
        email:'peter.parker@gmail.com',
        comment:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for  hope is uncover many web sites still'
      },

      {
        name:'Mark Millar',
        email:'mark.millar@gmail.com',
        comment:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for  hope is uncover many web sites still'
      },

      {
        name:'Lina Teofilova',
        email:'lina.teofilova@gmail.com',
        comment:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for  hope is uncover many web sites still'
      },
      {
        name:'Richard Payne',
        email:'richard.payne@gmail.com',
        comment:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for  hope is uncover many web sites still'
      },
      {
        name:'Owen Tully',
        email:'owen.tully@gmail.com',
        comment:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for  hope is uncover many web sites still'
      }
    ];
  }
}*/
