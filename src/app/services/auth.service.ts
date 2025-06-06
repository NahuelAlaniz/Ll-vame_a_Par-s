import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'https://llevameaparis.vercel.app/';

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(this.apiUrl, { username, password });
    }
}
