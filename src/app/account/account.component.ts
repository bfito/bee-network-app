import { Component, OnInit } from '@angular/core';
import { ApiaryFarmService } from '../services/apiary-farm.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private myApiaryFarmService: ApiaryFarmService) { }

  ngOnInit() {
  }

}
