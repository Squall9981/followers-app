import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent2 } from './change-password.component';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent2;
  let fixture: ComponentFixture<ChangePasswordComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
