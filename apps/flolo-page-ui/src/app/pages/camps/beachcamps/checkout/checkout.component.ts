import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subject, Subscription } from 'rxjs';
import { Event, EventsService } from '@dbl-dev/events';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCheckoutService } from '../../../../services/event-checkout.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'flpu-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  items: MenuItem[];
  subscription: Subscription;
  event: Event;
  endSubs$: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, private router: Router, private eventsService: EventsService, private eventCheckoutService: EventCheckoutService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Daten',
        routerLink: 'personal-data'
      },
      // {
      //   label: 'Zahlung',
      //   routerLink: 'payment'
      // },
      {
        label: 'Bestätigung',
        routerLink: 'confirmation'
      }
    ];

    this.route.params.subscribe((params: any) => {
      if (params.eventId) {
        this._getEvent(params.eventId);
      }
    });

    this.subscription = this.eventCheckoutService.chekoutComplete$.subscribe((checkoutInformation: any) => {

      // this.eventsService.bookEvent({
      //   eventId: checkoutInformation.eventData.event.id,
      //   firstName: checkoutInformation.personalData.firstName,
      //   lastName: checkoutInformation.personalData.lastName,
      //   email: checkoutInformation.personalData.email,
      //   comment: checkoutInformation.personalData.comment
      // }).subscribe(res => {
      //     this.messageService.add({
      //       severity: 'success',
      //       summary: 'Erfolgreich',
      //       detail: 'Die Anmeldung wurde aufgenommen.'
      //     });
      //     this.router.navigate(['/']);
      //   },
      //   () => {
      //     this.messageService.add({
      //       severity: 'error',
      //       summary: 'Fehler',
      //       detail: 'Fehler bei der Anmeldung.'
      //     });
      //   });
    });
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();

    this.subscription.unsubscribe();
  }

  private _getEvent(id: string) {
    this.eventsService.getEvent(id).pipe(takeUntil(this.endSubs$)).subscribe(resEvent => {
      this.event = resEvent;
      this.eventCheckoutService.checkoutInformation.eventData.event = this.event;
    });
  }

}
