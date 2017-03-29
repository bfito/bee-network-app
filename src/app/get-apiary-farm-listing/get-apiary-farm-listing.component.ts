import { Component, OnInit } from '@angular/core';
import { ApiaryFarmService } from '../services/apiary-farm.service'

@Component({
  selector: 'app-get-apiary-farm-listing',
  templateUrl: './get-apiary-farm-listing.component.html',
  styleUrls: ['./get-apiary-farm-listing.component.scss'],
  providers: [ApiaryFarmService]
})
export class GetApiaryFarmListingComponent implements OnInit {
  apiaryFarmsListings: Array<Object> = [];
  errorMessage: string = '';

  constructor(private myApiaryFarmsService: ApiaryFarmService) { }

  ngOnInit() {
    this.myApiaryFarmsService.getListing()
      .then((apiaryFarmList) => {
        this.apiaryFarmsListings = apiaryFarmList;
      })
      .catch((err) => {
        this.errorMessage = "There was an error. Try again later."
      });
    }
  }
