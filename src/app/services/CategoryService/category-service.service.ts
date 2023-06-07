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
    return this.http.get<ICategory[]>(`http://localhost:8088/category`)
  }
  getOneCategory(id: any): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:8088/category/${id}`)
  }
  removeCategory(id: any): Observable<ICategory[]> {
    return this.http.delete<ICategory[]>(`http://localhost:8088/category/${id}`)
  }
  updateCategory(category: ICategory): Observable<ICategory[]> {
    return this.http.put<ICategory[]>(`http://localhost:8088/category/${category.id}`, category)
  }
  createCategory(category: ICategory): Observable<ICategory[]> {
    return this.http.post<ICategory[]>(`http://localhost:8088/category`, category)
  }
}
