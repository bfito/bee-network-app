import { Component, OnInit } from '@angular/core';
import { ApiaryFarmService } from '../apiary-farm.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apiary-farm-detail',
  templateUrl: './apiary-farm-detail.component.html',
  styleUrls: ['./apiary-farm-detail.component.scss'],
  providers: [ApiaryFarmService]
})

export class ApiaryFarmDetailComponent implements OnInit {

  apiaryFarm: Object;
  errorMessage: string = '';

  constructor(
    private myRoute: ActivatedRoute,
    private myApiaryFarmService: ApiaryFarmService,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getApiaryFarmDetails(params['id']);
    });
  }

  getApiaryFarmDetails(id) {
    // THIS WAS THE CODE BEFORE USING myRoute in ngOnInit
    this.myApiaryFarmService.get(id)
    .then((theApiaryFarmDetails) => {
      this.apiaryFarm = theApiaryFarmDetails;
      // console.log(theApiaryFarmDetails);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });
  }

  deleteApiaryFarm() {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    // console.log('Need to delete: ', this.apiaryFarm['_id']);
    this.myApiaryFarmService.remove(this.apiaryFarm['_id'])
      // .then((apiResult) => {
      .then(() => {
        this.myNavigator.navigate(['/']);
        // console.log(apiResult);
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve apiaryFarm details. Try again later.'
        // console.log('err', err);
      });
  }


}
