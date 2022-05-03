import { Injectable } from '@angular/core';
// import {HttpClientModule} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataUrl: string = 'https://jsonplaceholder.cypress.io/'

  constructor(private http: HttpClient) { }

  listUsers(): Observable<Object>{
    return this.http.get(this.dataUrl + "users");
  }

}
