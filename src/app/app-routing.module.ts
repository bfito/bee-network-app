import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApiaryFarmListComponent } from './apiary-farm-list/apiary-farm-list.component';
import { ApiaryFarmDetailComponent } from './apiary-farm-detail/apiary-farm-detail.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: 'main',
    // children: []
    component: MainComponent
  },
  {
    path: '',
    component: ApiaryFarmListComponent
  },
  {  path: 'listing/:id',
    component: ApiaryFarmDetailComponent
  },
  {
    path: 'about/:id',
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
