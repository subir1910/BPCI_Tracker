import {FormGroup} from '@angular/forms';

export class PasswordValidator {

  static isMatching(group: FormGroup){

    var firstPassword = group.controls['password'].value;
    var secondPassword = group.controls['confirm_password'].value;
    if((firstPassword && secondPassword) && (firstPassword != secondPassword)){
      group.controls['confirm_password'].setErrors({"pw_mismatch": true});
      return { "pw_mismatch": true };
    } else{
      return null;

    }

  }

}
