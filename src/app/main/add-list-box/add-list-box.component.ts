import { Component, OnInit } from '@angular/core';
import { ApiaryFarmService } from '../../services/apiary-farm.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-list-box',
  templateUrl: './add-list-box.component.html',
  styleUrls: ['./add-list-box.component.scss'],
  providers: [ApiaryFarmService]
})
export class AddListBoxComponent implements OnInit {
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
