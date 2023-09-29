import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/sagas`)
  }

  getSearchQuery(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/sagas?q=${query}`)
  }

  getCategories(): Observable<any> {
    let categories: any = [];

    return this.http.get<Product[]>(`${this.baseUrl}/sagas`).pipe(
      map((response) => response.map(product => product.editorial))
    )
  }
}
