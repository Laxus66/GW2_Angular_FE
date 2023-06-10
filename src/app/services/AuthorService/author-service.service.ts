import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from 'src/app/interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  constructor(private http: HttpClient) { }
  getAllAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(`http://localhost:8088/author`)
  }
  getOneAuthor(id: any): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(`http://localhost:8088/author/${id}`)
  }
  removeAuthor(id: any): Observable<IAuthor[]> {
    return this.http.delete<IAuthor[]>(`http://localhost:8088/author/${id}`)
  }
  updateAuthor(author: IAuthor): Observable<IAuthor[]> {
    return this.http.put<IAuthor[]>(`http://localhost:8088/author/${author.id}`, author)
  }
  createAuthor(author: IAuthor): Observable<IAuthor[]> {
    return this.http.post<IAuthor[]>(`http://localhost:8088/author`, author)
  }
}
