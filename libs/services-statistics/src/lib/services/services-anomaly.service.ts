import { Injectable } from '@angular/core';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesAnomaly } from '@dbl-dev/services-statistics';

@Injectable({
  providedIn: 'root'
})
export class ServicesAnomalyService {
  apiUrlEvents = environment.apiUrl + 'anomaly';

  constructor(private http: HttpClient) { }

  getAnomalies(): Observable<ServicesAnomaly[]> {
    return this.http.get<ServicesAnomaly[]>(this.apiUrlEvents);
  }

  getAnomaliesByFileName(fileName: string): Observable<ServicesAnomaly[]> {
    return this.http.get<ServicesAnomaly[]>(this.apiUrlEvents, {
      params: new HttpParams().set('fileName', fileName)
    });
  }

  getAnomaliesByFile(file: File): Observable<ServicesAnomaly[]> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<ServicesAnomaly[]>(this.apiUrlEvents, formData);
  }
}
