import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetallComponent } from './user-detall.component';

describe('UserDetallComponent', () => {
  let component: UserDetallComponent;
  let fixture: ComponentFixture<UserDetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
