
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { LoginFormComponent } from './login-form/login-form.component';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        var token = window.localStorage.getItem('access_token');
        if (token != undefined || token != '') {
            req.headers.append('x-access-token', token );
        }
        return next.handle(req).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                location.reload(true);
            }

            //const error = err.error.message || err.statusText;
            return throwError(err);
        }))

        //console.log(req);
        //return next.handle(req);

        //const authToken = window.localStorage.getItem('access_token');
        //req = req.clone({
        //    setHeaders: {
        //        Authorization: "Bearer " + authToken
        //    }
        //});
        //req.headers.append();
    }
}
