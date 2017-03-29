import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SessionService {
  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = '';

  constructor(private http: Http) { }

  logout() {
    return this.http.post(`${this.BASE_URL}/api/logout`, {})
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  isLoggedIn() {
    //{ withCredentials: true } is supposed to share cookies across different domains.  It does not seem to be working.
    const options = { withCredentials: true };
    return this.http.get(`${this.BASE_URL}/api/users`, options)
    .toPromise()
    .then(apiResponse => apiResponse.json());
  }

  getPrivateData() {
    return this.http.get(`${this.BASE_URL}/api/private`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }
}
