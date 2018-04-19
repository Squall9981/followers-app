import { AppError } from './../common/app-error';
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
import 'rxjs/add/operator/map';
// convert observable to promise
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
  }

  create(resource) {
    return Observable.throw(new AppError());
    // return this.http.post(this.url + '/posts', JSON.stringify(resource))
    //     .map(response => response.json())
    //     .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + resource.post, JSON.stringify(resource.postBody))
        .map(response => response.json())
        .catch(this.handleError);
  }

  delete(id: number) {
    // return Observable.throw(new AppError());
    return this.http.delete(this.url + id)
        .map(response => response.json())
        // .toPromise()
        // Will retry call 3 times.
        .retry(3)
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