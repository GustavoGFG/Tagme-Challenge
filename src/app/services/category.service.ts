import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/Category';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiUrl + '/categorias';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
  add(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }
}
