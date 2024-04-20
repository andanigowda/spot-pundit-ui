import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { ApiContant } from 'src/app/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  token;
  headers;

  constructor(
    private http: HttpClient,
    private _router: Router,
    private _sharedService: SharedService,
    private _snackBar: MatSnackBar
  ) {
    this.token = this._sharedService.getToken();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  httpOptionsWithToken(token: string) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${'Bearer'} ${token}`,
    });
  }

  httpOptionsAuth() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${'Bearer'} ${this.token}`,
    });
  }

  // User Register User
  userRegisterPostApi(value): Observable<any> {
    return this.http.post(ApiContant.USER_SIGNUP, value);
  }

  // Pandit Register User
  panditRegisterPostApi(value): Observable<any> {
    return this.http.post(ApiContant.PANDIT_SIGNUP, value);
  }

  // User Login Details
  userLoginPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post(ApiContant.USER_LOGIN, value).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  // Pandit Login Details
  panditLoginPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post(ApiContant.PANDIT_LOGIN, value).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  // temple Login Details
  templeLoginPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post(ApiContant.TEMPLE_LOGIN, value).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  // Pandit Register User
  templeRegisterPostApi(value): Observable<any> {
    return this.http.post(ApiContant.TEMPLE_SIGN_UP, value);
  }

  // User Profile Api
  userProfilePostApi(token: string, userId): Observable<any> {
    return this.http.get(`${''}/${userId}`, {
      headers: this.httpOptionsWithToken(token),
    });
  }

  getUserApiApi(email: string): Observable<any> {
    return this.http.get(
      `${ApiContant.USER_INFO}?email=${email}`,
      this.httpOptions
    );
  }

  updateUserApiApi(params): Observable<any> {
    return this.http.post(`${ApiContant.USER_INFO}`, params);
  }

  // OTP Api
  resetPasswordPutApi(token: string, params) {
    return this.http.put(`${''}`, params, {
      headers: this.httpOptionsWithToken(token),
    });
  }

  // Confirmation Api
  userConfirmationApi(token): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.get(`${''}?token=${token}`, this.httpOptions).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  // Vendor Register User
  vendorRegisterPostApi(value): Observable<any> {
    return this.http.post('', value, this.httpOptions);
  }

  vendorLoginPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post('', JSON.stringify(value), this.httpOptions).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  vendorOtpPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post('', value, this.httpOptions).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  sendToken(token: string) {
    localStorage.setItem('LoggedInVender', token);
  }

  getToken() {
    return localStorage.getItem('LoggedInVender');
  }

  setUser(user: any) {
    localStorage.setItem('LoggedInUser', user);
  }

  getUser() {
    return localStorage.getItem('LoggedInUser');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('LoggedInVender');
    // this._router.navigate(['/' + RoutesConstant.VENDOR_SIGNUP_ROUTE]);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this._sharedService.onShowMessageBar(error.error.errorSummary);
      this._sharedService.setLoading(false);
      return throwError(error);
    };
  }

  // Pandit Register User
  templeSuggersionApi(name): Observable<any> {
    return this.http.get(
      `${ApiContant.TEMPLE_SUGESSION}?name=${name}`,
      this.httpOptions
    );
  }

  zipcodeListApi(pId): Observable<any> {
    return this.http.get(
      `${ApiContant.ZIPCODE_LIST}?zip=${pId}`,
      this.httpOptions
    );
  }

  // User forgot password
  userForgotPassword(value): Observable<any> {
    return this.http.post(`${ApiContant.USER_FORGOT_PASSWORD}`, value);
  }

  // Pandit forgot password
  panditForgotPassword(value): Observable<any> {
    return this.http.post(`${ApiContant.PANDIT_FORGOT_PASSWORD}`, value);
  }

  // Florist forgot password
  floristForgotPassword(value): Observable<any> {
    return this.http.post(`${ApiContant.FLORIST_FORGOT_PASSWORD}`, value);
  }

  // Temple forgot password
  templeForgotPassword(value): Observable<any> {
    return this.http.post(`${ApiContant.TEMPLE_FORGOT_PASSWORD}`, value);
  }

  // Crematorium forgot password
  crematoriumForgotPassword(value): Observable<any> {
    return this.http.post(`${ApiContant.CREMATORIUM_FORGOT_PASSWORD}`, value);
  }

  // florist Login Details
  floristLoginPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post(ApiContant.FLORIST_LOGIN, value).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  // florist register Details
  floristRegisterPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post(ApiContant.FLORIST_SIGNUP, value).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  // Crematorium Login Details
  crematoriumLoginPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post(ApiContant.CREMATORIUM_LOGIN, value).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  // Crematorium register Details
  crematoriumRegisterPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post(ApiContant.CREMATORIUM_SIGNUP, value).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  // Social auth api Details
  socialGoogleAuthPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post(ApiContant.SOCIAL_GOOGLE_AUTH, value).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }

  socialFacebookAuthPostApi(value): Observable<any> {
    this._sharedService.setLoading(true);
    return this.http.post(ApiContant.SOCIAL_FACEBOOK_AUTH, value).pipe(
      tap((response: any) => {
        return response || {};
      }),
      catchError(this.handleError('', [])),
      finalize(() => {
        this._sharedService.setLoading(false);
      })
    );
  }
}
