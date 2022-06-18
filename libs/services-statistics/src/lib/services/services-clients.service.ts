import { Injectable } from '@angular/core';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesClient } from '../models/servicesClient';

@Injectable({
  providedIn: 'root'
})
export class ServicesClientsService {
  apiUrlEvents = environment.apiUrl + 'clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<ServicesClient[]> {
    return this.http.get<ServicesClient[]>(this.apiUrlEvents);
  }
}
