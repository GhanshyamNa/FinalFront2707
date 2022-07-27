import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const operationalexe: Routes = [
  { path: 'cibilscore', component: CibilscoreComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'viewcustomer', component: ViewCustomerComponent},
];


@NgModule({
  declarations: [CibilscoreComponent, ViewCustomerComponent, DashboardComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(operationalexe)
  ]
})
export class OperationalExecutiveModule { }
