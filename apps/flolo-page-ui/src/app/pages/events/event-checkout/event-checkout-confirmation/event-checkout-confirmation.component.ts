import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EventCheckoutService } from '../../../../services/event-checkout.service';

@Component({
  selector: 'flpu-event-checkout-confirmation',
  templateUrl: './event-checkout-confirmation.component.html',
  styleUrls: ['./event-checkout-confirmation.component.scss']
})
export class EventCheckoutConfirmationComponent implements OnInit {

  eventData: any;
  personalData: any;

  constructor(private router: Router, private location: Location, private eventCheckoutService: EventCheckoutService) { }

  ngOnInit(): void {
    this.eventData = this.eventCheckoutService.checkoutInformation.eventData
    this.personalData = this.eventCheckoutService.checkoutInformation.personalData
  }

  previousPage() {
    this.location.back();
  }

  send() {
    this.eventCheckoutService.complete();
  }
}
