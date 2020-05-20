import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubjectsComponent } from './get-subjects.component';

describe('GetSubjectsComponent', () => {
  let component: GetSubjectsComponent;
  let fixture: ComponentFixture<GetSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
