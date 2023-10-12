import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function validValidator(): ValidatorFn {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    const valid = ctrl.value === 'valid';
    return valid ? null : { validValidator: ctrl.value };
  };
}
