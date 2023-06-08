import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignin, ISignup } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  signIn(account: ISignin): Observable<ISignin[]> {
    return this.http.post<ISignin[]>(`http://localhost:8088/signin`, account)
  }
  signUn(account: ISignup): Observable<ISignup[]> {
    return this.http.post<ISignup[]>(`http://localhost:8088/signup`, account)
  }
}
