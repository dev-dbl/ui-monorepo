import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sponsor, SponsorsService } from '@dbl-dev/sponsors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'flpu-beachteam',
  templateUrl: './beachteam.component.html',
  styleUrls: ['./beachteam.component.scss']
})
export class BeachteamComponent implements OnInit, OnDestroy {

  endSubs$: Subject<any> = new Subject();
  responsiveOptions: any;
  sponsors: Sponsor[] = [];

  constructor(private sponsorsService: SponsorsService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.sponsorsService.getSponsors().pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.sponsors = res;
    });
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

}
