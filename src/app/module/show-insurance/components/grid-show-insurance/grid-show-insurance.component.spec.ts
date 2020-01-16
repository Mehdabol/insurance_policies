import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridShowInsuranceComponent } from './grid-show-insurance.component';

describe('GridShowInsuranceComponent', () => {
  let component: GridShowInsuranceComponent;
  let fixture: ComponentFixture<GridShowInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridShowInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridShowInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
