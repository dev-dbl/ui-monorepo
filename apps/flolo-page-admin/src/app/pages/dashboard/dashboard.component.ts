import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flpa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  customersTotal: number;
  customersNew: number;
  incomeTotal: number;
  incomeNew: number;
  campsPlanned: number;
  campsUpcoming: number;

  constructor() { }

  ngOnInit(): void {
    this.customersNew = 5;
    this.customersTotal = 11;
    this.incomeNew = 400;
    this.incomeTotal = 1200;
    this.campsPlanned = 8;
    this.campsUpcoming = 3;
  }

}
