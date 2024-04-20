import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiContant } from 'src/app/constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class CareerService {

  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  careerFormApi(value): Observable<any> {
    return this.http.post(ApiContant.CAREER_FORM, value);
  }
}
