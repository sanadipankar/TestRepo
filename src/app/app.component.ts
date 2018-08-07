import { Component } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/*import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { AngularFireAuth } from 'angularfire2/auth';*
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';*/
class Book {
  constructor(public title) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template:`
  <ul>
  <li *ngFor="let book of books | async">
      <pre>{{ book | json }}</pre>
  </li>
  </ul>
  `,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  /*public books:FirebaseListObservable<Book[]>;
  constructor(db:AngularFireDatabase){
    this.books = db.list('/books');
  }*
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
   /* this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
      
    });*/

    /*this.user = this.afAuth.authState;
    console.log(this.user);*/

  }

