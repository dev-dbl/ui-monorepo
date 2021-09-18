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
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SponsorsFormComponent } from './pages/sponsors/sponsors-form/sponsors-form.component';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SponsorsService } from '@dbl-dev/sponsors';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CampsListComponent } from './pages/camps/camps-list/camps-list.component';
import { CampsFormComponent } from './pages/camps/camps-form/camps-form.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { InputNumberModule } from 'primeng/inputnumber';
import { CampsRegistrationsComponent } from './pages/camps/camps-registrations/camps-registrations.component';
import { GalleriaModule } from 'primeng/galleria';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [AppComponent, ShellComponent, DashboardComponent, SponsorsListComponent, SidebarComponent, SponsorsFormComponent, CampsListComponent, CampsFormComponent, CampsRegistrationsComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    CalendarModule,
    InputTextareaModule,
    EditorModule,
    InputNumberModule,
    GalleriaModule,
    TagModule,
    BadgeModule
  ],
  providers: [SponsorsService, MessageService, ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
