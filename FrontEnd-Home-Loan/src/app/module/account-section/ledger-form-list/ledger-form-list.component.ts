import { Component, OnInit } from '@angular/core';
import { Ledger } from 'app/model/ledger';
import { LoanApprovedListService } from 'app/module/shared/loan-approved-list.service';
import { ngxCsv } from 'ngx-csv';

@Component({
  selector: 'app-ledger-form-list',
  templateUrl: './ledger-form-list.component.html',
  styleUrls: ['./ledger-form-list.component.css']
})
export class LedgerFormListComponent implements OnInit {

  ledgerlist: Ledger[];
 
  constructor(private serve: LoanApprovedListService) { }

  ngOnInit(): void {
    this.serve.getdata().subscribe(data => this.ledgerlist = data);
  }
filedownload() {
   var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'Ledger Report Data',
    useBom: true,
    noDownload: false,
    headers: ["ledgerId", "customerName", "ledgerCreationDate","totalLoanAmount","payableAmountWithIntrest","tenureInYear","monthlyEMI","amountPaidTillDate","remainingAmount","defaulterCount","previousEmiStatus","currentMonthEmiStatus","loanEndDate","loanStatus"]
  };
 
  new ngxCsv(this.ledgerlist, "Ledger Report", options);
  }
}
