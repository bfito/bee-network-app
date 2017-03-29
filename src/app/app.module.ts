import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ButtonsModule } from 'ng2-bootstrap/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
// import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AddListBoxComponent } from './main/add-list-box/add-list-box.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from '@angular/material';
import { NavLandingPageComponent } from './landing-page/nav-landing-page/nav-landing-page.component';
// import { SearchComponent } from './search/search.component';
import { ApiaryFarmListComponent } from './apiary-farm-list/apiary-farm-list.component';
import { ApiaryFarmDetailComponent } from './apiary-farm-detail/apiary-farm-detail.component';
import { AccountComponent } from './account/account.component';
// import { TransactionsComponent } from './transactions/transactions.component';
import { PostApiaryFarmListingComponent } from './post-apiary-farm-listing/post-apiary-farm-listing.component';
import { ApiaryFarmService } from './services/apiary-farm.service';
import { SessionService } from './services/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { GetApiaryFarmListingComponent } from './get-apiary-farm-listing/get-apiary-farm-listing.component';
// import { DatepickerComponent } from './datepicker/datepicker.component';
// import { DatepickerModule } from 'ng2-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    // NavComponent,
    MainComponent,
    AddListBoxComponent,
    LandingPageComponent,
    NavLandingPageComponent,
    // SearchComponent,
    ApiaryFarmListComponent,
    ApiaryFarmDetailComponent,
    AccountComponent,
    // PostListingComponent,
    // TransactionsComponent,
    PostApiaryFarmListingComponent,
    NavComponent,
    GetApiaryFarmListingComponent,
    // DatepickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    ModalModule.forRoot(),
    ButtonsModule,
    MaterialModule,
  ],
  providers: [ApiaryFarmService, SessionService],
  bootstrap: [AppComponent],

})
export class AppModule { }
