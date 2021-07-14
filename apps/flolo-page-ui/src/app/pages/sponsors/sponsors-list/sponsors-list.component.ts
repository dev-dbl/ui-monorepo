import { Component, OnInit } from '@angular/core';
import { Sponsor, SponsorsService } from '@dbl-dev/sponsors';

@Component({
  selector: 'flpu-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.scss']
})
export class SponsorsListComponent implements OnInit {

  sponsors: Sponsor[];

  constructor(private sponsorsService: SponsorsService) { }

  ngOnInit(): void {
    this._getSponsors();
  }

  private _getSponsors() {
    this.sponsorsService.getSponsors().subscribe(res => {
      this.sponsors = res;
    });
  }

}
