import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerenquiryComponent } from './customerenquiry/customerenquiry.component';
import { EmailsendingComponent } from './emailsending/emailsending.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { DocumentuploadComponent } from './documentupload/documentupload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const salesexe : Routes = [
  { path: 'customerenq', component: CustomerenquiryComponent,
  children:[{ path: 'customerregist/:id', component: CustomerregistrationComponent},
  {path: 'documentupload/:id', component: DocumentuploadComponent}
]
}
 // { path: 'customerregist', component: CustomerregistrationComponent},
 // { path: 'documentupload', component: DocumentuploadComponent},
 // { path: 'emailsending', component: EmailsendingComponent},
];
@NgModule({
  declarations: [CustomerenquiryComponent, EmailsendingComponent, CustomerregistrationComponent, DocumentuploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(salesexe)
    
  ]
})
export class SalesExecutiveModule { }
