import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private localStorageService: LocalStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAllowed = false;
    isAllowed = this._checkToken();

    if (!isAllowed)
      this.router.navigate(['/login']);

    return isAllowed;
  }

  private _checkToken(): boolean {
    const token = this.localStorageService.getToken();
    if (token)
    {
      const tokenSplitted = token.split('.');
      if (tokenSplitted.length !== 3)
        return false;
      else
      {
        const tokenDecoded = JSON.parse(atob(tokenSplitted[1]));
        if (tokenDecoded.isAdmin && !this._tokenExpired(tokenDecoded.exp))
          return true;
      }
    }

    return false;
  }

  private _tokenExpired(expiration: number): boolean {
    return Math.floor(new Date().getTime() / 1000) >= expiration;
  }
}
