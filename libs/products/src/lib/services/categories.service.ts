import { Injectable } from '@angular/core';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiUrlCategories = environment.apiUrl + 'categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrlCategories);
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrlCategories}/${id}`);
  }
}
