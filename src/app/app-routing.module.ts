import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApiaryFarmListComponent } from './apiary-farm-list/apiary-farm-list.component';
import { ApiaryFarmDetailComponent } from './apiary-farm-detail/apiary-farm-detail.component';

const routes: Routes = [
  {
    path: 'main',
    // children: []
    component: MainComponent
  },
  // {
  //   path: '',
  //   // children: []
  //   component: LandingPageComponent
  // }
  {
    path: '',
    component: ApiaryFarmListComponent
  },
  {  path: 'listing/:id',
    component: ApiaryFarmDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
