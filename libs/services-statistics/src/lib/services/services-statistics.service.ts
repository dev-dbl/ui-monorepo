import { Injectable } from '@angular/core';
import { environment } from '@dbl-dev/env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesStatistic } from '../models/servicesStatistic';
import { ServicesActivity } from '../models/servicesActivity';

@Injectable({
  providedIn: 'root'
})
export class ServicesStatisticsService {
  apiUrlEvents = environment.apiUrl + 'statistics';

  constructor(private http: HttpClient) { }

  getServicesStatistics(anomalyCheck: boolean): Observable<ServicesStatistic[]> {
    return this.http.get<ServicesStatistic[]>(this.apiUrlEvents, {
      params: new HttpParams().set('anomalyCheck', anomalyCheck)
    });
  }

  // UTILS
  getTotalBillable(consultantStatistics: ServicesStatistic[], servicesStatistics: ServicesStatistic[]): number {
    if (consultantStatistics === undefined) {
      return 0;
    } else {
      let billable: number[] = consultantStatistics.map(value => value.billable);
      billable = billable.concat(servicesStatistics.filter(value => value.employee == 'Bleidt, David').map(value => value.billable));

      return billable.reduce((sum, current) => sum + current, 0);
    }
  }

  getBillableCustomerCount(consultantStatistics: ServicesStatistic[]): number {
    if (consultantStatistics === undefined) {
      return 0;
    } else {
      const allSupportActivities: ServicesActivity[] = consultantStatistics.map(value => value.billableActivities).reduce((accumulator, value) => accumulator.concat(value), []);
      const customers: string[] = [];
      allSupportActivities.forEach(value => {
        if (!customers.includes(value.client))
          customers.push(value.client);
      })
      return customers.length;
    }
  }

  getTotalBillablePossible(consultantStatistics: ServicesStatistic[], servicesStatistics: ServicesStatistic[]): number {
    if (consultantStatistics == undefined) {
      return 0;
    } else {
      let possible: number[] = consultantStatistics.map(value => value.billable);
      possible = possible.concat(servicesStatistics.filter(value => value.employee == 'Bleidt, David').map(value => value.billable));
      possible = possible.concat(consultantStatistics.map(value => value.support));
      possible = possible.concat(consultantStatistics.map(value => value.meeting));
      possible = possible.concat(consultantStatistics.map(value => value.training));
      possible = possible.concat(consultantStatistics.map(value => value.other));

      return possible.reduce((sum, current) => sum + current, 0);
    }
  }

  getTotalSupport(statistics: ServicesStatistic[]): number {
    if (statistics === undefined) {
      return 0;
    } else {
      return statistics.map(value => value.support).reduce((sum, current) => sum + current, 0);
    }
  }

  getSupportCustomerCount(statistics: ServicesStatistic[]): number {
    if (statistics === undefined) {
      return 0;
    } else {
      const allSupportActivities: ServicesActivity[] = statistics.map(value => value.supportActivities).reduce((accumulator, value) => accumulator.concat(value), []);
      const customers: string[] = [];
      allSupportActivities.forEach(value => {
        if (!customers.includes(value.client))
          customers.push(value.client);
      })
      return customers.length;
    }
  }

  getTotalMeeting(statistics: ServicesStatistic[]): number {
    if (statistics === undefined) {
      return 0;
    } else {
      return statistics.map(value => value.meeting).reduce((sum, current) => sum + current, 0);
    }
  }

  getTotalSales(statistics: ServicesStatistic[]): number {
    if (statistics === undefined) {
      return 0;
    } else {
      return statistics.map(value => value.sales).reduce((sum, current) => sum + current, 0);
    }
  }

  getTotalTraining(statistics: ServicesStatistic[]): number {
    if (statistics === undefined) {
      return 0;
    } else {
      return statistics.map(value => value.training).reduce((sum, current) => sum + current, 0);
    }
  }

  getTotalOther(statistics: ServicesStatistic[]): number {
    if (statistics === undefined) {
      return 0;
    } else {
      return statistics.map(value => value.other).reduce((sum, current) => sum + current, 0);
    }
  }
}
