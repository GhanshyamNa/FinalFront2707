import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerFormListComponent } from './ledger-form-list/ledger-form-list.component';
import { LoanApprovedListComponent } from './loan-approved-list/loan-approved-list.component';
import { LoanDisburseComponent } from './loan-disburse/loan-disburse.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LedgerFormComponent } from './ledger-form/ledger-form.component';

const account:Routes = [

  { path: 'ledgerform', component: LedgerFormComponent },
  { path: 'ledgerformlist', component: LedgerFormListComponent},
  { path: 'loanapprovelist', component: LoanApprovedListComponent},
  { path: 'loandisburse', component: LoanDisburseComponent},

]

@NgModule({
  declarations: [LedgerFormListComponent, LedgerFormComponent,LoanApprovedListComponent, LoanDisburseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(account)
  ]
})
export class AccountSectionModule { }
