import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@dbl-dev/users';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: HomeComponent
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
