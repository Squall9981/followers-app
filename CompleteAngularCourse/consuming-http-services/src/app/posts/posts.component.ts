import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit, Injectable } from '@angular/core';

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
    this.service.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    this.posts.splice(0, 0, post);

    input.value = "";

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          // Move this line above for optimistic updating, assuming server succeeds.
          // this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          // Delete 1 item from posts.
          this.posts.splice(0,1);

          if (error instanceof BadRequestError) {
            // display errors on the form.
            // error would have the key/value pair of the input and error.
            // this.form.setErrors(error.originalError);
          } else {
            // Rethrow error to be handled by global error handler.
            throw error;
          }
        });
  }

  updatePost(post) {
    let postId = post.id;
    let postBody = {isRead: true};
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
    // put does whole object, patch only a few properties
    // this.http.put(this.url + '/posts', JSON.stringify(post));
  }

  deletePost(post) {
    // let index = this.posts.indexOf(post);
    // this.posts.splice(index, 1);

    // this.service.delete(post.id)
    //   .subscribe(() => {
        
    //   }, (error: AppError) => {
    //     this.posts.splice(index,0, post);
    //     if(error instanceof NotFoundError) {
    //       alert('This post has already been deleted.');
    //     } else {
    //       throw error;
    //     }
    //   });.
    // nothing happens until you subscribe to an observable.
    this.service.delete(post.id);
  }

}
