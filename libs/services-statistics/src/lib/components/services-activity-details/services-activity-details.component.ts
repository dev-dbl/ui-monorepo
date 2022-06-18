import { Component, OnInit, Optional } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ServicesActivity } from '@dbl-dev/services-statistics';

@Component({
  selector: 'services-activity-details',
  templateUrl: './services-activity-details.component.html',
  styleUrls: ['./services-activity-details.component.scss']
})
export class ServicesActivityDetailsComponent implements OnInit {

  activity: ServicesActivity;

  constructor(@Optional() public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.activity = this.config.data.activity;
  }

  isSameDay(date1: Date, date2: Date) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const bool = d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
    console.log(bool);
    return bool;
  }

}
