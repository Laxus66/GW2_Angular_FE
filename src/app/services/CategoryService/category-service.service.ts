import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:8088/api/category`)
  }
  getOneCategory(_id: any): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:8088/api/category/${_id}`)
  }
  removeCategory(_id: any): Observable<ICategory[]> {
    return this.http.delete<ICategory[]>(`http://localhost:8088/api/category/${_id}`)
  }
  updateCategory(category: ICategory): Observable<ICategory[]> {
    return this.http.put<ICategory[]>(`http://localhost:8088/api/category/${category._id}`, category)
  }
  createCategory(category: ICategory): Observable<ICategory[]> {
    return this.http.post<ICategory[]>(`http://localhost:8088/api/category`, category)
  }
}
