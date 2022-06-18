import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event, EventRegistration, EventsService } from '@dbl-dev/events';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CAMPS_REGISTRATIONS_STATUS } from '../camps-registrations.constants';
import { ConfirmationService, MessageService } from 'primeng/api';

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

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

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

        this.messageService.add({
          severity: 'success',
          summary: 'Erfolgreich',
          detail: 'Registrierung gespeichert'
        });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Fehler',
          detail: 'Fehler beim Editieren'
        });
      })
  }

  getCurrentParticipants() {
    return this.registrations.filter(reg => reg.status === 1 || reg.status === 3);
  }

  changeStatus(registration: EventRegistration, regStatus: number) {
    const message = 'Soll die Registrierung von ' + registration.firstName + ' ' + registration.lastName + ' in den Status ' + this.registrationsStatus[regStatus].label + ' geändert werden?';
    this.confirmationService.confirm({
      message: message,
      header: 'Bestätigung',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        registration.status = regStatus;
        this._editRegistration(registration);
      },
      reject: () => {
      }
    });
  }
}
