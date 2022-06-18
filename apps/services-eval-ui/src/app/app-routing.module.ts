import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServicesCheckComponent } from './pages/services-check/services-check.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { SupportComponent } from './pages/support/support.component';
import { UploadActivitiesComponent } from './pages/upload-activities/upload-activities.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: ShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'services-check',
        component: ServicesCheckComponent
      },
      {
        path: 'support',
        component: SupportComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'upload',
        component: UploadActivitiesComponent
      }
      // {
      //   path: 'sponsors',
      //   component: SponsorsListComponent
      // },
      // {
      //   path: 'sponsors/form',
      //   component: SponsorsFormComponent
      // },
      // {
      //   path: 'sponsors/form/:sponsorId',
      //   component: SponsorsFormComponent
      // },
      // {
      //   path: 'camps',
      //   component: CampsListComponent
      // },
      // {
      //   path: 'camps/form',
      //   component: CampsFormComponent
      // },
      // {
      //   path: 'camps/form/:campId',
      //   component: CampsFormComponent
      // },
      // {
      //   path: 'camps/registrations/:campId',
      //   component: CampsRegistrationsComponent
      // }
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
