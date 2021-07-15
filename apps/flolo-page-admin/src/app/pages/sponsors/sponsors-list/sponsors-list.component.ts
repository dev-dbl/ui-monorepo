import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sponsor, SponsorsService } from '@dbl-dev/sponsors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'flpa-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.scss']
})
export class SponsorsListComponent implements OnInit, OnDestroy {

  sponsors: Sponsor[];
  endSubs$: Subject<any> = new Subject();

  constructor(private router: Router, private sponsorsService: SponsorsService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this._getSponsors();
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  editSponsor(sponsor: Sponsor) {
    this.router.navigate([`sponsors/form/${sponsor.id}`]);
  }

  deleteSponsor(sponsor: Sponsor) {
    this.confirmationService.confirm({
      message: `Möchten Sie den Sponsor '${sponsor.name}' wirklich löschen?`,
      header: 'Bestätigung',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.sponsorsService.deleteSponsor(sponsor).subscribe(res => {
            this._getSponsors();

            this.messageService.add({
              severity: 'success',
              summary: 'Erfolgreich',
              detail: 'Sponsor wurde gelöscht'
            });
          },
          err => {
            this.messageService.add({
              severity: 'error',
              summary: 'Fehler',
              detail: 'Fehler beim Löschen des Sponsors'
            });
          });
      },
      reject: (type: any) => {
      }
    });
  }

  private _getSponsors() {
    this.sponsorsService.getSponsors().pipe(takeUntil(this.endSubs$)).subscribe(res => {
      this.sponsors = res;
    });
  }
}
