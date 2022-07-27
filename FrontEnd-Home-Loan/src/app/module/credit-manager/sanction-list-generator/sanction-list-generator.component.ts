import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanctionLetter } from 'app/model/sanction-letter';
import { CreditManagerService } from 'app/module/shared/credit-manager.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-sanction-list-generator',
  templateUrl: './sanction-list-generator.component.html',
  styleUrls: ['./sanction-list-generator.component.css']
})
export class SanctionListGeneratorComponent implements OnInit {

  @ViewChild('sanctionletter') sanctionletter!: ElementRef;

  sanctionObj: SanctionLetter;

  id:number;

  constructor(public common : CreditManagerService,private routes : ActivatedRoute,public location :Location) { }
  
  ngOnInit(): void { 
   
    
      this.routes.paramMap.subscribe((param=>{
        console.log((param.get('sanctionId')));
        this.common.getDataForLetter(parseInt(param.get('sanctionId'))).subscribe(data=>{
          this.sanctionObj = data;
        })
      }))
  }
  goBack()
  {
    this.location.back();
  }

  public generatePDF() : void
  {
      let DATA: any = document.getElementById('sanctionletter');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('sanction-letter.pdf');
      });
    }
}
