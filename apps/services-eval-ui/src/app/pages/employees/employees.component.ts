import { Component, OnDestroy, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ServicesEmployeeService } from '@dbl-dev/services-statistics';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServicesEmployee } from '@dbl-dev/services-statistics';

@Component({
  selector: 'seu-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  data: TreeNode[];
  employees: ServicesEmployee[];
  endSubs$: Subject<any> = new Subject();

  constructor(private servicesEmployeesService: ServicesEmployeeService) { }

  ngOnInit(): void {
    this._getServicesEmployees();
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getServicesEmployees() {
    this.servicesEmployeesService.getEmployees().pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.employees = [];
      res.forEach(r => {
        this.employees.push(Object.assign(new ServicesEmployee(), r));
      });
      // this.employees = res;

      const topLevelSuperior = this.employees.find(e => e.superior === null);
      let map: Map<string, ServicesEmployee[]>;
      // eslint-disable-next-line prefer-const
      map = new Map();
      this.employees.forEach(e => {
        if (map.get(e.department) === undefined)
          map.set(e.department, []);
        map.get(e.department)?.push(e);
      });

      this.data = [{
        label: 'Professional Services',
        expanded: true,
        styleClass: 'department-ps',
        children: [{
          label: topLevelSuperior?.title,
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          // data: { name: topLevelSuperior?.firstName + ' ' + topLevelSuperior?.lastName },
          data: { name: topLevelSuperior?.getFullName() },
          children: [{
            label: 'Consulting',
            expanded: true,
            styleClass: 'department-ps',
            children: map.get('Consulting')?.map(e => this.getEmployeeLeaf(e))
          }, {
            label: 'Support',
            expanded: true,
            styleClass: 'department-ps',
            children: map.get('Support')?.map(e => this.getEmployeeLeaf(e))
          }]
        }]
      }];
    });
  }

  private getEmployeeLeaf(employee: ServicesEmployee): TreeNode {
    return {
      label: employee.title,
      type: 'person',
      styleClass: 'p-person',
      data: { name: employee.firstName + ' ' + employee.lastName }
    };
  }

}
