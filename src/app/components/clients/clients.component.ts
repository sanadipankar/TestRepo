import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import { Contact } from '../../models/Contact';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Client[];
  constructor() { }

  ngOnInit() {
    this.clients=[
      {
            clientname:"Peter Parker",
            clientmailid:"peter.parker@gmail.com",
            comment:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for  hope is uncover many web sites still"

      },
      {
        clientname:"Peter Parker",
        clientmailid:"peter.parker@gmail.com",
        comment:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for  hope is uncover many web sites still"
      },
      {
            clientname:"Peter Parker",
            clientmailid:"peter.parker@gmail.com",
            comment:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for  hope is uncover many web sites still"
      }
    ]
  }

}
