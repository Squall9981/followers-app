import { ValidationErrors, AbstractControl } from '@angular/forms';

export class ChangePasswordValidators {
    static verifyOldPassword(control: AbstractControl) : Promise<ValidationErrors|null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if(control.value !== "1234") {
                    resolve({invalidOldPassword: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        })
    }

    static passwordsShouldMatch(control: AbstractControl) : ValidationErrors|null {
        let newPassword = control.get("newPassword");
        let confirmPassword = control.get("confirmPassword");
        if(newPassword.value !== confirmPassword.value) {
            return {passwordsShouldMatch: true};
        } else {
            return null;
        }
    }
}