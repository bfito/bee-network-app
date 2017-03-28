import { Component, OnInit } from '@angular/core';
import { ApiaryFarmService } from '../apiary-farm.service'

@Component({
  selector: 'app-post-apiary-farm-listing',
  templateUrl: './post-apiary-farm-listing.component.html',
  styleUrls: ['./post-apiary-farm-listing.component.scss']
})
export class PostApiaryFarmListingComponent implements OnInit {
  listing: Object;
  listingInfo = {
    date:     '',
    duration: '',
    location: '',
    message: '',
    isBeekeeper: false
  };

  constructor(private myApiaryFarmsService: ApiaryFarmService) { }

  ngOnInit() {
  }

  myListing() {
    this.myApiaryFarmsService.myApiaryFarmsService()
      .then((apiResult) => {
        console.log(apiResult);
      })
      .catch((err) => {
        console.log('Error while retrieving your list of classes.', err);
      })
  }
  postNewListing() {
    this.myApiaryFarmsService.postListing(this.listingInfo)
      .then((apiResult) => {
        console.log(apiResult);
      })
      .catch((err) => {
        console.log('Error creating listing', err);
      })
  }

}
