import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '@dbl-dev/users';
import { EventsListComponent } from './pages/events/events-list/events-list.component';
import { EventDetailsComponent } from './pages/events/event-details/event-details.component';
import { SponsorsListComponent } from './pages/sponsors/sponsors-list/sponsors-list.component';
import { EventCheckoutComponent } from './pages/events/event-checkout/event-checkout.component';
import { EventCheckoutPersonalDataComponent } from './pages/events/event-checkout/event-checkout-personal-data/event-checkout-personal-data.component';
import { EventCheckoutConfirmationComponent } from './pages/events/event-checkout/event-checkout-confirmation/event-checkout-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'camps',
    canActivate: [AuthGuard],
    component: EventsListComponent
  },
  {
    path: 'camps/:eventId',
    component: EventDetailsComponent
  },
  {
    path: 'camps/checkout/:eventId',
    component: EventCheckoutComponent,
    children: [
      {
        path:'',
        redirectTo: 'personal-data',
        pathMatch: 'full'
      },
      {
        path: 'personal-data',
        component: EventCheckoutPersonalDataComponent
      },
      {
        path: 'confirmation',
        component: EventCheckoutConfirmationComponent
      }
    ]
  },
  {
    path: 'sponsors',
    component: SponsorsListComponent
  }
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
