import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiContant } from 'src/app/constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class SharedListService {

  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  httpOptionsWithToken(token: string) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${'Bearer'} ${token}`,
    });
  }

  // Country get api method
  countryListApi(): Observable<any> {
    return this.http.get(ApiContant.COUNTRY_LIST_API, this.httpOptions);
  }

  countryCodeApi(): Observable<any> {
    return this.http.get(ApiContant.COUNTRY_CODE_API, this.httpOptions);
  }

  // State get api method
  stateListApi(shortname): Observable<any> {
    return this.http.get(`${ApiContant.STATE_LIST_API}/?country_short_name=${shortname}`, this.httpOptions);
  }

  // City get api method
  cityListApi(cname): Observable<any> {
    return this.http.get(`${ApiContant.CITY_LIST_API}/?state_short_name=${cname}`, this.httpOptions);
  }

  // Zip get api method
  zipListApi(cname): Observable<any> {
    return this.http.get(`${ApiContant.ZIP_LIST_API}/?city=${cname}`, this.httpOptions);
  }

  // Postcode get api method

}
