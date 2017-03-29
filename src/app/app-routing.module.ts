import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApiaryFarmListComponent } from './apiary-farm-list/apiary-farm-list.component';
import { ApiaryFarmDetailComponent } from './apiary-farm-detail/apiary-farm-detail.component';
import { AccountComponent } from './account/account.component';
import { PostApiaryFarmListingComponent } from './post-apiary-farm-listing/post-apiary-farm-listing.component';
import { GetApiaryFarmListingComponent } from './get-apiary-farm-listing/get-apiary-farm-listing.component';

const routes: Routes = [
  {
    path: 'main',
    // children: []
    component: MainComponent
  },
  // {
  //   path: '',
  //   component: ApiaryFarmListComponent
  // },
  {  path: 'listing/:id',
    component: ApiaryFarmDetailComponent
  },
  {
    path: 'about/:id',
    component: AccountComponent
  },
  {
    path: 'postlisting',
    component: PostApiaryFarmListingComponent
  },
  {
    path: 'getlisting',
    component: GetApiaryFarmListingComponent
  },
  {
  path: '**',
  redirectTo: 'main'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
