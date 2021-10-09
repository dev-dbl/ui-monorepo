import { Component, OnInit } from '@angular/core';
import { EventsService } from '@dbl-dev/events';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'flpu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getImages('assets/landing-page/images.json').then(images => this.images = images);
  }
}
