import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceSodorBimeComponent } from './entrance-sodor-bime.component';

describe('EntranceSodorBimeComponent', () => {
  let component: EntranceSodorBimeComponent;
  let fixture: ComponentFixture<EntranceSodorBimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceSodorBimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceSodorBimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
