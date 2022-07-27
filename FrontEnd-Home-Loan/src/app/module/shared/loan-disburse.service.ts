import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanApprovedList } from 'app/model/loan-approved-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanDisburseService {

  getURL:string="http://localhost:9090/get";
  getloanurl: string = "http://localhost:8081/sanction/getloan";
  constructor(private http:HttpClient) { }
  
  l:LoanApprovedList ={
    loanAid: 0,
    loanDetails:  {
      loanDetailId:0,
      totalLoanRequired:0,
      tenureofLoan: 0,
      annualInterest:0,
      payableLoan:0,
    },
    sanction: {
          sanctionedId: 0,
          sanctionedAmount:0,
          loanRefundTenure: 0,
          rateofInterest: 14.0,
     },
     applicant: {
      applicationId: 0,
       profession: '',
       dob: '',
       age: 0,
       annualincome:0,

    customer: {
    customerId: 0,
    title:'',    
    fullName: '',
    gender: '',
    mobileNo:'',
    email: '',
    pancardNo: '',
    loanAmount: 0,
    },
    paddr: {
    paId: 0,
    areaName: '',
    cityName: '',
    stateName: '',
    pincodeNo: 0,
    },

    propertydetails: {
    propertyId: 0,
    propertyType: '',
    propertyPrice: '',
    propertyLocation: '',
    },
      bankdetails: {
      bankId: 0,
      accountNo: 0,
      ifscCode: '',
      bankName: '',
      branchAddress: '',
        },
        
      
    },
    // sanctionletter:{
    //   sanctionId:0, 
    //   sanctionDate:'', 
    //   status:'',
    //   monthlyEMIAmount:0,
    //   principalAmount:0,
    //   totalInterest:0,
    //   totalAmount:0
    // },
    
  }
  //use for both disburse and lal
  getdata():Observable<LoanApprovedList[]>
{
  return this.http.get<LoanApprovedList[]>("http://localhost:9090/getloanapprovelist");
}
getloanbyid(loan:LoanApprovedList): Observable<LoanApprovedList>
{
  return this.http.get<LoanApprovedList>(this.getloanurl+'/'+loan.loanAid);
}
}
