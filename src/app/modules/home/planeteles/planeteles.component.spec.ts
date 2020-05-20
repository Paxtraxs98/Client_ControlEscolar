import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetelesComponent } from './planeteles.component';

describe('PlanetelesComponent', () => {
  let component: PlanetelesComponent;
  let fixture: ComponentFixture<PlanetelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
