import { Injectable } from '@angular/core';

import {Events} from "ionic-angular";
import {Storage} from '@ionic/storage';

@Injectable()
export class UserData{
  HAS_LOGGED_IN = 'hasLoggedIn';
  IS_LOGGEF_IN = 'hasLoggedIn';

  userid: any;
  userAllData: any;

  userLoginID: any;

  constructor(
    public events: Events,
    public storage: Storage
  ){}

  login(userID: any, username: any, deviceID: any, userData: any): void{
      console.log(username);
      console.log(deviceID);
      this.storage.set(this.HAS_LOGGED_IN, true);
      this.setUsername(username);
      this.setUserID(userID);
      this.setDeviceID(deviceID);
      this.events.publish('user:signup');

      this.storage.set('userDataAll', userData);
  }
  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.storage.remove('userID');
    this.storage.remove('deviceId');
    this.events.publish('user:logout');
  };

  getUserAllData(): Promise<any>{
    return this.storage.get('userDataAll').then((result) => {
      this.userAllData = result;
    });
  }

  setUsername(username: any): void {
    this.storage.set('username', username);
  };
  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  setUserID(userID: any): void{
    this.storage.set('userID', userID);
  }
  getUserID() : Promise<any> {
    return this.storage.get('userID').then((value) => {
      this.userid = value;
      console.log('userID' + this.userid);

      return value;
    });
  }

  setDeviceID(deviceID: any): void{
    this.storage.set('deviceID', deviceID);
  }
  getDeviceID(): Promise<any> {
    return this.storage.get('deviceID').then((value) => {
      return value;
    });
  }

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };
  checkLoginUser(): Promise<string> {
    return this.storage.get(this.IS_LOGGEF_IN).then((value) => {
      return value;
    });
  };

}
