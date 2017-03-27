import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiaryFarmService {

  BASE_URL: string = 'http://localhost:3000';


  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/apiaryFarms`)
    .toPromise()
    // this parses the json
    .then(apiResponse => apiResponse.json())
  }

  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/apiaryFarms/${id}`)
        .toPromise()
        .then(apiResponse => apiResponse.json())
  }

  remove(id) {
    return this.myHttp.delete(`${this.BASE_URL}/api/apiaryFarms/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
}
