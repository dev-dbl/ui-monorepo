import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicesStatistic, ServicesStatisticsService } from '@dbl-dev/services-statistics';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServicesClientsService } from '../../../../../../libs/services-statistics/src/lib/services/services-clients.service';
import { ServicesClient } from '../../../../../../libs/services-statistics/src/lib/models/servicesClient';

@Component({
  selector: 'seu-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit, OnDestroy {

  servicesStatistics: ServicesStatistic[];
  supportStatistics: ServicesStatistic[];
  servicesClients: ServicesClient[];
  endSubs$: Subject<any> = new Subject();
  endSubs2$: Subject<any> = new Subject();

  chartData: any;
  chartOptions: any;

  constructor(private servicesStatisticsService: ServicesStatisticsService, private servicesClientsService: ServicesClientsService) { }

  ngOnInit(): void {
    this._getServicesStatistics();
    this._getServicesClients();

    this.chartOptions = {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
    this.endSubs2$.next();
    this.endSubs2$.complete();
  }

  private _getServicesStatistics() {
    this.servicesStatisticsService.getServicesStatistics().pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.servicesStatistics = res;
      this.supportStatistics = this.servicesStatistics.filter(value =>
        value.supportActivities.length > 0
      );
    });
  }

  private _getServicesClients() {
    this.servicesClientsService.getClients().pipe(takeUntil(this.endSubs2$)).subscribe(res => {
      this.servicesClients = res;
      res = res.filter(c => c.supportHours > 0).sort( (a, b) => a.supportHours > b.supportHours ? 0 : 1 );
      this.chartData = {
        labels: res.map(c => c.name),
        datasets: [
          {
            data: res.map(c => c.supportHours),
            backgroundColor: [
              "#41FF2C",
              "#FF6384",
              "#36A2EB",
              "#BE36EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#41FF2C",
              "#FF6384",
              "#36A2EB",
              "#BE36EB",
              "#FFCE56"
            ]
          }
        ]
      };
    });
  }

}
