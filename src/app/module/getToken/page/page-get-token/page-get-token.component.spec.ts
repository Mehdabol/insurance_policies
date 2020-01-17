import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGetTokenComponent } from './page-get-token.component';

describe('PageGetTokenComponent', () => {
  let component: PageGetTokenComponent;
  let fixture: ComponentFixture<PageGetTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGetTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGetTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
