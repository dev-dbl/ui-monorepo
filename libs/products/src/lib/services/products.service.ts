import { Injectable } from '@angular/core';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@dbl-dev/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrlProducts = environment.apiUrl + 'products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrlProducts);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrlProducts}/${id}`);
  }
}
