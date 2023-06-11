import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  signIn(account: any): Observable<any> {
    return this.http.post(`http://localhost:8088/api/signin`, account)
  }
  signUp(account: IUser): Observable<IUser[]> {
    return this.http.post<IUser[]>(`http://localhost:8088/api/signup`, account)
  }
}
