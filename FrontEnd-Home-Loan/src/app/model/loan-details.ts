import { Customer } from "./customer";

export class LoanDetails {
    loanDetailId:number; 
	totalLoanRequired:number; 
	tenureofLoan:number=10; 
	annualInterest;number=7.5;
	payableLoan:number;
	customer:Customer;
}
