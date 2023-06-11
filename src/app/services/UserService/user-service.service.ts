import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISignin, ISignup, IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private loggedInUser: Subject<IUser> = new Subject<IUser>();

  constructor(private http: HttpClient) {}

  setLoggedInUser(user: IUser) {
    this.loggedInUser.next(user);
  }

  getLoggedInUser(): Observable<IUser> {
    return this.loggedInUser.asObservable();
  }

  signIn(account: ISignin): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:8088/api/signin`, account);
  }
  signUp(account: ISignup[]): Observable<ISignup[]> {
    return this.http.post<ISignup[]>(
      `http://localhost:8088/api/signup`,
      account
    );
  }
}
