import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/module/AdminMaster/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [

  { path: 'dashboard',      component: DashboardComponent }, 
];
