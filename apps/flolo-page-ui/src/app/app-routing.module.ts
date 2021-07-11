import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '@dbl-dev/users';
import { EventsListComponent } from './pages/events/events-list/events-list.component';
import { EventDetailsComponent } from './pages/events/event-details/event-details.component';
import { SponsorsListComponent } from './pages/sponsors/sponsors-list/sponsors-list.component';

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
    path: 'camps/details',
    component: EventDetailsComponent
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
