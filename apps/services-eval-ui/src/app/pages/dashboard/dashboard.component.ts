import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicesActivity, ServicesStatistic, ServicesStatisticsService } from '@dbl-dev/services-statistics';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'seu-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  servicesStatistics: ServicesStatistic[];
  consultantStatistics: ServicesStatistic[];
  endSubs$: Subject<any> = new Subject();

  chartData: any;
  chartOptions: any;

  constructor(private servicesStatisticsService: ServicesStatisticsService) { }

  ngOnInit(): void {
    this._getServicesStatistics();

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            // color: '#EBEDEF'
            color: '#495057'
          }
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getServicesStatistics() {
    this.servicesStatisticsService.getServicesStatistics(false).pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.servicesStatistics = res;
      this.consultantStatistics = this.servicesStatistics.filter(value =>
        value.employee != 'Kath, Filip' &&
        value.employee != 'Entner, Johannes' &&
        value.employee != 'Bleidt, David'
      );
      this.chartData = {
        labels: ['Verrechenbar','Support','Meeting', 'Training', 'Other'],
        datasets: [
          {
            data: [
              this.servicesStatisticsService.getTotalBillable(this.consultantStatistics, this.servicesStatistics),
              this.servicesStatisticsService.getTotalSupport(this.consultantStatistics),
              this.servicesStatisticsService.getTotalMeeting(this.consultantStatistics),
              this.servicesStatisticsService.getTotalTraining(this.consultantStatistics),
              this.servicesStatisticsService.getTotalOther(this.consultantStatistics)
            ],
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
