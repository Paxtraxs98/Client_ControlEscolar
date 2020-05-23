import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpecialitesComponent } from './addpecialites.component';

describe('AddpecialitesComponent', () => {
  let component: AddpecialitesComponent;
  let fixture: ComponentFixture<AddpecialitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpecialitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpecialitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
