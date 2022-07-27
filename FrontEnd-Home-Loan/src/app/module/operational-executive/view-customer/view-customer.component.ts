import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'app/model/customer';
import { CibilServiceService } from 'app/module/shared/cibil-service.service';
import { CommonServiceService } from 'app/module/shared/common-service.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  constructor(private cs :CibilServiceService,private router:Router) { }
  customer:any;
  
    ngOnInit(): void {

       this.cs.getData1().subscribe(data=>{

        this.customer=data
        
       })
    }
    add(customer:Customer)
    {
      this.router.navigateByUrl("role/oe/cibilscore");
      this.cs.ec=Object.assign({},customer);

    }
}
