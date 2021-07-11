import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@dbl-dev/users';
import { environment } from '@dbl-dev/env/environment.prod';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isApiUrl) {
      const token = this.localStorageService.getToken();
      if (token)
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
    }

    return next.handle(request);
  }
}
