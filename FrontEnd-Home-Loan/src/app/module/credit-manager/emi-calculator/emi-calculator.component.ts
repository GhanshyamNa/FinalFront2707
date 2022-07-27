import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanApprovedList } from 'app/model/loan-approved-list';
import { CreditManagerService } from 'app/module/shared/credit-manager.service';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  constructor(public fb : FormBuilder,public location :Location, public common : CreditManagerService, private routes : ActivatedRoute) { }
  
  loanapprovedObj : LoanApprovedList;
  lAid : number;

  emicalculator : FormGroup;
  
  ngOnInit(): void {
    this.emicalculator = this.fb.group({
      loanDetailId : [''],
      loanDetails : this.fb.group({
        totalLoanRequired : [''],
        tenureofLoan : ['']
      }),
      sanction : this.fb.group({
        rateofInterest : [''],
        sanctionedAmount : ['']
      })
    })
    this.fetchData();
  }

  goBack()
  {
    this.location.back();
  }

  fetchData()
  {
    let obj : any = this.location.getState();
    console.log(obj.loanAid);
    this.lAid = obj.loanDetailId;
    
    if(obj!=0)  
    {
      this.emicalculator.controls['sanction'].get('rateofInterest').setValue(obj.sanction.rateofInterest);
      this.emicalculator.controls['sanction'].get('sanctionedAmount').setValue(obj.sanction.sanctionedAmount);
      this.emicalculator.controls['loanDetails'].get('totalLoanRequired').setValue(obj.loanDetails.totalLoanRequired);
      this.emicalculator.controls['loanDetails'].get('tenureofLoan').setValue(obj.loanDetails.tenureofLoan);
    }
  }

  calculate()
  {
    this.common.calculateEMI(this.lAid,this.emicalculator.value).subscribe();
  }
}
