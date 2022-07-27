import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Applicant } from 'app/model/applicant';
import { CommonServiceService } from 'app/module/shared/common-service.service';

@Component({
  selector: 'app-applicantregistration',
  templateUrl: './applicantregistration.component.html',
  styleUrls: ['./applicantregistration.component.css']
})
export class ApplicantregistrationComponent  {

//   custreg:Applicant[];
//   constructor(public cs:CommonServiceService,public fb:FormBuilder,private loc:Location) { }
//   registrationForm:FormGroup;
//   custId:number;
//   ngOnInit(): void {

//   this.registrationForm=this.fb.group({
//   applicationId:[''],
//   profession:[''],
//   dob:[''],
//   age:[''],
//   annualincome:[''],

//   customer:this.fb.group({
//   customerId:[],
//   title:[],
//   fullName:[''],
//   gender:[''],
//   mobileNo:[''],
//   email:[''],
//   pancardNo:[''],
//   loanAmount:[''],
//   }),

//   paddr:this.fb.group({
//     paId:[],
//     areaName:[''],
//     cityName:[''],
//     stateName:[''],
//     pincodeNo:[''],
//   }),

//   loanDetails:this.fb.group({
//     loandetailId:[],
//     totalLoanRequired:[],
//     tenureofLoan:[],
//     annualInterest:[],
//     payableLoan:[],
    
//   }),

//   propertyDetails:this.fb.group({
//     propertyId:[],
//     propertyType:[''],
//     propertyPrice:[''],
//     propertyLocation:[''],
//   }),
//   bankDetails:this.fb.group({
//     bankId:[],
//     accountNo:[],
//     ifscCode:[''],
//     bankName:[''],
//     branchAddress:[''],
//   }),
  
//  })
// this.edit()
//   }
//   onsubmit(){
// alert("Succuss Fully Add")
//    this.cs.postdatacust(this.custId,this.registrationForm.value).subscribe()
//   }
//   edit(){
//     let s:any=this.loc.getState();
//     console.log(s.customerId);
//     this.custId=s.customerId;
//     console.log("in method");
//     if(s.customerId!=0){
//       ;
//      console.log("get data ");
//      this.registrationForm.controls.customer.get('customerId')?.setValue(s.customerId);
//      this.registrationForm.controls.customer.get('fullName')?.setValue(s.fullName);
//      this.registrationForm.controls.customer.get('gender')?.setValue(s.gender);
//      this.registrationForm.controls.customer.get('email')?.setValue(s.email);
//      this.registrationForm.controls.customer.get('mobileNo')?.setValue(s.mobileNo);
//      this.registrationForm.controls.customer.get('pancardNo')?.setValue(s.pancardNo);
//      this.registrationForm.controls.customer.get('loanAmount')?.setValue(s.loanAmount);
//     }
//      }
//   goBack(){
//     this.loc.back();
//   }



}
