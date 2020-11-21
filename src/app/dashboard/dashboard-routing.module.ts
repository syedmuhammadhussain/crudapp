import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { DynamictableComponent } from './dynamictable/dynamictable.component';
import { DatatableComponent } from './datatable/datatable.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'dynamictable', component: DynamictableComponent },
      { path: 'dashboardhome', component: DashboardhomeComponent },
      { path: 'datatable', component: DatatableComponent },
      { path: '', redirectTo: 'dashboardhome', component: DashboardhomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
