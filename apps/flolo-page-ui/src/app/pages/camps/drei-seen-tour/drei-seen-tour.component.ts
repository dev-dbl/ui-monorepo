import { Component, OnInit } from '@angular/core';
import { EventsService } from '@dbl-dev/events';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'flpu-drei-seen-tour',
  templateUrl: './drei-seen-tour.component.html',
  styleUrls: ['./drei-seen-tour.component.scss']
})
export class DreiSeenTourComponent implements OnInit {

  images: any;
  events: any[];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getImages('assets/events/3_seen_tour/images.json').then(images => this.images = images);

    this.events = [
      {status: 'Mattsee', date: '15/06/2022', icon: PrimeIcons.SHIELD, color: '#9C27B0', image: 'assets/events/3_seen_tour/DJI_0231-Pano-2.jpg'},
      {status: 'Mondsee', date: '15/07/2022', icon: PrimeIcons.SHIELD, color: '#673AB7', image: 'assets/events/3_seen_tour/Mondsee_Drohne_001-1.jpg'},
      {status: 'Attersee', date: '15/08/2022', icon: PrimeIcons.SHIELD, color: '#FF9800', image: 'assets/events/3_seen_tour/3Seentour_Unterach_2021.jpg'}
    ];
  }

}
