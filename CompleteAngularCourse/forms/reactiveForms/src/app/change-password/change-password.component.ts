import { ChangePasswordValidators } from './change-password.validator';
import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, ChangePasswordValidators.verifyOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['',Validators.required]
    })
  }

  log(form) {
    console.log(this.form);
    console.log(this.form.get("oldPassword"));
  }

  get oldPassword() {
    return this.form.get("oldPassword");
  }

  get newPassword() {
    return this.form.get("newPassword");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}