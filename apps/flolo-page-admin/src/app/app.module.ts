import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableModule } from 'primeng/table';
import { SponsorsListComponent } from './pages/sponsors/sponsors-list/sponsors-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, UsersModule } from '@dbl-dev/users';

@NgModule({
  declarations: [AppComponent, ShellComponent, DashboardComponent, SponsorsListComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    TableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
