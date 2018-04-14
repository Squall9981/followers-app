import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
// Instance method available on Observable objects
import 'rxjs/add/operator/catch';
// Must explicity import throw
// Static method on Observable class
import 'rxjs/add/observable/throw';
import { AppError } from '../common/app-error';

@Injectable()
export class PostService {
  private url = 'http://aaaajsonplaceholder.typicode.com';
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url + '/posts');
  }

  createPost(post) {
    return this.http.post(this.url + '/posts', JSON.stringify(post))
      .catch(this.handleError);
  }

  updatePost(postId: number, postBody: object) {
    return this.http.patch(this.url + '/posts/' + postId, JSON.stringify(postBody))
      .catch(this.handleError);
  }

  deletePost(postId: number) {
    return this.http.delete(this.url + '/posts/' + postId)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if(error.status === 404) {
      return Observable.throw(new NotFoundError());  
    }
    if(error.status === 404) {
      return Observable.throw(new BadRequestError(error.json()));
    }
    return Observable.throw(new AppError(error));
  }
}