import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { DynamictableComponent } from './dynamictable/dynamictable.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { DatatableComponent } from './datatable/datatable.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardhomeComponent,
    DynamictableComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatInputModule,
    MatTableModule,
    ChartsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule
  ]
})
export class DashboardModule { }
