import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-landing-page',
  templateUrl: './nav-landing-page.component.html',
  styleUrls: ['./nav-landing-page.component.scss']
})
export class NavLandingPageComponent implements OnInit {

  radioModel: string = ''; //Radio -> only can be  'bee' or 'farm'

  constructor() { }

  ngOnInit() {
  }

}
