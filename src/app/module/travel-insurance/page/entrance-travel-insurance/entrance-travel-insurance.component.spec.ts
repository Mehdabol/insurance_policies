import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceTravelInsuranceComponent } from './entrance-travel-insurance.component';

describe('EntranceTravelInsuranceComponent', () => {
  let component: EntranceTravelInsuranceComponent;
  let fixture: ComponentFixture<EntranceTravelInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceTravelInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceTravelInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
