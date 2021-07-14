import { Component, OnInit } from '@angular/core';
import { EventsService, Event } from '@dbl-dev/events';

@Component({
  selector: 'flpu-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this._getEvents();
  }

  private _getEvents() {
    this.eventsService.getEvents().subscribe(res => {
      this.events = res;
    });
  }
}
