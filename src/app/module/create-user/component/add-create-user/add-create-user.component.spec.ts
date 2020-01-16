import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreateUserComponent } from './add-create-user.component';

describe('AddCreateUserComponent', () => {
  let component: AddCreateUserComponent;
  let fixture: ComponentFixture<AddCreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
