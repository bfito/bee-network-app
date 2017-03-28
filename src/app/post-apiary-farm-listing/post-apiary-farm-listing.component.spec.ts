import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiaryFarmListingComponent } from './post-apiary-farm-listing.component';

describe('PostApiaryFarmListingComponent', () => {
  let component: PostApiaryFarmListingComponent;
  let fixture: ComponentFixture<PostApiaryFarmListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostApiaryFarmListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApiaryFarmListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
