import { AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  //constructor(private http: Http) {
    //can use both if using protected and unproteced resources
  constructor(private authHttp: AuthHttp, http: Http){
  }

  getOrders() {
    
    //AuthHttp methods do this below
    //let headers = new Headers();
    //let token = localStorage.getItem("token");
    //headers.append("Authorization", "Bearer " + token);
    
    //let options = new RequestOptions({headers: headers});

    return this.authHttp.get('/api/orders'/*, options*/)
      .map(response => response.json());
  }
}
