import {FormControl} from '@angular/forms';

export class EmailValidator {

  static checkEmail(control: FormControl): any {
    let re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // skip validation if empty (Validators.required should handle this)
    if(!control.value) {
      return null;
    }

    if(!re.test(control.value)) {
      //control.value.setErrors({"invalidEmail": true});
      return {
        "invalidEmail": true
      };
    }

    return null;
  }

}
