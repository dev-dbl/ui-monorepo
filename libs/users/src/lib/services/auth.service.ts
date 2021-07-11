import { Injectable } from '@angular/core';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrlEvents = environment.apiUrl + 'users';

  constructor(private http: HttpClient, private router: Router, private localStorageService: LocalStorageService) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrlEvents}/login`, { email, password });
  }

  logout() {
    this.localStorageService.removeToken();
    this.router.navigate(['/login']);
  }
}
