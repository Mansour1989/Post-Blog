import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POSTS } from '../mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Array<Post>> {
    return of(POSTS);
  }

  removePost(index: number) {
    POSTS.splice(index, 1);
  }

  addPost(post: Post) {
    POSTS.push(post);
  }
}
