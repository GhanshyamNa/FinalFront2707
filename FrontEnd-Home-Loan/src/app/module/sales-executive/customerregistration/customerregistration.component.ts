import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/customer';
import { CommonServiceService } from 'app/module/shared/common-service.service';
import { CustomerServiceService } from 'app/module/shared/customer-service.service';

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.css']
})
export class CustomerregistrationComponent implements OnInit {

  step:any=1;

  registerForm:FormGroup


  cus:Customer={
    customerId: 0,
    fullName: '',
    email: '',
    gender: '',
    pancardNo: '',
    mobileNo: '',
    loanAmount:0,
    title: ''
  }

  cusId:number;
    constructor(private fb:FormBuilder,private cs:CustomerServiceService,public r:ActivatedRoute) { }
  
    ngOnInit(): void 
    {    
        this.r.paramMap.subscribe(param1=>{
          let emId= param1.get('id');
        let empId=parseInt(emId);
        this.cs.getById(empId).subscribe(data=>{
          this.cus=data;
          console.log(this.cus);
        })
      })
      
  
      this.registerForm=this.fb.group(
        {
          applicantId:[''],
          profession:[''], 
          dob:[''],
          age:[''], 
          annualincome:[''],
          customer:this.fb.group({
            customerId :[''],
            fullName :[''],
            email :[''],
            gender : [''],
            pancardNo :[''],
            mobileNo:[''],
            loanAmount:['']
          }),
            paddr:this.fb.group({
              paId:[''],
              areaName:[''], 
              cityName:[''], 
              stateName:[''], 
              pincodeNo:[]
  
            }),
          propertydetails:this.fb.group({
            propertyId:[''],
            propertyType:[''], 
            propertyPrice:[],
            propertyLocation:['']
  
          }),
          bankDetails:this.fb.group({
            bankId:[''], 
            accountNo:[''], 
            ifscCode:[''], 
            bankName:[''],
            branchAddress:['']
          }),
            
      })
    
    }
  
    
    
    onSubmit(id:number){
      alert("Customer regitered successfully!!")
      this.cs.save(id,this.registerForm.value).subscribe();
     // window.location.reload();

    }
     
  next() {
    this.step=this.step+1;
  }
  

  previous() {
    this.step==this.step--;
  }
  
}
