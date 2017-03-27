import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeFarmListComponent } from './bee-farm-list.component';

describe('BeeFarmListComponent', () => {
  let component: BeeFarmListComponent;
  let fixture: ComponentFixture<BeeFarmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeFarmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeFarmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
