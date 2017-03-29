import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiaryFarmListingComponent } from './get-apiary-farm-listing.component';

describe('GetApiaryFarmListingComponent', () => {
  let component: GetApiaryFarmListingComponent;
  let fixture: ComponentFixture<GetApiaryFarmListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetApiaryFarmListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetApiaryFarmListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
