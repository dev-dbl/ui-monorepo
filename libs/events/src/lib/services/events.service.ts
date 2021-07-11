import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { environment } from '@dbl-dev/env/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  apiUrlEvents = environment.apiUrl + 'events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrlEvents);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrlEvents, event);
  }
}
