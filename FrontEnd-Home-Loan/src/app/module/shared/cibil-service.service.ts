import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cibil } from 'app/model/cibil';
import { Customer } from 'app/model/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CibilServiceService {
 

  constructor(public http:HttpClient) { }

    ec:Customer={
      customerId:null,
      title:'',
      fullName:'',
      gender:'',
      mobileNo:'',
      email:'',
      pancardNo:'',
      loanAmount:0

    }
    postData(cibil:Cibil)
    {
    // alert(cibil)    
    // cibil.Customer=this.ec;

    return this.http.post("http://localhost:9090/addcibil",cibil,)
    }
    getcibilData()
    {
    return this.http.get("http://localhost:9090/getall");
    }
    getcibil()
    {
    return this.http.get("http://localhost:9090/getcibil");
    }
    
   getData1()
   {
     return this.http.get("http://localhost:9090/getalldata");
   }
   adddata(ec:Customer)
   {
     return this.http.post('http://localhost:9090/adddata',ec);
   }

  //  getDatabyid(cid: any):Observable<Customer> {
  //   return this.http.get<Customer>("http://localhost:9090/getalldata"+"/"+cid);
  // }
}
