import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSpecialitesComponent } from './get-specialites.component';

describe('GetSpecialitesComponent', () => {
  let component: GetSpecialitesComponent;
  let fixture: ComponentFixture<GetSpecialitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSpecialitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSpecialitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
