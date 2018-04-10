import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) : ValidationErrors|null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        // return {passwordsShouldMatch: (newPassword.value !== confirmPassword.value ? true : false)};

        if (newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true };
        
        return null;
    }
}