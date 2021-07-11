import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AccordionModule } from 'primeng/accordion';
import { EventsListComponent } from './pages/events/events-list/events-list.component';
import { CardModule } from 'primeng/card';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { EventsService } from '@dbl-dev/events';
import { JwtInterceptor, UsersModule } from '@dbl-dev/users';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './shared/nav/nav.component';
import { RippleModule } from 'primeng/ripple';
import { UiModule } from '@dbl-dev/ui';
import { TimelineModule } from 'primeng/timeline';
import { GMapModule } from 'primeng/gmap';
import { EventDetailsComponent } from './pages/events/event-details/event-details.component';
import { SponsorsListComponent } from './pages/sponsors/sponsors-list/sponsors-list.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, EventsListComponent, NavComponent, EventDetailsComponent, SponsorsListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    CardModule,
    HttpClientModule,
    TableModule,
    UsersModule,
    ButtonModule,
    RippleModule,
    UiModule,
    TimelineModule,
    GMapModule,
    CarouselModule,
    TagModule
  ],
  providers: [EventsService, MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
