import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sponsor, SponsorsService } from '@dbl-dev/sponsors';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { takeUntil } from 'rxjs/operators';
import { Event, EventsService } from '@dbl-dev/events';

@Component({
  selector: 'flpa-camps-list',
  templateUrl: './camps-list.component.html',
  styleUrls: ['./camps-list.component.scss']
})
export class CampsListComponent implements OnInit, OnDestroy {

  camps: Event[];
  openRegistrationsCount: Map<Event, number> = new Map<Event, number>();
  endSubs$: Subject<any> = new Subject();

  constructor(private router: Router, private eventsService: EventsService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this._getCamps();
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  editCamp(camp: Event) {
    this.router.navigate([`camps/form/${camp.id}`]);
  }

  deleteCamp(camp: Event) {
    this.confirmationService.confirm({
      message: `Möchten Sie das Camp '${camp.name}' wirklich löschen?`,
      header: 'Bestätigung',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.eventsService.deleteEvent(camp).subscribe(() => {
            this._getCamps();

            this.messageService.add({
              severity: 'success',
              summary: 'Erfolgreich',
              detail: 'Camp wurde gelöscht'
            });
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Fehler',
              detail: 'Fehler beim Löschen des Camps'
            });
          });
      },
      reject: (type: any) => {
      }
    });
  }

  private _getCamps() {
    this.eventsService.getEvents().pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.camps = res;
      this.camps.forEach(camp => {
        if (camp.eventRegistrations) {
          this.openRegistrationsCount.set(camp, camp.eventRegistrations.filter(req => req.status === 0).length);
        }
      });
    });
  }
}
