import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCreateUserComponent } from './grid-create-user.component';

describe('GridCreateUserComponent', () => {
  let component: GridCreateUserComponent;
  let fixture: ComponentFixture<GridCreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCreateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
