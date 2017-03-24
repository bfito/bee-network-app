import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  radioModel: string = ''; //Radio -> only can be  'bee' or 'farm' 

  constructor() { }

  ngOnInit() {
  }

}
