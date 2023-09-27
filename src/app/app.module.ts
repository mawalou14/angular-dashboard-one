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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    WorkersComponent,
    ResourcesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
