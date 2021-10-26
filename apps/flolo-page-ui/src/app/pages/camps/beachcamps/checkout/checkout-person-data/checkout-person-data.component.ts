import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCheckoutService } from '../../../../../services/event-checkout.service';
import { Event, EventsService } from '@dbl-dev/events';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'flpu-checkout-person-data',
  templateUrl: './checkout-person-data.component.html',
  styleUrls: ['./checkout-person-data.component.scss']
})
export class CheckoutPersonDataComponent implements OnInit {

  isSubmitted = false;
  personalData: any;
  eventData: any;
  camps: Event[];
  campSelected = false;
  endSubs$: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, private router: Router, private eventCheckoutService: EventCheckoutService, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.personalData = this.eventCheckoutService.getCheckoutInformation().personalData;
    this.eventData = this.eventCheckoutService.getCheckoutInformation().eventData;
    if (this.eventData.event.id) {
      this.campSelected = true;
    } else {
      this.campSelected = false;
      this._loadCamps();
    }
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  _loadCamps(): void {
    this.eventsService.getEvents().pipe(takeUntil(this.endSubs$)).subscribe(resEvents => {
      this.camps = resEvents;
    });
  }

  nextPage() {
    if (this.eventData.event.id && this.personalData.firstName && this.personalData.lastName && this.personalData.email) {
      this.eventCheckoutService.checkoutInformation.personalData = this.personalData;
      // this.router.navigate([`beachcamps/checkout/${this.eventData.event.id}/payment`]);
      this.router.navigate([`beachcamps/checkout/${this.eventData.event.id}/confirmation`]);

      return;
    }

    this.isSubmitted = true;
  }

}
