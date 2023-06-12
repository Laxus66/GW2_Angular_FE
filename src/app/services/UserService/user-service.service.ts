import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISignin, ISignup, IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private loggedInUser: Subject<IUser | null> = new Subject<IUser | null>();

  constructor(private http: HttpClient) {}

  setLoggedInUser(user: IUser | null) {
    this.loggedInUser.next(user);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    this.loggedInUser.next(user);
  }

  getLoggedInUser(): Observable<IUser | null> {
    return this.loggedInUser.asObservable();
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.loggedInUser.next(null);
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

  // getUsers(): Observable<IUser[]> {
  //   return this.http.get<IUser[]>(`http://localhost:8088/api/users`);
  // }
  private apiUrl = 'http://localhost:8088/api/users';
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  isAuthenicated(){
    return JSON.parse(localStorage.getItem('user')||'{}');
    
  }
}
