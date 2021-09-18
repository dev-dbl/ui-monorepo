import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event, EventRegistration, EventsService } from '@dbl-dev/events';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CAMPS_REGISTRATIONS_STATUS } from '../camps-registrations.constants';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'flpa-camps-registrations',
  templateUrl: './camps-registrations.component.html',
  styleUrls: ['./camps-registrations.component.scss']
})
export class CampsRegistrationsComponent implements OnInit, OnDestroy {

  camp: Event;
  registrations: EventRegistration[];
  registrationsStatus = CAMPS_REGISTRATIONS_STATUS;
  endSubs$: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.campId) {
        this._getCamp(params.campId);
      }
    });
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getCamp(campId: string) {
    this.eventsService.getEvent(campId).pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.camp = res;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.registrations = this.camp.eventRegistrations;
    });
  }

  private _editRegistration(registration: EventRegistration) {
    this.eventsService.editEventRegistration(registration).subscribe(() => {
        this._getCamp(registration.event);

        // this.messageService.add({
        //   severity: 'success',
        //   summary: 'Erfolgreich',
        //   detail: 'Camp wurde gelöscht'
        // });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Fehler',
          detail: 'Fehler beim Editieren'
        });
      })
  }

  acceptRegistration(registration: EventRegistration) {
    registration.status = 1;
    this._editRegistration(registration);
  }

  reopenRegistration(registration: EventRegistration) {
    registration.status = 0;
    this._editRegistration(registration);
  }

  rejectRegistration(registration: EventRegistration) {
    registration.status = 2;
    this._editRegistration(registration);
  }
}
