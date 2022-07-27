import { Component, OnInit } from '@angular/core';
import { LoanApprovedList } from 'app/model/loan-approved-list';
import { CreditManagerService } from 'app/module/shared/credit-manager.service';

@Component({
  selector: 'app-creditmanager',
  templateUrl: './creditmanager.component.html',
  styleUrls: ['./creditmanager.component.css']
})
export class CreditmanagerComponent implements OnInit {

 
  constructor(public common : CreditManagerService) { }
  customerList : LoanApprovedList[];
  ngOnInit(): void {
     this.common.getApplicantData().subscribe((data:LoanApprovedList[])=>{
      this.customerList = data;
    })
  }
  getSingleCustomer(id:number)
  {
     this.common.getSingleApplicantData(id).subscribe();
  } 
 
  

}
