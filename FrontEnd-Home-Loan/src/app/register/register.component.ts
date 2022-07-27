import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'app/model/customer';
import { CommonServiceService } from 'app/module/shared/common-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isValid = false;
  customer: Customer = {
    customerId:0, 
    title:'',
    fullName:'', 
    gender:'',  
    mobileNo:'',  
    email:'', 
    pancardNo:'', 
    loanAmount:0,
    // cbilstatus:'' 
  };

  customerRegisterationForm: FormGroup;
  constructor(
    private route: Router,
    public customerForm: FormBuilder,
    public http: CommonServiceService
  ) {}
  ngOnInit(): void {
    this.customerRegisterationForm = this.customerForm.group({
      title: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      email: ['', [Validators.required]],
      pancardNo: ['', [Validators.required]],
      loanAmount: ['', [Validators.required]],
      cbilstatus:['',[Validators.required]]

    });
  }

  registerCustomer() {
    this.customer.title = this.customerRegisterationForm.get('title').value;
    this.customer.fullName = this.customerRegisterationForm.get('fullName').value;
    this.customer.gender =   this.customerRegisterationForm.get('gender').value;
    this.customer.mobileNo = this.customerRegisterationForm.get('mobileNo').value;
    this.customer.email = this.customerRegisterationForm.get('email').value;
    this.customer.pancardNo = this.customerRegisterationForm.get('pancardNo').value;
    this.customer.loanAmount = this.customerRegisterationForm.get('loanAmount').value;
    // this.customer.loanAmount = this.customerRegisterationForm.get('loanAmount').value;

    {
      this.http.addCustomer(this.customer).subscribe();

      window.location.reload();
      alert('Registred Successfully');
    } 
  }
  goToLogin() {
    this.route.navigate(['login_all']);
  }

  clear() {
    this.customerRegisterationForm.reset();
   }


}
