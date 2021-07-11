import { Injectable } from '@angular/core';

const TOKEN_KEY = 'jwtToken';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  removeToken() {
    return localStorage.removeItem(TOKEN_KEY);
  }
}
