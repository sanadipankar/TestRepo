import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']  
})
export class PostFormComponent implements OnInit {

  
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  constructor(private postService: PostService) { }
  @Input() currentPost:Post;

  ngOnInit() {
  }

  addPost(title,body){
      if(!title||!body){
        alert('Pease add post');
      }
      else{
        /*console.log(title,body);*/
        this.postService.savePost({title,body} as Post).subscribe(post => {
          this.newPost.emit(post);
        });
      }
     
  }
}
