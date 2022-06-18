import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesActivity } from '@dbl-dev/services-statistics';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesActivitiesService {
  apiUrlEvents = environment.apiUrl + 'activities';

  constructor(private http: HttpClient) { }

  uploadActivities(file: File): Observable<ServicesActivity[]> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<ServicesActivity[]>(`${this.apiUrlEvents}/upload`, formData);
  }
}
