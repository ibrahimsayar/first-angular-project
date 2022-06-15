import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private http: HttpClient
  ) { }

  getPhotos() {
    return this.http.get(this.apiUrl + 'photos');
  }
}
