import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  
  contactus(data: any): Observable<any> {
    return this.http.post('https://ky5kzj3815.execute-api.us-east-2.amazonaws.com/prod/portfolio-email', data);
  }
}
