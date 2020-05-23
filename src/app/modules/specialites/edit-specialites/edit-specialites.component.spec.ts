import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpecialitesComponent } from './edit-specialites.component';

describe('EditSpecialitesComponent', () => {
  let component: EditSpecialitesComponent;
  let fixture: ComponentFixture<EditSpecialitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpecialitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpecialitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
