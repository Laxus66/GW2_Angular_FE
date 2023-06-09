import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signup(user: any) : Observable<any>{
    return this.http.post('http://localhost:8088/api/signin',user)
  }

  signin(user: any) : Observable<any>{
    return this.http.post('http://localhost:8088/api/signup',user)
  }
}
