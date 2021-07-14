import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCheckoutService } from '../../../../services/event-checkout.service';
import { Event, EventsService } from '@dbl-dev/events';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'flpu-checkout-personal-data',
  templateUrl: './event-checkout-personal-data.component.html',
  styleUrls: ['./event-checkout-personal-data.component.scss']
})
export class EventCheckoutPersonalDataComponent implements OnInit, OnDestroy {

  isSubmitted = false;
  personalData: any;
  eventData: any;
  // event: Event;
  // eventId = '';
  endSubs$: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, private router: Router, private eventCheckoutService: EventCheckoutService, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.personalData = this.eventCheckoutService.getCheckoutInformation().personalData;
    this.eventData = this.eventCheckoutService.getCheckoutInformation().eventData;
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  nextPage() {
    if (this.personalData.firstName && this.personalData.lastName && this.personalData.email) {
      this.eventCheckoutService.checkoutInformation.personalData = this.personalData;
      this.router.navigate([`camps/checkout/${this.eventData.event.id}/confirmation`]);

      return;
    }

    this.isSubmitted = true;
  }
}
