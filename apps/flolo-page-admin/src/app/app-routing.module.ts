import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@dbl-dev/users';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SponsorsListComponent } from './pages/sponsors/sponsors-list/sponsors-list.component';
import { SponsorsFormComponent } from './pages/sponsors/sponsors-form/sponsors-form.component';
import { CampsFormComponent } from './pages/camps/camps-form/camps-form.component';
import { CampsListComponent } from './pages/camps/camps-list/camps-list.component';
import { CampsRegistrationsComponent } from './pages/camps/camps-registrations/camps-registrations.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'sponsors',
        component: SponsorsListComponent
      },
      {
        path: 'sponsors/form',
        component: SponsorsFormComponent
      },
      {
        path: 'sponsors/form/:sponsorId',
        component: SponsorsFormComponent
      },
      {
        path: 'camps',
        component: CampsListComponent
      },
      {
        path: 'camps/form',
        component: CampsFormComponent
      },
      {
        path: 'camps/form/:campId',
        component: CampsFormComponent
      },
      {
        path: 'camps/registrations/:campId',
        component: CampsRegistrationsComponent
      }
    ]
  },
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
