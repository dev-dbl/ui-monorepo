import { Component, Input, OnInit } from '@angular/core';
import { ServicesStatistic, ServicesStatisticsService } from '@dbl-dev/services-statistics';

@Component({
  selector: 'services-statistics-support-cards',
  templateUrl: './services-statistics-support-cards.component.html',
  styleUrls: ['./services-statistics-support-cards.component.scss']
})
export class ServicesStatisticsSupportCardsComponent implements OnInit {

  @Input() servicesStatistics: ServicesStatistic[];
  @Input() supportStatistics: ServicesStatistic[];

  constructor(private servicesStatisticsService: ServicesStatisticsService) { }

  ngOnInit(): void {
  }

  getSupportCustomerCount(): number {
    return this.servicesStatisticsService.getSupportCustomerCount(this.supportStatistics);
  }

  getTotalSupport(): number {
    return this.servicesStatisticsService.getTotalSupport(this.supportStatistics);
  }

}
