import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ServicesActivitiesService,
  ServicesAnomaly, ServicesEmployee,
  ServicesEmployeeAnomaly
} from '@dbl-dev/services-statistics';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServicesAnomalyService } from '@dbl-dev/services-statistics';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'seu-services-check',
  templateUrl: './services-check.component.html',
  styleUrls: ['./services-check.component.scss']
})
export class ServicesCheckComponent implements OnInit, OnDestroy {

  anomalyNodes: TreeNode[];
  servicesEmployeeAnomalies: ServicesEmployeeAnomaly[];
  servicesAnomalies: ServicesAnomaly[];
  uploadCollapsed = false;

  endSubs$: Subject<any> = new Subject();
  endSubs2$: Subject<any> = new Subject();

  constructor(private servicesActivitiesService: ServicesActivitiesService, private servicesAnomalyService: ServicesAnomalyService) { }

  ngOnInit(): void {
    this.anomalyNodes = [];
    this.servicesEmployeeAnomalies = [];
    this.servicesAnomalies = [];
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
    this.endSubs2$.next();
    this.endSubs2$.complete();
  }

  onUpload(event: any) {
    this.servicesActivitiesService.uploadFile(event.files[0]).pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.servicesAnomalyService.getEmployeeAnomaliesByFileName(res.message).pipe(takeUntil(this.endSubs2$)).subscribe(res2 => {
        this.servicesEmployeeAnomalies = [];
        res2.forEach(r => {
          const empAnomaly = Object.assign(new ServicesEmployeeAnomaly(), r);
          empAnomaly.employee = Object.assign(new ServicesEmployee(), empAnomaly.employee);
          this.servicesEmployeeAnomalies.push(empAnomaly);
        });
        this.uploadCollapsed = true;
      });
    });
  }
}
