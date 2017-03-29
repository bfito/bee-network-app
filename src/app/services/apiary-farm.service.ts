import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiaryFarmService {

  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = '';


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

  myListing() {
    console.log(this.BASE_URL);

  const options = { withCredentials: true };
  return this.myHttp.get(`${this.BASE_URL}/api/notavailable`, options)
    .toPromise()
    .then(apiResponse => {
      console.log(apiResponse);
      return apiResponse.json();
    })
  }

postListing(listing) {
  // const options = { withCredentials: true };

    return this.myHttp.post(`${this.BASE_URL}/api/listing`, listing)
    .toPromise()
    .then(apiResponse => apiResponse.json())
    // console.log('SUCCESS!');
}

getListing() {
  return this.myHttp.get(`${this.BASE_URL}/api/listing`)
  .toPromise()
  // this parses the json
  .then(apiResponse => apiResponse.json())
}

  remove(id) {
    return this.myHttp.delete(`${this.BASE_URL}/api/apiaryFarms/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  register(item, id) {
  const options = { withCredentials: true };
  //Student to register to a class
  console.log(`${this.BASE_URL}/api/scheduleregister/${item}/${id._id}`)
  return this.myHttp.post(`${this.BASE_URL}/api/scheduleregister/${item}/${id._id}`, item, options)
    .toPromise()
    .then(apiResponse => {
      console.log('schedule-register', apiResponse);
      console.log('user._id', id._id);
      return apiResponse.json();
    })
    .catch((err) => {
      console.log('schedule-register-error', err);
      return err.json();
    })
//return;
}
}
