import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServicesStatistic } from '@dbl-dev/services-statistics';

@Component({
  selector: 'services-statistics-activities-table',
  templateUrl: './services-statistics-activities-table.component.html',
  styleUrls: ['./services-statistics-activities-table.component.scss']
})
export class ServicesStatisticsActivitiesTableComponent implements OnInit, OnChanges {

  @Input() servicesStatistic: ServicesStatistic;

  tableValue: any[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getTableValue();
  }

  getTableValue() {
    if (this.servicesStatistic === undefined) {
    } else {
      this.tableValue = [];
      this.tableValue.push({
        category: 'Billable',
        activities: this.servicesStatistic.billableActivities,
        hours: this.servicesStatistic.billable
      });
      this.tableValue.push({
        category: 'Support',
        activities: this.servicesStatistic.supportActivities,
        hours: this.servicesStatistic.support
      });
      this.tableValue.push({
        category: 'Meeting',
        activities: this.servicesStatistic.meetingActivities,
        hours: this.servicesStatistic.meeting
      });
      this.tableValue.push({
        category: 'Training',
        activities: this.servicesStatistic.trainingActivities,
        hours: this.servicesStatistic.training
      });
      this.tableValue.push({
        category: 'Sales',
        activities: this.servicesStatistic.salesActivities,
        hours: this.servicesStatistic.sales
      });
      this.tableValue.push({
        category: 'Schulungen',
        activities: this.servicesStatistic.partnerTrainingActivities,
        hours: this.servicesStatistic.partnerTraining
      });
      this.tableValue.push({
        category: 'Development',
        activities: this.servicesStatistic.developmentActivities,
        hours: this.servicesStatistic.development
      });
      this.tableValue.push({
        category: 'Other',
        activities: this.servicesStatistic.otherActivities,
        hours: this.servicesStatistic.other
      });
    }
  }

}
