import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanApprovedList } from 'app/model/loan-approved-list';
import { LoanDisburseService } from 'app/module/shared/loan-disburse.service';

@Component({
  selector: 'app-loan-disburse',
  templateUrl: './loan-disburse.component.html',
  styleUrls: ['./loan-disburse.component.css']
})
export class LoanDisburseComponent implements OnInit {
  l: LoanApprovedList[];

  constructor(private b:LoanDisburseService , private formBuilder:FormBuilder, private location:Location) { }
  bankForm:FormGroup;
   
  ngOnInit(): void {
    this.b.getdata().subscribe(data => this.l = data);
    
    this.bankForm=this.formBuilder.group(
      {
    loanAid: [],
    monthlyEMIAmount: [],
    principalAmount: [],
    totalInterest: [],
    totalAmount: [],
    loanDetails: {
    loanDetailId:[],
	  totalLoanRequired:[],
	  tenureofLoan:[],
    },
    sanction: {
    sanctionedId: [],
    sanctionedAmount:[],
    loanRefundTenure: [],
    rateofInterest: [],
     },
    applicant: {
    applicationId: [],
    profession: [''],
    dob: [''],
    age: [],

    customer: {
    customerId: [],
    title:[''],    
    fullName: [''],
    gender: [''],
    mobileNo:[''],
    email: [''],
    pancardNo: [''],
    loanAmount: [''],
    },
    paddr: {
    paId: [],
    areaName: [''],
    cityName: [''],
    stateName: [''],
    pincodeNo: [],
    },
    loanDetails:  {
     loanDetailId:[],
	   totalLoanRequired:[],
	   tenureofLoan:[],
     annualInterest:[],
     payableLoan:[]
    },
       propertydetails: {
       propertyId: [],
       propertyType: [''],
       propertyPrice: [''],
       propertyLocation: [''],
    },
    documentup: {
    docId: [],
    photo: [],
    signature: [],
    panCard: [],
    addressProof: [],
    incomeDocument: [],
    aadharCard: [],
    propertyDocument: [],
    bankcheque: [],     
    },
    bankdetails: {
    bankId: [],
    accountNo: [],
    ifscCode: [''],
    bankName: [''],
    branchAddress: [''],
    },
    cibil: {
      cibilId: [],
      cibilScore: [],
      cibilStatus: [''],
      cibilRemark: [''],
      Customer: {
     
        customerId: [],
        title:[''],
        fullName: [''],
        gender: [''],
        mobileNo: [''],
        email: [''],
        pancardNo: [''],
        loanAmount: [''],
    
                }
              }
              }
          
              })
    this.editData();
  }
  editData()
  {
    let loan:any = this.location.getState();
    console.log(loan.applicant.bankdetails.accountNo);
    console.log(loan.applicant.bankdetails.bankId);
    if(loan.loanAid!=0){
      this.bankForm.get('loanAid').setValue(loan.loanAid);
      this.bankForm.get('accountNo').setValue(loan.applicant.bankdetails.accountNo);
    }
  }
  onSubmit()
  {
    if(this.bankForm.valid){
      alert("Disburse Successfully");
      console.log("ledgerform ts");
      window.location.reload();
    }
  }


}
