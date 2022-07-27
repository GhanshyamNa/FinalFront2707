import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'app/model/customer';
import { CustomerServiceService } from 'app/module/shared/customer-service.service';


@Component({
  selector: 'app-customerenquiry',
  templateUrl: './customerenquiry.component.html',
  styleUrls: ['./customerenquiry.component.css']
})
export class CustomerenquiryComponent implements OnInit {
  constructor(private cs:CustomerServiceService,private router:Router) { }
  cuslist: Customer[];
  cus:Customer;
  ngOnInit(){
    this.cs.getdata().subscribe(list => this.cuslist = list);
  }
  register(id:number){
    alert(id);
    
    this.router.navigate(['role','se','customerenq','customerregist',id]);
    
    
  }
  upload(id:number){
    this.router.navigate(['role','se','customerenq','documentupload',id]);
  }
   send(id:number){
    alert("Mail Sent Successfully")
     this.cs.send(id).subscribe();
   }
}
