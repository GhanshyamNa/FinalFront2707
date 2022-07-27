import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CibilServiceService } from 'app/module/shared/cibil-service.service';

@Component({
  selector: 'app-cibilscore',
  templateUrl: './cibilscore.component.html',
  styleUrls: ['./cibilscore.component.css']
})
export class CibilscoreComponent implements OnInit {

 
  constructor(public cs:CibilServiceService,private fb:FormBuilder,private r:ActivatedRoute) { }

  cibil:any;
  msg:string;
  color1:any;
  
  
  ngOnInit(): void {

  }
  checkCibilhidden:boolean=false;
  cibilform=this.fb.group({
    cibilId:[''],
    cibilStatus:[''],
    cibilScore:[''],
    cibilRemark:[''],
    enquiryform:this.fb.group({
      customerId:[''],
      title:[''],
      fullName:[''],
      gender:[''],
      mobileNo:[''],
      email:[''],
      pancardNo:[''],
      loanAmount:['']

    })

  })
  dataget()
  {
    this.cs.postData(this.cibilform.value).subscribe();
    window.location.reload();
  }

  addcibil()
  {

     this.cs.getcibil().subscribe(data=>
      {
        this.cibil=data;
      })
  
  }
  
  msgCibil(){
    console.log("in msg");
        if(this.cibil>750){
            this.color1="green"
          return "Cibil Score is Rich";
        }
        else{
          this.color1="red"
          return "Cibil Score is Poor";
        }
      }


      getBackground(cibil:any)
  {
    if(cibil >750)
    {
      return {color:'green'}
    }
    else
    {
      return {color:'red'}
    }
   
  }


}
