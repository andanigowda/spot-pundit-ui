import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiContant } from 'src/app/constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class PujaService {

  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  pujaDetailsApi(pId): Observable<any> {
    return this.http.get(`${ApiContant.PUJAS_LIST}/${pId}`, this.httpOptions);
  }

  pujasListApi(): Observable<any> {
    return this.http.get(ApiContant.PUJAS_LIST, this.httpOptions);
  }

  pujaRecipesListApi(): Observable<any> {
    return this.http.get(ApiContant.PUJARECIPES_LIST, this.httpOptions);
  }
  
  pujaSamagriListApi(): Observable<any> {
    return this.http.get(ApiContant.PUJASAMAGRI_LIST, this.httpOptions);
  }

  pujaSamagriDetailsApi(value): Observable<any> {
    return this.http.post(ApiContant.PUJASAMAGRI_DETAILS, value);
  }
}