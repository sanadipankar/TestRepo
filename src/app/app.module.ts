import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about-me/about-me.component';
import { CvComponent } from './components/cv/cv.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
//import { CommentComponent } from './components/contact/contact.component';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ClientsComponent } from './components/clients/clients.component';
//import { AngularFireDatabase,FirebaseListObservable  } from 'angularfire2/database';
//import { Imageabout } from './components/image-about/image-about.component';
/*import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';*


/*exports const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};*/
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CvComponent,
    NavbarComponent,
    ContactComponent,
    PostsComponent,
    PostFormComponent,
    ClientsComponent,
    //CommentComponent
    /*Imageabout*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
   /* AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule */
  ],
  providers: [DataService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
