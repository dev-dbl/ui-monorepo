import { Component, Input, OnInit } from '@angular/core';
import { ServicesActivity, ServicesStatistic, ServicesStatisticsService } from '@dbl-dev/services-statistics';

@Component({
  selector: 'services-statistics-cards',
  templateUrl: './services-statistics-cards.component.html',
  styleUrls: ['./services-statistics-cards.component.scss']
})
export class ServicesStatisticsCardsComponent implements OnInit {

  @Input() servicesStatistics: ServicesStatistic[];
  @Input() consultantStatistics: ServicesStatistic[];

  constructor(private servicesStatisticsService: ServicesStatisticsService) { }

  ngOnInit(): void {
  }

  getTotalBillable(): number {
    return this.servicesStatisticsService.getTotalBillable(this.consultantStatistics, this.servicesStatistics);
  }

  getBillableCustomerCount(): number {
    return this.servicesStatisticsService.getBillableCustomerCount(this.consultantStatistics);
  }

  getTotalBillablePossible(): number {
    return this.servicesStatisticsService.getTotalBillablePossible(this.consultantStatistics, this.servicesStatistics);
  }

  getTotalSupport(): number {
    return this.servicesStatisticsService.getTotalSupport(this.consultantStatistics);
  }

  getSupportCustomerCount(): number {
    return this.servicesStatisticsService.getSupportCustomerCount(this.consultantStatistics);
  }

}
