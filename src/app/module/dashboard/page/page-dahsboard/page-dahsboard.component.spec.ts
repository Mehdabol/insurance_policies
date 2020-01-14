import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDahsboardComponent } from './page-dahsboard.component';

describe('PageDahsboardComponent', () => {
  let component: PageDahsboardComponent;
  let fixture: ComponentFixture<PageDahsboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDahsboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDahsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
