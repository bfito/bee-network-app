import { Component, OnInit } from '@angular/core';
import { ApiaryFarmService } from '../apiary-farm.service'

@Component({
  selector: 'app-apiary-farm-list',
  templateUrl: './apiary-farm-list.component.html',
  styleUrls: ['./apiary-farm-list.component.scss'],
  providers: [ApiaryFarmService]
})

export class ApiaryFarmListComponent implements OnInit {
  apiaryFarms: Array<Object> = [];
  errorMessage: string = '';

  constructor(private myApiaryFarmsService: ApiaryFarmService) { }

  ngOnInit() {
    this.myApiaryFarmsService.getList()
      .then((apiaryFarmList) => {
        this.apiaryFarms = apiaryFarmList;
      })
      .catch((err) => {
        this.errorMessage = "There was an error. Try again later."
      });
  }
}
