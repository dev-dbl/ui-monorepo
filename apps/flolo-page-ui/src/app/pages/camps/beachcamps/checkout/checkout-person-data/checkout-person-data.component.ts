import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCheckoutService } from '../../../../../services/event-checkout.service';
import { EventsService } from '@dbl-dev/events';

@Component({
  selector: 'flpu-checkout-person-data',
  templateUrl: './checkout-person-data.component.html',
  styleUrls: ['./checkout-person-data.component.scss']
})
export class CheckoutPersonDataComponent implements OnInit {

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
    // if (this.personalData.firstName && this.personalData.lastName && this.personalData.email) {
    if (this.personalData.firstName) {
      this.eventCheckoutService.checkoutInformation.personalData = this.personalData;
      this.router.navigate([`beachcamps/checkout/${this.eventData.event.id}/confirmation`]);

      return;
    }

    this.isSubmitted = true;
  }

}
