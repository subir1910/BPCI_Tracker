import { FormControl } from '@angular/forms';
import {AuthServiceProvider} from "../providers/auth-service/auth-service";

export class UsernameValidator {

  constructor(public authService: AuthServiceProvider){

  }

  static checkUsername(control: FormControl): any {
    return new Promise(resolve => {

      //Fake a slow response from server
      setTimeout(() => {
        console.log(control.value);
        if(control.value.toLowerCase() === "greg"){
          resolve({
            "username_taken": true
          });

        } else {
          console.log('resolve null');
          resolve(null);
        }
      }, 2000);

    });
  }

}
