import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ServicesEmployee,
  ServicesStatistic,
  ServicesStatisticsService
} from '@dbl-dev/services-statistics';
import { takeUntil, map } from 'rxjs/operators';
import { Subject, forkJoin } from 'rxjs';

@Component({
  selector: 'seu-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  servicesStatistics: ServicesStatistic[];
  consultantStatistics: ServicesStatistic[];
  endSubs$: Subject<any> = new Subject();

  billable: number;
  support: number;
  meeting: number;
  sales: number;
  training: number;
  other: number;
  total: number;
  billableConsulting: number;
  supportConsulting: number;
  meetingConsulting: number;
  salesConsulting: number;
  trainingConsulting: number;
  otherConsulting: number;
  totalConsulting: number;

  constructor(private servicesStatisticsService: ServicesStatisticsService) { }

  ngOnInit(): void {
    this._getServicesStatistics();
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getServicesStatistics() {
    forkJoin([
        this.servicesStatisticsService.getServicesStatistics().pipe(map((val) => {
          return val.map(v => this.servicesStatisticsService.mapServicesStatistic(v));
        })),
        this.servicesStatisticsService.getServicesStatisticsOfBillableEmployees().pipe(map((val) => {
          return val.map(v => this.servicesStatisticsService.mapServicesStatistic(v));
        }))
      ]).pipe(takeUntil(this.endSubs$)).subscribe(res => {
        this.servicesStatistics = res[0];
        this.consultantStatistics = res[1];
        this._loadStats();
    });
  }

  _loadStats() {
    this.billable = this.servicesStatisticsService.getTotalBillable(this.consultantStatistics, this.servicesStatistics);
    this.support = this.servicesStatisticsService.getTotalSupport(this.servicesStatistics);
    this.meeting = this.servicesStatisticsService.getTotalMeeting(this.servicesStatistics);
    this.sales = this.servicesStatisticsService.getTotalSales(this.servicesStatistics);
    this.training = this.servicesStatisticsService.getTotalTraining(this.servicesStatistics);
    this.other = this.servicesStatisticsService.getTotalOther(this.servicesStatistics);

    this.total = this.billable + this.support + this.meeting + this.sales + this.training + this.other;

    this.billableConsulting = this.servicesStatisticsService.getTotalBillable(this.consultantStatistics, this.servicesStatistics);
    this.supportConsulting = this.servicesStatisticsService.getTotalSupport(this.consultantStatistics);
    this.meetingConsulting = this.servicesStatisticsService.getTotalMeeting(this.consultantStatistics);
    this.salesConsulting = this.servicesStatisticsService.getTotalSales(this.consultantStatistics);
    this.trainingConsulting = this.servicesStatisticsService.getTotalTraining(this.consultantStatistics);
    this.otherConsulting = this.servicesStatisticsService.getTotalOther(this.consultantStatistics);

    this.totalConsulting = this.billableConsulting + this.supportConsulting + this.meetingConsulting + this.salesConsulting + this.trainingConsulting + this.otherConsulting;
  }

  getPercent(part: number, total: number): number {
    return part / total;
  }

  getWidth(percent: number) {
    return { 'width': `${percent}%` };
  }

}
