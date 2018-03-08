import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import {Events, Header} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {UserData} from "./user-data";;

let apiUrl = 'https://bpcitracker.com/api/logins/';
let usersApi = 'https://bpcitracker.com/api/users/';


@Injectable()
export class AuthServiceProvider {
  HAS_LOGGED_IN = 'hasLoggedIn';

  public patientData;
  public userID;
  public userName;
  public userOrg;
  constructor(
    public http: Http,
    public events: Events,
    public storage: Storage,
    public user_data: UserData
  ) {}

  addPatient(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      //console.log(credentials);
      var form_data = new FormData();

      for ( var key in credentials.formData ) {
        form_data.append(key, credentials.formData[key]);
      }
      console.log('JSON');
      console.log(JSON.stringify(form_data));
      console.log(form_data);
      this.http.post(usersApi + type, form_data, {headers: headers})
        .subscribe(res => {
          console.log(res);
          resolve(res.json());
          console.log(res.json());
        }, (err) => {
          console.log("reject");
          reject(err)
        });
    });
  }


  addManualReport(credentials, type, userid){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      var form_date = new FormData();

      for(var key in credentials.formData){
        form_date.append(key, credentials.formData[key]);
      }
      form_date.append('user_id', userid);
      this.http.post(usersApi + type, form_date, {headers: headers})
        .subscribe(res => {
          console.log('Hello');
          resolve(res.json());
          console.log(res.json());
        }, (err) => {
          reject(err);
        })
    })
  }

  patientStatusReport(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(usersApi + type, JSON.stringify(credentials), {headers: headers})
        .subscribe( res => {
          resolve(res.json());
          console.log(res.json());
        })
    })
  }

  // Login Method
  login(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl+ type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());

          this.patientData = res.json();

          console.log(this.patientData.response.message);
          if(this.patientData.response.message != 'Username is not correct' && this.patientData.response.message != 'Password is incorrect' ){
            this.userID = this.patientData.response.userdata.user_id;
            this.userName = this.patientData.response.userdata.name;
            console.log("user Data " + this.patientData.response.userdata.name);
            this.userOrg = this.patientData.response.userdata.organization_name;
            console.log("ORginaz : " + this.userOrg);
            this.storage.set(this.HAS_LOGGED_IN, true);
            this.setUsername(this.userName);
            this.user_data.setUserID(this.userID);
            console.log('-----------------'+this.userID);
            this.user_data.getUserID();
          }
          console.log(res.json());

        }, (err) => {
          reject(err);
        })
    });
  }

  getUserInfo(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(usersApi + type, JSON.stringify(credentials), {headers: headers})
        .subscribe( res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
          console.log('Error with Profile Details')
        });
    })
  }

  updateProfile(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      var form_date = new FormData();

      for(var key in credentials.formData){
        form_date.append(key, credentials.formData[key]);
      }
      this.http.post(usersApi + type, form_date, {headers: headers})
        .subscribe( res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        })

    })
  }
  getPatientList(credentials, type){
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers} )
        .subscribe( res => {
          resolve(res.json());
          console.log(res.json());
          this.patientData = res.json();
          console.log(res.json());
        }, (err) => {
          reject(err);
        });
    })
  }


  updatePatient(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      var form_data = new FormData();
      for( var key in credentials.formData){
        form_data.append(key, credentials.formData[key]);
      }
      console.log('FORM DATA');
      console.log(form_data);
      this.http.post(usersApi + type, form_data, {headers: headers})
        .subscribe(result => {
          resolve(result.json());
        }, err => {
          reject(err);
        });
    });
  }

  checkCoupans(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(usersApi + type, credentials, {headers: headers})
        .subscribe(result => {
          resolve(result.json());
        }, err => {
          reject(err);
        });
    });
  }

  statusUpdate(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(usersApi + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(result => {
          resolve(result.json());
        }, err => {
          reject(err.json());
        })
    })
  }

  searchPatient(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log(credentials);
      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, err => {
          reject(err.json());
        })
    })
  }

  postData(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(usersApi + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(result => {
          console.log("Result " + result);
          resolve(result.json());
          console.log("Result : " + result.json());
        }, err => {
          reject(err.json());
        })
    })
  }

  getOtp(credentials, type){
    console.log(credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log(credentials);
      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(result => {
          console.log("ghghgh");
          console.log(result.json());
          resolve(result.json());
        }, err => {
          reject(err.json());
        })
    })
  }

  alertFrequency(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(usersApi + type, credentials, {headers: headers})
        .subscribe(result => {
          resolve(result.json());
        }, err => {
          reject(err.json());
        })
    })
  }

  signup(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      var form_data = new FormData();
      for ( var key in credentials.formData ) {
        form_data.append(key, credentials.formData[key]);
      }
      this.http.post(apiUrl + type, form_data, {headers: headers})
        .subscribe( res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        })
    })
  }

  updatePassword(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log('UPDATES CREDIANTIALS');
      console.log(credentials);
      this.http.post(usersApi+ type, JSON.stringify(credentials), {headers: headers})
        .subscribe( res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        })
    })
  }

  forgotPassword(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log('UPDATES CREDIANTIALS');
      this.http.post(apiUrl+ type, JSON.stringify(credentials), {headers: headers})
        .subscribe( res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        })
    })
  }

  loadChatHistory(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(usersApi+ type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        },(err) => {
          reject;
        })
    })
  }

  deletePatient(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(usersApi + type, JSON.stringify(credentials), {headers: headers})
        .subscribe( res => {
          resolve(res.json());
          console.log(res.json());
        })
    })
  }

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  // Register Method
  register(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl+'guest/signup', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // Register Method
  logout(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      //headers.append('X-Auth-Token', localStorage.getItem('token'));

      this.http.post(apiUrl+'logout', {}, {headers: headers})
        .subscribe(res => {
          localStorage.clear();
        }, (err) => {
          reject(err);
        });
    });
  }



}
