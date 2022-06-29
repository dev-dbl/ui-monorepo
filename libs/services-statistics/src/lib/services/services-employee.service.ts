import { Injectable } from '@angular/core';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesEmployee } from '../models/servicesEmployee';

@Injectable({
  providedIn: 'root'
})
export class ServicesEmployeeService {
  apiUrlEvents = environment.apiUrl + 'employee';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<ServicesEmployee[]> {
    return this.http.get<ServicesEmployee[]>(this.apiUrlEvents);
  }
}
