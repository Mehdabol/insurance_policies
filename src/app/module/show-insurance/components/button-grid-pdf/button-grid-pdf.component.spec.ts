import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGridPdfComponent } from './button-grid-pdf.component';

describe('ButtonGridPdfComponent', () => {
  let component: ButtonGridPdfComponent;
  let fixture: ComponentFixture<ButtonGridPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGridPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGridPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
