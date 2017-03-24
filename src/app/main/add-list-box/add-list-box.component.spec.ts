import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListBoxComponent } from './add-list-box.component';

describe('AddListBoxComponent', () => {
  let component: AddListBoxComponent;
  let fixture: ComponentFixture<AddListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
