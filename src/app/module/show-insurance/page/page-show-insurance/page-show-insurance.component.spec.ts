import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShowInsuranceComponent } from './page-show-insurance.component';

describe('PageShowInsuranceComponent', () => {
  let component: PageShowInsuranceComponent;
  let fixture: ComponentFixture<PageShowInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageShowInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShowInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
