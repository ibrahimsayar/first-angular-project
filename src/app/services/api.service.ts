import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'https://api.onlinewebtutorblog.com/';

  constructor(
    private http: HttpClient
  ) { }

  getPortfolio() {
    return this.http.get(this.apiUrl + 'projects');
  }
}
