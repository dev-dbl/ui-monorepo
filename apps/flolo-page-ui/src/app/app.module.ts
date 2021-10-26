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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { EventCheckoutPersonalDataComponent } from './pages/events/event-checkout/event-checkout-personal-data/event-checkout-personal-data.component';
import { EventCheckoutComponent } from './pages/events/event-checkout/event-checkout.component';
import { StepsModule } from 'primeng/steps';
import { EventCheckoutService } from './services/event-checkout.service';
import { EventCheckoutConfirmationComponent } from './pages/events/event-checkout/event-checkout-confirmation/event-checkout-confirmation.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { SponsorsService } from '@dbl-dev/sponsors';
import { GalleriaModule } from 'primeng/galleria';
import { ContactFormComponent } from './pages/general/contact-form/contact-form.component';
import { FaqComponent } from './pages/general/faq/faq.component';
import { BeachteamComponent } from './pages/general/beachteam/beachteam.component';
import { DreiSeenTourComponent } from './pages/camps/drei-seen-tour/drei-seen-tour.component';
import { BeachcampsComponent } from './pages/camps/beachcamps/beachcamps.component';
import { CheckoutComponent } from './pages/camps/beachcamps/checkout/checkout.component';
import { CheckoutPersonDataComponent } from './pages/camps/beachcamps/checkout/checkout-person-data/checkout-person-data.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckoutConfirmationComponent } from './pages/camps/beachcamps/checkout/checkout-confirmation/checkout-confirmation.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { CheckoutPaymentComponent } from './pages/camps/beachcamps/checkout/checkout-payment/checkout-payment.component';
import { DropdownModule } from 'primeng/dropdown';
import { ImpressumComponent } from './pages/general/impressum/impressum.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, EventsListComponent, NavComponent, EventDetailsComponent, SponsorsListComponent, EventCheckoutPersonalDataComponent, EventCheckoutComponent, EventCheckoutConfirmationComponent, ContactFormComponent, FaqComponent, BeachteamComponent, DreiSeenTourComponent, BeachcampsComponent, CheckoutComponent, CheckoutPersonDataComponent, CheckoutConfirmationComponent, CheckoutPaymentComponent, ImpressumComponent],
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
        TagModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        InputTextareaModule,
        ToastModule,
        StepsModule,
        KeyFilterModule,
        MessageModule,
        GalleriaModule,
        InputSwitchModule,
        NgxPayPalModule,
        DropdownModule
    ],
  providers: [EventsService, SponsorsService, MessageService, EventCheckoutService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
