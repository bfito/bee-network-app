import { Component, OnInit } from '@angular/core';
import { ApiaryFarmService } from '../services/apiary-farm.service'
import { SessionService } from '../services/session.service'
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
// import { DatepickerComponent } from '../datepicker/datepicker.component';


@Component({
  selector: 'app-post-apiary-farm-listing',
  templateUrl: './post-apiary-farm-listing.component.html',
  styleUrls: ['./post-apiary-farm-listing.component.scss'],
  providers: [ApiaryFarmService]

})
export class PostApiaryFarmListingComponent implements OnInit {
  listing: Object;
  listingInfo = {
    // owner:     '',
    // name:      '',
    // location:  '',
    // postDate:  '',
    // startDate: '',
    // endDate:   '',
    // message:   '',
    Address: '',
    City: '',
    State: '',
    postalCode: '',
  };

  constructor(
    private myApiaryFarmsService: ApiaryFarmService,
    private mySession: SessionService,
    private myRoute: ActivatedRoute,
   private myNavigator: Router
  ) { }

  ngOnInit() {
  }

  postNewListing() {
    this.myApiaryFarmsService.postListing(this.listingInfo)
      .then((apiResult) => {
        console.log(apiResult);
        this.myNavigator.navigate(['main'])
      })
      .catch((err) => {
        console.log('Error creating listing', err);
      })
  }

}
