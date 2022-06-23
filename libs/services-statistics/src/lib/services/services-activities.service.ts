import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient } from '@angular/common/http';
import { ServicesActivity } from '../models/servicesActivity';

@Injectable({
  providedIn: 'root'
})
export class ServicesActivitiesService {
  apiUrlEvents = environment.apiUrl + 'activities';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<string>(`${this.apiUrlEvents}/uploadFile`, formData);
  }

  uploadActivities(file: File): Observable<ServicesActivity[]> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<ServicesActivity[]>(`${this.apiUrlEvents}/upload`, formData);
  }
}
