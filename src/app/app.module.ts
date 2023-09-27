import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { WorkersComponent } from './main/pages/workers/workers.component';
import { ResourcesComponent } from './main/pages/resources/resources.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TotStatsComponent } from './main/pages/dashboard/tot-stats/tot-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    WorkersComponent,
    ResourcesComponent,
    DropdownDirective,
    TotStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
