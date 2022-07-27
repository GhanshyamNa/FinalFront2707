import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ledger } from 'app/model/ledger';
import { LoanApprovedListService } from 'app/module/shared/loan-approved-list.service';


@Component({
  selector: 'app-ledger-form',
  templateUrl: './ledger-form.component.html',
  styleUrls: ['./ledger-form.component.css']
})
export class LedgerFormComponent implements OnInit {
  ledgerForm:FormGroup;
  constructor(private s:LoanApprovedListService, private formbuilder:FormBuilder) { }
   l:Ledger[]

  ngOnInit(): void {
   this.ledgerForm=this.formbuilder.group(
      {
      ledgerId:[],
      customerName:[''],
      ledgerCreationDate:[''],
      totalLoanAmount:[],
      payableAmountWithIntrest:[],
      tenureInYear:[],
      monthlyEMI:[],
      amountPaidTillDate:[],
      remainingAmount:[],
      defaulterCount:[],
      previousEmiStatus:[''],
      currentMonthEmiStatus:[''],
      loanEndDate:[''],
      loanStatus:['']

    })
  }
    onSubmit()
  {
    if(this.ledgerForm.valid){
      alert("Register Successfully");
      console.log("ledgerform ts");

      this.s.postdata(this.ledgerForm.value).subscribe();
      window.location.reload();
    }
  }
    // submitdata(ld:Ledgerform)
    // {
    //   alert("Data Submited");
    //   console.log(this.ledgerForm.controls['ledgerId'].value);
      
    //  this.s.postdata(ld).subscribe();
    // }
  
  


}
