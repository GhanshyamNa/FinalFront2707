import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreditManagerService } from 'app/module/shared/credit-manager.service';

@Component({
  selector: 'app-email-sending',
  templateUrl: './email-sending.component.html',
  styleUrls: ['./email-sending.component.css']
})
export class EmailSendingComponent implements OnInit {


  selectsanctionletter:any;
  sendEmail:FormGroup;
  constructor(public fb:FormBuilder,public commonservice:CreditManagerService) { }

  ngOnInit(): void {
    this.sendEmail=this.fb.group({
      toEmail:[''],
     fromEmail:[''],
     subject:[''],
     textMessage:['']
    })
  }
  // onselectedFile1(event:any){
   
  //   this.selectsanctionletter=event.target.files[0];

  // }
  sendEmailCall()
  {
    // const document1=JSON.stringify(this.sendEmail.value)
    //  const UploadDocument=new FormData();
    //  UploadDocument.append("sanction",this.selectsanctionletter)
          this.commonservice.sendEmails(this.sendEmail.value).subscribe();
  }
}
