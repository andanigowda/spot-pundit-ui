import { UserInfoModel, TempleInfoModel } from './../../feature-modules/users-module/models/user-info.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
declare var require;
const forge = require('node-forge');

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  private loaderCount = 0;
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private isLoggedInUser: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);

  private isTimeStampUser: BehaviorSubject<any> = new BehaviorSubject<any>("");
  private userDetails: BehaviorSubject<any> = new BehaviorSubject<any>("");

  constructor(private http: HttpClient, private _router: Router, private _snackBar: MatSnackBar, private titleService: Title) { }

  public ENCRYPT_OBJ(value: any): any {
    let result = '';
    try {
      result = forge.util.encode64(forge.util.encodeUtf8(JSON.stringify(value)));
    } catch (e) {
    }
    return result;
  }

  public DECRYPT_OBJ(value: any, key?: string): any {
    if (value && value != null) {
      let result = '';
      try {
        result = JSON.parse(
          forge.util.decodeUtf8(forge.util.decode64(value.toString()))
        );
      } catch (e) {
        localStorage.setItem(key, '');
      }
      return result;
    }
    return '';
  }

  setUserRole(value: UserInfoModel) {
    return localStorage.setItem('role', JSON.stringify(value));
  }

  getUserRole() {
    return localStorage.getItem('role');
  }


  setTimeStamp(value) {
    localStorage.setItem('timeStamp', this.ENCRYPT_OBJ(value));
    this.isTimeStampUser.next(value);
  }

  getTimeStamp() {
    if (!this.isTimeStampUser.value) {
      this.isTimeStampUser.next(this.DECRYPT_OBJ(localStorage.getItem('timeStamp'), 'timeStamp'));
    }
    return this.isTimeStampUser.asObservable();
  }

  setLoggedInUserData(value: UserInfoModel) {
    this.userDetails.next(value);
    localStorage.setItem('loggedInUser', this.ENCRYPT_OBJ(value));
  }

  getLoggedInUserData() {
    if (!this.userDetails.value) {
      this.userDetails.next(this.DECRYPT_OBJ(localStorage.getItem('loggedInUser'), 'loggedInUser'));
    }
    return this.userDetails.asObservable();
  }

  setUserDetails(value: UserInfoModel) {
    localStorage.setItem('user', this.ENCRYPT_OBJ(value));
  }

  getUserDetails() {
    return this.DECRYPT_OBJ(localStorage.getItem('user'), 'user');
  }

  setTempleDetails(value: TempleInfoModel) {
    return localStorage.setItem('temple', JSON.stringify(value));
  }

  getTempleDetails() {
    return localStorage.getItem('temple');
  }

  setFloristDetails(value: UserInfoModel) {
    return localStorage.setItem('florist', JSON.stringify(value));
  }

  getFloristDetails() {
    return localStorage.getItem('florist');
  }

  setCrematoriumDetails(value: UserInfoModel) {
    return localStorage.setItem('crematorium', JSON.stringify(value));
  }

  getCrematoriumDetails() {
    return localStorage.getItem('crematorium');
  }

  setPanditDetails(value: UserInfoModel) {
    return localStorage.setItem('pandit', JSON.stringify(value));
  }

  getPanditDetails() {
    return localStorage.getItem('pandit');
  }

  setToken(token) {
    return localStorage.setItem('tk', token);
  }

  getToken() {
    return localStorage.getItem('tk');
  }

  setLoginStatus(value = false) {
    localStorage.setItem('loginStatus', this.ENCRYPT_OBJ(value));
    this.isLoggedInUser.next(value);
  }

  getLoginStatus() {
    if (!this.isLoggedInUser.value) {
      this.isLoggedInUser.next(
        this.DECRYPT_OBJ(localStorage.getItem('loginStatus'), 'loginStatus')
      );
    }

    return this.isLoggedInUser.asObservable();
  }

  isLoggedIn() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  setLoading(val: boolean): void {
    if (val) {
      this.loaderCount += 1;
    } else {
      this.loaderCount -= 1;
      if (this.loaderCount !== 0) {
        val = true;
      }
    }
    this.isLoading.next(val);
  }

  getLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  onShowMessageBar(message) {
    this._snackBar.open(message, "Close", {
      duration: 15000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
    });
  }

  calculateDiff(dateSent) {
    let currentDate = new Date();
    let date = new Date(dateSent)
    return currentDate.getMinutes() - date.getMinutes();
  }

  // Set Title
  setTitle(newTitle: string) {
    const title = 'Find A Pandit' +  (newTitle ? ': ' + newTitle : '');
    this.titleService.setTitle(title);
  }

  logout() {
    this.setToken('');
    this.setUserDetails(null);
    this.setTempleDetails(null);
    this.setFloristDetails(null);
    this.setCrematoriumDetails(null);
    this.setPanditDetails(null);
    this.setLoggedInUserData(null);
    this.setLoginStatus(false);
  }
}
