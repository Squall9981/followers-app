import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AppError } from '../common/app-error';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com';
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url + '/posts');
  }

  createPost(post) {
    return this.http.post(this.url + '/posts', JSON.stringify(post))
      .catch((error: Response) => {
        if(error.status === 404) {
          return Observable.throw(new BadRequestError(error.json()));
        } else {
          return Observable.throw(new AppError(error.json()));
        }
      });
  }

  updatePost(postId: number, postBody: object) {
    return this.http.patch(this.url + '/posts/' + postId, JSON.stringify(postBody));
  }

  deletePost(postId: number) {
    return this.http.delete(this.url + '/posts/' + postId)
      .catch((error: Response) => {
        if(error.status === 404) {
          return Observable.throw(new NotFoundError());  
        }
        return Observable.throw(new AppError(error));
      });;
  }
}
