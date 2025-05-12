import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorsService } from '../services/errors.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, private _errorService: ErrorsService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request);
    }
}
