//import { Injectable } from '@angular/core';

//import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { map } from 'rxjs/operators';

//import { Observable } from 'rxjs';

//import { of } from 'rxjs';

//import { catchError, tap } from 'rxjs/operators';

//import { AppConfig } from '../config/config';

//import { base } from './token.';

////import { Token } from '../models/token';

////import { Helpers } from '../helpers/helpers';

//@Injectable()

//export class TokenService extends base {

//    private pathAPI = this.config.setting['http://localhost:4200/home'];

//    public errorMessage: string;

//    constructor(private http: HttpClient, private config: AppConfig) { super(); }

//    auth(data: any): any {

//        let body = JSON.stringify(data);

//        return this.getToken(body);

//    }

//    private getToken(body: any): Observable<any> {

//        return this.http.post<any>(this.pathAPI + 'token', body, super.header()).pipe(

//            catchError(super.handleError)

//        );

//    }

//}
