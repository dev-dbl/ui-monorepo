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

  getSponsor(sponsorId: string): Observable<Sponsor> {
    return this.http.get<Sponsor>(`${this.apiUrlEvents}/${sponsorId}`);
  }

  createSponsor(sponsorData: FormData): Observable<Sponsor> {
    return this.http.post<Sponsor>(this.apiUrlEvents, sponsorData);
  }

  editSponsor(sponsorData: FormData, sponsorId: string): Observable<Sponsor> {
    return this.http.put<Sponsor>(`${this.apiUrlEvents}/${sponsorId}`, sponsorData);
  }

  deleteSponsor(sponsor: Sponsor): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlEvents}/${sponsor.id}`);
  }
}
