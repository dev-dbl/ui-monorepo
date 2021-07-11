import { Component, OnInit } from '@angular/core';
import { EventsService, Event } from '@dbl-dev/events';

@Component({
  selector: 'flpu-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: Event[] = [];

  gMapOptions: any;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events = [
      {
        name: 'Summerclosing',
        description: 'Some description',
        startDate: new Date('2021-09-24T00:00:00'),
        endDate: new Date('2021-09-26T23:59:59'),
        location: 'Strandbad Mattsee',
        status: 'Offen',
        price: 200.00,
        image: 'mattsee.jpg',
        maxParticipants: 32
      },
      {
        name: 'Camp 2',
        description: 'Some description 2',
        startDate: new Date('2021-08-24T00:00:00'),
        endDate: new Date('2021-08-26T23:59:59'),
        location: 'Unterach',
        status: 'Offen',
        price: 200.00,
        maxParticipants: 16
      },
      {
        name: 'Camp 3',
        description: 'Some description 3',
        startDate: new Date('2021-08-10T00:00:00'),
        endDate: new Date('2021-08-12T23:59:59'),
        location: 'Millstätter See',
        status: 'Offen',
        price: 200.00,
        maxParticipants: 64
      }
    ]
    // this.eventsService.getEvents().subscribe(res => {
    //   this.events = res;
    // });

    this.gMapOptions = {
      center: {
        lat: 47.974302861121885,
        lng: 13.107296769401152
      },
      zoom: 12
    };
  }

}
