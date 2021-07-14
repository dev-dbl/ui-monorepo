import { Injectable } from '@angular/core';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sponsor } from '../models/sponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {
  apiUrlEvents = environment.apiUrl + 'sponsors';

  constructor(private http: HttpClient) { }

  getSponsors(): Observable<Sponsor[]> {
    return this.http.get<Sponsor[]>(this.apiUrlEvents);
  }
}
