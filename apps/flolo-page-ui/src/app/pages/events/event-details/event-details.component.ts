import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, EventsService } from '@dbl-dev/events';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'flpu-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  event: Event;
  images: any[];
  responsiveOptions: any[];
  endSubs$: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.eventId) {
        this._getEvent(params.eventId);
      }
    });
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getEvent(id: string) {
    this.eventsService.getEvent(id).pipe(takeUntil(this.endSubs$)).subscribe(resEvent => {
      this.event = resEvent;
      this.images = [];
      if (this.event.images) {
        this.images = this.event.images;
      }
    });
  }

}
