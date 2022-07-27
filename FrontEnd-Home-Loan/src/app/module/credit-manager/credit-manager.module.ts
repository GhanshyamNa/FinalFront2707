import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanctionListGeneratorComponent } from './sanction-list-generator/sanction-list-generator.component';
import { SanctionListComponent } from './sanction-list/sanction-list.component';
import { CreditmanagerComponent } from './creditmanager/creditmanager.component';
import { EmailSendingComponent } from './email-sending/email-sending.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const cr: Routes = [
  { path: 'creditmanager', component: CreditmanagerComponent,

  children: [
    { path: 'emicalculator',  component: EmiCalculatorComponent}]},

  { path: 'sanctionlist', component: SanctionListComponent,
  children: [
    { path: 'sanctionlistgenerator/:sanctionId',  component: SanctionListGeneratorComponent},
    { path: 'emailsend', component: EmailSendingComponent}]},

  // { path: 'sanctionlistgenerator', component: SanctionListGeneratorComponent},
  // { path: 'emicalculator', component: EmiCalculatorComponent}
];

@NgModule({
  declarations: [SanctionListGeneratorComponent, SanctionListComponent,CreditmanagerComponent, EmailSendingComponent, EmiCalculatorComponent],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule.forChild(cr),FormsModule
  ]
})
export class CreditManagerModule { }
