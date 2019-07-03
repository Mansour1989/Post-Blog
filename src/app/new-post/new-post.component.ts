import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../classes/post';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private location: Location,
              private postService: PostService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit(post: Post) {
    post = ({
      title: this.postForm.value.title,
      content: this.postForm.value.content,
      date: new Date(),
      likeDislike: 0
    });
    this.postService.addPost (post);
  }

  get f() { return this.postForm.controls; }

  goBack(): void {
    console.log(this.f)
    this.location.back();
  }

}
