import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/customer';
import { CustomerServiceService } from 'app/module/shared/customer-service.service';

@Component({
  selector: 'app-documentupload',
  templateUrl: './documentupload.component.html',
  styleUrls: ['./documentupload.component.css']
})
export class DocumentuploadComponent implements OnInit {

  constructor(private formbuilder :FormBuilder , private service :CustomerServiceService,
    private r :ActivatedRoute) { }

  docForm : FormGroup

  selectadharcard : any
  selectpancard : any 
  selectphoto : any
  selectsignature : any
  selectaddressProof : any
  selectincomeDocument : any
  selectpropertyDocument : any
  selectblankcheque :any
  selectgstamp :any
  selectgpropertydoc :any

  reader = new FileReader();
  cus:Customer

  ngOnInit(): void{

    this.r.paramMap.subscribe(param1=>{
      let emId= param1.get('id');
    let empId=parseInt(emId);
    this.service.getById(empId).subscribe(data=>{
      this.cus=data;
      console.log(this.cus);
    })
  })

    this.docForm = this.formbuilder.group({

     customer : this.formbuilder.group(
      {
        customerId :[],
        fullName :[''],
        title:[''],
        email : [''], 
        gender : [''], 
        pancardNo :[''],
        mobileNo :[''],
        loanAmount :[]
      }
     )
  })

  }
  

  onselectedFile1(event :any)
  {
    this.selectadharcard = event.target.files[0];   
  }
  onselectedFile2(event :any)
  {
    this.selectpancard = event.target.files[0];
  }
  onselectedFile3(event :any)
  {
    this.selectphoto = event.target.files[0];
   }
  onselectedFile4(event :any)
  {
    this.selectsignature =event.target.files[0];
  }
  onselectedFile5(event :any )
  {
    this.selectaddressProof=event.target.files[0];
  }
  onselectedFile6(event :any)
  {
    this.selectincomeDocument=event.target.files[0];
  }
  onselectedFile7(event : any)
  {
    this.selectpropertyDocument =event.target.files[0];
  }
  onselectedFile8(event :any)
  {
    this.selectblankcheque = event.target.files[0];
  }
  onselectedFile9(event :any)
  {
    this.selectgstamp = event.target.files[0];
  }
  onselectedFile10(event :any)
  {
    this.selectgpropertydoc = event.target.files[0];
  }


 save(id:number)
 {
  
  const uploaddocument = new FormData()

  uploaddocument.append("adharCard" , this.selectadharcard)
  uploaddocument.append("panCard", this.selectpancard)
  uploaddocument.append("photo", this.selectphoto)
  uploaddocument.append("signature" , this.selectsignature)
  uploaddocument.append("incomeDocument" , this.selectincomeDocument)
  uploaddocument.append("addressProof" , this.selectaddressProof)
  uploaddocument.append("propertyDocument" , this.selectpropertyDocument)
  uploaddocument.append("blankcheque" , this.selectblankcheque)
  uploaddocument.append("g_Stamp" , this.selectgstamp)
  uploaddocument.append("g_PropertyDoc" , this.selectgpropertydoc)



  this.service.uploaddoc(id, uploaddocument).subscribe()

  alert("Documents uploaded successfully")
//  window.location.reload()

 }



}
