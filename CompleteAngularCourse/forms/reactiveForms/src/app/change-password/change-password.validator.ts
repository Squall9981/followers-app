import { ValidationErrors, AbstractControl } from '@angular/forms';

export class ChangePasswordValidators {
    static verifyOldPassword(control: AbstractControl) : ValidationErrors|null {
        return new Promise((resolve) => {
                resolve(control.value !== "1234" ? {invalidOldPassword: true} : null);
        })
    }

    static passwordsShouldMatch(control: AbstractControl) : ValidationErrors|null {
        let newPassword = control.get("newPassword");
        let confirmPassword = control.get("confirmPassword");
        return newPassword.value !== confirmPassword.value ? {passwordsShouldMatch: true} : null;
    }
}