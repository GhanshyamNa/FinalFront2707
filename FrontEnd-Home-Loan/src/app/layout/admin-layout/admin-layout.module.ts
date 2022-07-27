import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { UserComponent } from 'app/pages/user/user.component';
import { TableComponent } from 'app/pages/table/table.component';
import { UpgradeComponent } from 'app/pages/upgrade/upgrade.component';
import { TypographyComponent } from 'app/pages/typography/typography.component';
import { IconsComponent } from 'app/pages/icons/icons.component';
import { MapsComponent } from 'app/pages/maps/maps.component';
import { NotificationsComponent } from 'app/pages/notifications/notifications.component';


@NgModule({
  declarations: [ 
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent],

  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
    
  ]
})
export class AdminLayoutModule { }
