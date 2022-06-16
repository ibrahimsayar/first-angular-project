import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiUrl: string = 'https://api.onlinewebtutorblog.com/';
    humanApiUrl: string = 'https://fakeface.rest/face/json';

    constructor(
        private http: HttpClient
    ) {
    }

    getPortfolio() {
        return this.http.get(this.apiUrl + 'photos');
    }

    getEmployees() {
        return this.http.get(this.apiUrl + 'employees');
    }

    getHuman() {
        return this.http.get(this.humanApiUrl);
    }
}
