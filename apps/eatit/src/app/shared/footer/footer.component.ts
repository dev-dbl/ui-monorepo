import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eatit-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getYear(): string {
    return (new Date()).getFullYear().toString();
  }
}
