import { Component, Input, OnInit } from '@angular/core';
import { ServicesActivity } from '@dbl-dev/services-statistics';
import { DialogService } from 'primeng/dynamicdialog';
import { ServicesActivityDetailsComponent } from '../services-activity-details/services-activity-details.component';

@Component({
  selector: 'services-statistics-activity-table',
  templateUrl: './services-statistics-activity-table.component.html',
  styleUrls: ['./services-statistics-activity-table.component.scss']
})
export class ServicesStatisticsActivityTableComponent implements OnInit {

  @Input() activities: ServicesActivity[];

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openActivityDetailsDialog(activity: ServicesActivity) {
    const ref = this.dialogService.open(ServicesActivityDetailsComponent, {
      data: {
        activity: activity
      },
      header: 'Details',
      width: '70%'
    });
  }

}
