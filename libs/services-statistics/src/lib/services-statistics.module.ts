import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesStatisticsTableComponent } from './components/services-statistics-table/services-statistics-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ServicesStatisticsCardsComponent } from './components/services-statistics-cards/services-statistics-cards.component';
import { ServicesStatisticsActivityTableComponent } from './components/services-statistics-activity-table/services-statistics-activity-table.component';
import { ServicesStatisticsActivitiesTableComponent } from './components/services-statistics-activities-table/services-statistics-activities-table.component';
import { ServicesActivityDetailsComponent } from './components/services-activity-details/services-activity-details.component';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TagModule } from 'primeng/tag';
import { ServicesStatisticsSupportCardsComponent } from './components/services-statistics-support-cards/services-statistics-support-cards.component';

@NgModule({
  declarations: [
    ServicesStatisticsTableComponent,
    ServicesStatisticsCardsComponent,
    ServicesStatisticsActivityTableComponent,
    ServicesStatisticsActivitiesTableComponent,
    ServicesActivityDetailsComponent,
    ServicesStatisticsSupportCardsComponent
  ],
  exports: [
    ServicesStatisticsTableComponent,
    ServicesStatisticsCardsComponent,
    ServicesStatisticsActivityTableComponent,
    ServicesStatisticsSupportCardsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RippleModule,
    DynamicDialogModule,
    TagModule
  ],
  // entryComponents: [ServicesActivityDetailsComponent],
  providers: [DialogService]
})
export class ServicesStatisticsModule { }
