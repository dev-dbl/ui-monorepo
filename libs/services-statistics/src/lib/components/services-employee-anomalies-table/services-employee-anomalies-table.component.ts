import { Component, Input, OnInit } from '@angular/core';
import { ServicesEmployeeAnomaly } from '@dbl-dev/services-statistics';

@Component({
  selector: 'services-employee-anomalies-table',
  templateUrl: './services-employee-anomalies-table.component.html',
  styleUrls: ['./services-employee-anomalies-table.component.scss']
})
export class ServicesEmployeeAnomaliesTableComponent implements OnInit {

  @Input() servicesEmployeeAnomalies: ServicesEmployeeAnomaly[];

  constructor() { }

  ngOnInit(): void {
  }

}
