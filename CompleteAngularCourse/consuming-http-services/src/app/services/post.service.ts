import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com';
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url + '/posts');
  }

  createPost(post) {
    return this.http.post(this.url + '/posts', JSON.stringify(post));
  }

  updatePost(postId: number, postBody: object) {
    return this.http.patch(this.url + '/posts/' + postId, JSON.stringify(postBody));
  }

  deletePost(postId: number) {
    return this.http.delete(this.url + '/posts/' + postId);
  }
}
