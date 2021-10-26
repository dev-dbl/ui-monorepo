import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, EventsService } from '@dbl-dev/events';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { EVENT_STATUS } from '../../../../../../../libs/events/src/lib/models/event.constants';

@Component({
  selector: 'flpu-beachcamps',
  templateUrl: './beachcamps.component.html',
  styleUrls: ['./beachcamps.component.scss']
})
export class BeachcampsComponent implements OnInit, OnDestroy {

  endSubs$: Subject<any> = new Subject();
  images: any;
  camps: Event[] = [];
  campStatus = EVENT_STATUS;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getImages('assets/beachcamps/images.json').then(images => this.images = images);

    this.eventsService.getEvents().pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.camps = res;
    });
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

}
