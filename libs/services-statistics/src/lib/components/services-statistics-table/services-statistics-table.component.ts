import { Component, Input, OnInit } from '@angular/core';
import { ServicesStatistic } from '@dbl-dev/services-statistics';

@Component({
  selector: 'services-statistics-table',
  templateUrl: './services-statistics-table.component.html',
  styleUrls: ['./services-statistics-table.component.scss']
})
export class ServicesStatisticsTableComponent implements OnInit {

  @Input() servicesStatistics: ServicesStatistic[];

  constructor() { }

  ngOnInit(): void {
  }

}
