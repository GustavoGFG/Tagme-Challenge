import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiUrl + '/items';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }
  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }
}
