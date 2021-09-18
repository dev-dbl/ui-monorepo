import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { environment } from '@dbl-dev/env/environment';
import { EventBooking } from '../models/eventBooking';
import { Sponsor } from '@dbl-dev/sponsors';
import { EventRegistration } from '../models/eventRegistration';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  apiUrlEvents = environment.apiUrl + 'events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrlEvents);
  }

  getEvent(eventId: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrlEvents}/${eventId}`);
  }

  createEvent(eventData: FormData): Observable<Event> {
    return this.http.post<Event>(this.apiUrlEvents, eventData);
  }

  editEvent(eventData: FormData, eventId: string): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrlEvents}/${eventId}`, eventData);
  }

  deleteEvent(event: Event): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlEvents}/${event.id}`);
  }

  addEventRegistration(eventRegistration: EventRegistration): Observable<EventRegistration> {
    return this.http.post<EventRegistration>(`${this.apiUrlEvents}/registration`, eventRegistration);
  }

  editEventRegistration(eventRegistration: EventRegistration): Observable<EventRegistration> {
    return this.http.put<EventRegistration>(`${this.apiUrlEvents}/registration/${eventRegistration.id}`, eventRegistration);
  }
}
