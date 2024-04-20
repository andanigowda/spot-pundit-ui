import { ApiContant } from 'src/app/constants/api.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/public-module/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class PanditDashboardService {
  token;
  headers;

  constructor(
    private http: HttpClient,
    private _sharedService: SharedService,
  ) {
    this.token = this._sharedService.getToken();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

   // Pandit Change password
   panditChangePassword(value): Observable<any> {
    return this.http.post(`${ApiContant.PANDIT_CHANGE_PASSWORD}`, value);
  }

  // Get pandit info
  getPanditInfo(params): Observable<any> {
    return this.http.post(`${ApiContant.PANDIT_LIST}`, params);
  }

   // Get pandit info
   getLanguageListApi(): Observable<any> {
    return this.http.get(`${ApiContant.LANGUAGE_LIST}`, this.httpOptions);
  }

  // Update pandit info
  updatePanditInfo(value): Observable<any> {
    return this.http.post(`${ApiContant.UPDATE_PANDIT}`, value);
  }

  // Stripe
  stripe(value): Observable<any> {
    return this.http.post(`${ApiContant.PANDIT_STRIPE}`, value);
  }
}
