import { ConstumerBankDetails } from "./constumer-bank-details";
import { Customer } from "./customer";
import { LoanDetails } from "./loan-details";

import { PermanantAddress } from "./permanant-address";
import { PropertyDetails } from "./property-details";

export class Applicant {
    
    applicationId:number; 
	profession:string; 
	dob:string;
	age:number; 
	annualincome:number;
    customer: Customer;
    paddr: PermanantAddress;	
    propertydetails: PropertyDetails;   
    bankdetails: ConstumerBankDetails
	

    
}
