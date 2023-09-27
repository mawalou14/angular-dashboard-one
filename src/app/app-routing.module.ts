import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { WorkersComponent } from './main/pages/workers/workers.component';
import { ResourcesComponent } from './main/pages/resources/resources.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'workers', component: WorkersComponent },
      { path: 'resources', component: ResourcesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
