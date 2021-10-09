import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsListComponent } from './pages/events/events-list/events-list.component';
import { EventDetailsComponent } from './pages/events/event-details/event-details.component';
import { SponsorsListComponent } from './pages/sponsors/sponsors-list/sponsors-list.component';
import { EventCheckoutComponent } from './pages/events/event-checkout/event-checkout.component';
import { EventCheckoutPersonalDataComponent } from './pages/events/event-checkout/event-checkout-personal-data/event-checkout-personal-data.component';
import { EventCheckoutConfirmationComponent } from './pages/events/event-checkout/event-checkout-confirmation/event-checkout-confirmation.component';
import { ContactFormComponent } from './pages/general/contact-form/contact-form.component';
import { FaqComponent } from './pages/general/faq/faq.component';
import { BeachteamComponent } from './pages/general/beachteam/beachteam.component';
import { DreiSeenTourComponent } from './pages/camps/drei-seen-tour/drei-seen-tour.component';
import { BeachcampsComponent } from './pages/camps/beachcamps/beachcamps.component';
import { CheckoutComponent } from './pages/camps/beachcamps/checkout/checkout.component';
import { CheckoutPersonDataComponent } from './pages/camps/beachcamps/checkout/checkout-person-data/checkout-person-data.component';
import { CheckoutConfirmationComponent } from './pages/camps/beachcamps/checkout/checkout-confirmation/checkout-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '3-seen-tour',
    component: DreiSeenTourComponent
  },
  {
    path: 'beachcamps',
    component: BeachcampsComponent
  },
  {
    path: 'beachcamps/checkout/:eventId',
    component: CheckoutComponent,
    children: [
      {
        path:'',
        redirectTo: 'personal-data',
        pathMatch: 'full'
      },
      {
        path: 'personal-data',
        component: CheckoutPersonDataComponent
      },
      {
        path: 'confirmation',
        component: CheckoutConfirmationComponent
      }
    ]
  },
  {
    path: 'beachteam',
    component: BeachteamComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  }
  // {
  //   path: 'camps',
  //   component: EventsListComponent
  // },
  // {
  //   path: 'camps/:eventId',
  //   component: EventDetailsComponent
  // },
  // {
  //   path: 'camps/checkout/:eventId',
  //   component: EventCheckoutComponent,
  //   children: [
  //     {
  //       path:'',
  //       redirectTo: 'personal-data',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'personal-data',
  //       component: EventCheckoutPersonalDataComponent
  //     },
  //     {
  //       path: 'confirmation',
  //       component: EventCheckoutConfirmationComponent
  //     }
  //   ]
  // },
  // {
  //   path: 'sponsors',
  //   component: SponsorsListComponent
  // }
  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
