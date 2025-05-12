import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private AppUrl: string = 'https://tu-backend-host/api/';
  private APIUrl: string;
  constructor(private http: HttpClient) {
    this.AppUrl = environment.TSEURL
    this.APIUrl = 'api/user'
  }

  signIn(user: User): Observable<any> {
    return this.http.post(`${this.AppUrl}${this.APIUrl}/register`, user)
  }
  logIn(user: User): Observable<string> {
    return this.http.post<string>(`${this.AppUrl}${this.APIUrl}/login`, user)
  }


}
