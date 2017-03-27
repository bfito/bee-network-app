import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeFarmDetailComponent } from './bee-farm-detail.component';

describe('BeeFarmDetailComponent', () => {
  let component: BeeFarmDetailComponent;
  let fixture: ComponentFixture<BeeFarmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeFarmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeFarmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
