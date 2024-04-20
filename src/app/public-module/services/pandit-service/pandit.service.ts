import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiContant } from 'src/app/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class PanditService {
  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  panditListApi(): Observable<any> {
    return this.http.get(ApiContant.PANDIT_LIST, this.httpOptions);
  }

  panditFeaturedListApi(): Observable<any> {
    return this.http.get(ApiContant.PANDIT_FEATURED_LIST, this.httpOptions);
  }

  panditDetailsApi(value): Observable<any> {
    return this.http.post(`${ApiContant.PANDIT_LIST}`, value);
  }

  panditInquiryApi(value): Observable<any> {
    return this.http.post(`${ApiContant.REGISTER_CUST_INQUIRY}`, value);
  }

  getLanguageApi(): Observable<any> {
    return this.http.get(`${ApiContant.LANGUAGES}`, this.httpOptions);
  }
}
