import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ApiContant } from 'src/app/constants/api.constants';
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PublicService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  prayerListApi(): Observable<any> {
    return this.http.get(ApiContant.PRAYERS_LIST, this.httpOptions);
  }

  prayerDetailsApi(pId): Observable<any> {
    return this.http.get(`${ApiContant.PRAYER_DETAILS}/${pId}`, this.httpOptions);
  }

  zipcodeListApi(pId): Observable<any> {
    return this.http.get(`${ApiContant.ZIPCODE_LIST}?zip=${pId}`, this.httpOptions);
  }

  partnerFormApi(value): Observable<any> {
    return this.http.post(ApiContant.PARTNER_API_REQUEST, value);
  }

  blogListApi(pageNumber): Observable<any> {
    return this.http.get(`${ApiContant.BLOGS_LIST}?pg=${pageNumber}`, this.httpOptions);
  }

  blogDetailsApi(value): Observable<any> {
    return this.http.post(ApiContant.BLOGS_DETAILS, value);
  }

  //Get User's IP
  getClientIP() : Observable<any> {
    return this.http.get('https://jsonip.com/')
  }

  //Submit Application Form 
  submitApplicationFormApi(value): Observable<any> {
    return this.http.post(ApiContant.SUBMIT_APPLICATION_FORM, value);
  }

  //Get Customer Details
  getCustomerDetails(cId) : Observable<any> {
    return this.http.get(`${ApiContant.CUSTOMER_DETAILS}/${cId}`, this.httpOptions);
  }
}
