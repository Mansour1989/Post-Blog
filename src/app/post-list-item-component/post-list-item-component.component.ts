import { PostService } from './../services/post.service';
import { POSTS } from './../mock-posts';
import { Component,Input,  OnInit } from '@angular/core';
import { Post } from '../classes/post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
   posts: Array <Post> = [];
   constructor(private postService: PostService) { }
   ngOnInit() {
     this.getPosts();
    }

   getPosts(): void {
   this.postService.getPosts().subscribe(data => this.posts = data);
  }

  like(index: number) {
  this.posts[index].likeDislike ++;
  }

  dislike(index: number) {
  this.posts[index].likeDislike --;
  }

  removePost(index: number) {
    this.postService.removePost(index);
  }

}
