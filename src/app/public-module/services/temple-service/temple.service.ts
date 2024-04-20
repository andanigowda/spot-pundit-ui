import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, isEmpty, retry } from 'rxjs/operators';
import { ApiContant } from 'src/app/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class TempleService {
  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  templeListApi(): Observable<any> {
    return this.http.get(ApiContant.TEMPLE_LIST, this.httpOptions);
  }

  // templeSearchApi(params): Observable<any> {
  //   return this.http.get(`${ApiContant.FIND_ADDRESS}/${params}`, this.httpOptions);
  // }

  zipcodeSearchApi(params): Observable<any> {
    return this.http.get(
      `${ApiContant.FIND_POSTCODE}/${params}`,
      this.httpOptions
    );
  }

  searchDetailsApi(params): Observable<any> {
    const query = Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');
    return this.http
      .get(`${ApiContant.GRANUL_SEARCH}?${query}`, this.httpOptions);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    this._snackBar.open(errorMessage, "Close", {
      duration: 15000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
    });
    return throwError(errorMessage);
  }

  templeSearchApi(params): Observable<any> {
    const query = Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');
    return this.http.get(
      `${ApiContant.GRANUL_SEARCH}?${query}`,
      this.httpOptions
    );
  }

  crematoriumSearchApi(params): Observable<any> {
    const query = Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');
    return this.http.get(
      `${ApiContant.GRANUL_SEARCH}?${query}`,
      this.httpOptions
    );
  }

  floristSearchApi(params): Observable<any> {
    const query = Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');
    return this.http.get(
      `${ApiContant.GRANUL_SEARCH}?${query}`,
      this.httpOptions
    );
  }

  templeDetailsApi(obj): Observable<any> {
    return this.http.post(`${ApiContant.TEMPLE_SEARCH_DETAILS}`, obj);
  }

  crematoriumDetailsApi(id): Observable<any> {
    return this.http.get(
      `${ApiContant.CREMITORIUM_SEARCH_DETAILS}?id=${id}`,
      this.httpOptions
    );
  }

  floristDetailsApi(id): Observable<any> {
    return this.http.get(
      `${ApiContant.FLORIST_SEARCH_DETAILS}?id=${id}`,
      this.httpOptions
    );
  }

  crematoriumListApi(): Observable<any> {
    return this.http.get(
      `${ApiContant.CREAMATORIUM_FEATURE_API}`,
      this.httpOptions
    );
  }

  floristListApi(): Observable<any> {
    return this.http.get(`${ApiContant.FLORIST_FEATURE_API}`, this.httpOptions);
  }

  addFavoriteListApi(params): Observable<any> {
    return this.http.post(`${ApiContant.FAVORITE_INFO}`, params);
  }

  removeFavoriteListApi(params): Observable<any> {
    return this.http.post(`${ApiContant.REMOVE_FAVORITE_INFO}`, params);
  }
}
