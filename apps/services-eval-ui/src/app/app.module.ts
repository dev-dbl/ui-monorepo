import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ToastModule } from 'primeng/toast';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ServicesStatisticsModule } from '@dbl-dev/services-statistics';
import { AccordionModule } from 'primeng/accordion';
import { ServicesCheckComponent } from './pages/services-check/services-check.component';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './pages/employees/employees.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { SupportComponent } from './pages/support/support.component';
import { UploadActivitiesComponent } from './pages/upload-activities/upload-activities.component';
import { FileUploadModule } from 'primeng/fileupload';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [AppComponent, ShellComponent, SidebarComponent, DashboardComponent, ServicesCheckComponent, EmployeesComponent, SupportComponent, UploadActivitiesComponent],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        ToastModule,
        TableModule,
        ChartModule,
        ButtonModule,
        RippleModule,
        ServicesStatisticsModule,
        AccordionModule,
        PanelModule,
        BrowserAnimationsModule,
        OrganizationChartModule,
        FileUploadModule,
        TreeModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
