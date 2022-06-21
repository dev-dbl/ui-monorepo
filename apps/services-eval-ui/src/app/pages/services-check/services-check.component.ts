import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicesEmployee, ServicesStatistic, ServicesStatisticsService } from '@dbl-dev/services-statistics';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'seu-services-check',
  templateUrl: './services-check.component.html',
  styleUrls: ['./services-check.component.scss']
})
export class ServicesCheckComponent implements OnInit, OnDestroy {

  servicesStatistics: ServicesStatistic[];
  endSubs$: Subject<any> = new Subject();

  constructor(private servicesStatisticsService: ServicesStatisticsService) { }

  ngOnInit(): void {
    this._getServicesStatistics();
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getServicesStatistics() {
    this.servicesStatisticsService.getServicesStatistics(true).pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.servicesStatistics = [];
      res.forEach(r => {
        const statistic = Object.assign(new ServicesStatistic(), r);
        statistic.employee = Object.assign(new ServicesEmployee(), statistic.employee);
        this.servicesStatistics.push(statistic);
      });
    });
  }

  countAnomalies(): number {
    let count = 0;
    for (const servicesStatistic of this.servicesStatistics) {
      count += servicesStatistic.anomalies.length;
    }
    return count;
  }
}
