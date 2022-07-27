import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanApprovedList } from 'app/model/loan-approved-list';
import { LoanDisburseService } from 'app/module/shared/loan-disburse.service';

@Component({
  selector: 'app-loan-approved-list',
  templateUrl: './loan-approved-list.component.html',
  styleUrls: ['./loan-approved-list.component.css']
})
export class LoanApprovedListComponent implements OnInit {

  
  constructor(private las: LoanDisburseService, private routes:ActivatedRoute) { }
   l:LoanApprovedList[]; 
   
  ngOnInit(): void {
    this.las.getdata().subscribe(data => this.l = data)
     
}
}