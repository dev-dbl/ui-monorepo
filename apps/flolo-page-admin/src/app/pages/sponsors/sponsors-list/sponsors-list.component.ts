import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sponsor, SponsorsService } from '@dbl-dev/sponsors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'flpa-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.scss']
})
export class SponsorsListComponent implements OnInit, OnDestroy {

  sponsors: Sponsor[];
  endSubs$: Subject<any> = new Subject();

  constructor(private sponsorsService: SponsorsService) { }

  ngOnInit(): void {
    this._getSponsors();
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getSponsors() {
    this.sponsorsService.getSponsors().pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.sponsors = res;
    })
  }
}
