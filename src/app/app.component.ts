import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  apiaryFarm: Object = {};

  constructor(private mySession: SessionService) {}
ngOnInit() {

  }
}
