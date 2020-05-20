import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditUSerComponent } from './add-and-edit-user.component';

describe('AddAndEditUSerComponent', () => {
  let component: AddAndEditUSerComponent;
  let fixture: ComponentFixture<AddAndEditUSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAndEditUSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
