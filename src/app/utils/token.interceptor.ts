import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorsService } from '../services/errors.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, private _errorService: ErrorsService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = localStorage.getItem('token')
        if (token) {
            console.log("Hola");
            request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
        }
        return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
            if (error.status == 401) {
                this._errorService.messageError(error)
                this.router.navigate(['/logIn'])
            }
            return throwError(() => new Error('Error'))
        }));
    }
}

