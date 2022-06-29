import { Component, Input, OnInit } from '@angular/core';
import { ServicesAnomaly } from '@dbl-dev/services-statistics';

@Component({
  selector: 'services-anomalies-table',
  templateUrl: './services-anomalies-table.component.html',
  styleUrls: ['./services-anomalies-table.component.scss']
})
export class ServicesAnomaliesTableComponent implements OnInit {

  @Input() servicesAnomalies: ServicesAnomaly[];

  constructor() { }

  ngOnInit(): void {
  }

}
