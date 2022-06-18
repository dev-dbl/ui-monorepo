import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicesActivitiesService, ServicesActivity } from '@dbl-dev/services-statistics';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'seu-upload-activities',
  templateUrl: './upload-activities.component.html',
  styleUrls: ['./upload-activities.component.scss']
})
export class UploadActivitiesComponent implements OnInit, OnDestroy {

  activities: ServicesActivity[];
  endSubs$: Subject<any> = new Subject();

  constructor(private servicesActivitiesService: ServicesActivitiesService) { }

  ngOnInit(): void {
    this.activities = [];
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  onUpload(event: any) {
    for (const file of event.files) {
      this.servicesActivitiesService.uploadActivities(file).pipe(takeUntil(this.endSubs$)).subscribe(res => {
        this.activities = res;
      });
    }
  }

}
