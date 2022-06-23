import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ServicesActivitiesService,
  ServicesAnomaly,
  ServicesEmployee,
  ServicesStatistic,
  ServicesStatisticsService
} from '@dbl-dev/services-statistics';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServicesAnomalyService } from '../../../../../../libs/services-statistics/src/lib/services/services-anomaly.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'seu-services-check',
  templateUrl: './services-check.component.html',
  styleUrls: ['./services-check.component.scss']
})
export class ServicesCheckComponent implements OnInit, OnDestroy {

  anomalyNodes: TreeNode[];
  servicesAnomalies: ServicesAnomaly[];
  uploadCollapsed = false;

  endSubs$: Subject<any> = new Subject();
  endSubs2$: Subject<any> = new Subject();

  constructor(private servicesActivitiesService: ServicesActivitiesService, private servicesAnomalyService: ServicesAnomalyService) { }

  ngOnInit(): void {
    this.anomalyNodes = [];
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
      this.servicesAnomalyService.getAnomaliesByFileName(res).pipe(takeUntil(this.endSubs2$)).subscribe(res2 => {
        res2.forEach(a => {
          this.anomalyNodes.push({
            label: `${a.type}`,
            type: 'parent',
            data: a.activities.length,
            children : [
              { label: 'Anomaly', type: 'anomaly', data: a.activities }
            ]
          })
        });

        // this.anomalyNodes = [
        //   {
        //     key: '0',
        //     label: '0',
        //     type: 'parent',
        //     children: [
        //       { key: '0-0', label: 'something', type: 'anomaly', data: { id: 1, name: 'idk' } }
        //     ]
        //   }
        // ];

        this.servicesAnomalies = res2;
        this.uploadCollapsed = true;
      })
    });
  }
}
