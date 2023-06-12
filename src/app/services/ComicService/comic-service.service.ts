import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComic } from 'src/app/interfaces/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  constructor(private http: HttpClient) { }
  getAllComics(): Observable<IComic[]> {
    return this.http.get<IComic[]>(`http://localhost:8088/api/comic`)
  }
  getOneComic(_id: string): Observable<IComic[]> {
    return this.http.get<IComic[]>(`http://localhost:8088/api/comic/${_id}`)
  }
  removeComic(_id: string): Observable<IComic[]> {
    return this.http.delete<IComic[]>(`http://localhost:8088/api/comic/${_id}`)
  }
  updateComic(comic: IComic): Observable<IComic[]> {
    return this.http.put<IComic[]>(`http://localhost:8088/api/comic/${comic._id}/update`, comic)
  }
  createComic(comic: IComic): Observable<IComic[]> {
    return this.http.post<IComic[]>(`http://localhost:8088/api/comic/add`, comic)
  }
}
