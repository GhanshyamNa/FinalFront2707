
import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AccountSectionModule } from './module/account-section/account-section.module';
import { AdminMasterModule } from './module/AdminMaster/admin-master.module';
import { CreditManagerModule } from './module/credit-manager/credit-manager.module';
import { OperationalExecutiveModule } from './module/operational-executive/operational-executive.module';
import { SalesExecutiveModule } from './module/sales-executive/sales-executive.module';
import { RegisterComponent } from './register/register.component';
export const AppRoutes: Routes = [
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'about_us',
    //     component: AboutUsComponent,
    //   },
    //   {
    //   //mention child componants of Home //ghanshyam
    //   },
     
    // ]
  },
  {
      path: 'about_us', component: AboutUsComponent,
  },
  {
    path:  'register', component: RegisterComponent,
  },
  {
    path: 'login_all',
    component: LoginComponent,
  },
  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      { path: 'admin', loadChildren: () => AdminMasterModule },
      { path: 'oe', loadChildren: () => OperationalExecutiveModule },
      { path: 'se', loadChildren: () => SalesExecutiveModule },
      { path: 'acc', loadChildren: () => AccountSectionModule },
      { path: 'cm', loadChildren: () => CreditManagerModule },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
