import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WorkoutService {
    private headers: HttpHeaders;
    private accessPointUrl: string = 'http://localhost:2000/student';
    private tokenPointUrl: string = 'http://localhost:2000/Login';

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': window.localStorage.getItem('access_token')
        });
    }

    public get() {
        return this.http.get(this.accessPointUrl + '/getData', { headers: this.headers });
    }

    public getByID(id) {
        return this.http.get(this.accessPointUrl + '/' + id ,{ headers: this.headers });
    }

    public add(payload) {
        return this.http.post(this.accessPointUrl + '/insertData', payload, { headers: this.headers });
    }

    public remove(id) {
        return this.http.delete(this.accessPointUrl + '/' + id, { headers: this.headers });
    }

    public update(payload) {
        return this.http.put(this.accessPointUrl + '/' + payload.studentId, payload, { headers: this.headers });
    }

    public login(payload) {
        debugger;
        return this.http.post(this.tokenPointUrl, payload, { headers: this.headers });
    }
}
