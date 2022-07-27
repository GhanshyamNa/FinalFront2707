import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Applicant } from 'app/model/applicant';
import { Customer } from 'app/model/customer';
import { EmailSender } from 'app/model/email-sender';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }
  e: EmailSender = {
    toEmail: '',
    fromEmail: '',
    subject: '',
    textMessage: ''
  }

  getdata():Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:9090/api/getall");
   }
   getById(customerId: any):Observable<Customer> {
    return this.http.get<Customer>("http://localhost:9090/api/get"+"/"+customerId)
   }
   save(id:number,app:Applicant) {
    return this.http.post("http://localhost:9090/registerApplicant"+ "/" +id,app)
   }
    send(id: number) {
     return this.http.post("http://localhost:9090/sendemail" +"/" +id,this.e)
    }
  uploaddoc(id:number, uploaddocument : any) 
  {
    return this.http.post("http://localhost:9090/save"+"/" +id, uploaddocument)
  }

}
