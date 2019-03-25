
import { AbstractControl, ValidatorFn } from '@angular/forms';

/** 电话校验 */
export function phoneValidator() {

    return (control: AbstractControl): { [key: string]: any } | null => {

        let phone = control.value, forbidden: any, re = /^\d{11}$/;

        if (!phone) {
            return null
        }

        if (re.test(phone)) {
            forbidden = false;
        } else {
            forbidden = true;
        }

        return forbidden ? { "phone": control.value } : null;
    };
}
