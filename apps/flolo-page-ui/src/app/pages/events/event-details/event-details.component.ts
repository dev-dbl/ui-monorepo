import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, EventsService } from '@dbl-dev/events';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'flpu-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  event: Event;
  endSubs$: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {
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
    });
  }

}
