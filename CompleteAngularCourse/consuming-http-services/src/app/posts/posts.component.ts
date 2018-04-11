import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  // Annotate with private to make it a field in the class
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert("An unexpected error occurred.");
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value}
    input.value = "";
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
          console.log(response.json());
        },
        (error: AppError) => {
          if (error instanceof BadRequestError) {
            // display errors on the form.
            // error would have the key/value pair of the input and error.
            // this.form.setErrors(error.originalError);
          } else {
            alert("An unexpected error occurred.");
            console.log(error);
          }
        });
  }

  updatePost(post) {
    let postId = post.id;
    let postBody = {isRead: true};
    this.service.updatePost(postId, postBody)
      .subscribe(response => {
        console.log(response);
      }, error => {
        alert("An unexpected error occurred.");
        console.log(error);
      });
    // put does whole object, patch only a few properties
    // this.http.put(this.url + '/posts', JSON.stringify(post));
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if(error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          alert("An unexpected error occurred.");
          console.log(error);
        }
      });
  }

}
