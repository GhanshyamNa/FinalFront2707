import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ledger } from 'app/model/ledger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanApprovedListService {

  constructor(public http:HttpClient) { }
  l:Ledger={
    ledgerId: 0,
    customerName: '',
    ledgerCreationDate: '',
    totalLoanAmount: 0,
    payableAmountWithIntrest: 0,
    tenureInYear: 0,
    monthlyEMI: 0,
    amountPaidTillDate: 0,
    remainingAmount: 0,
    defaulterCount: 0,
    previousEmiStatus: '',
    currentMonthEmiStatus: '',
    loanEndDate: '',
    loanStatus: ''
  }

  postdata(ledg:Ledger){

    return this.http.post("http://localhost:9090/ledger/save",ledg)



  }
  

  getdata(): Observable<Ledger[]>
  {
    return this.http.get<Ledger[]>("http://localhost:9090/ledger/get");
  }
}
