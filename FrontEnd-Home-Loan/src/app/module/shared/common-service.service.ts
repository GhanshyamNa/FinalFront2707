import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Applicant } from 'app/model/applicant';
import { Customer } from 'app/model/customer';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  url:string="http://localhost:9090/api/registerCustomer";
  // url1:string="http://localhost:9090/api/getall";
  // url2:string="http://localhost:9090/postdataApplicant";
  
  constructor(public http:HttpClient) { }

  addCustomer(en:Customer){
    return this.http.post(this.url,en);
  }
  // getedata(){
  //   return this.http.get<Customer[]>(this.url1);
  // }
  // postdatacust(id:number,cust:Applicant){
  //   return this.http.post(this.url2+"/"+id,cust);
  // }
}
