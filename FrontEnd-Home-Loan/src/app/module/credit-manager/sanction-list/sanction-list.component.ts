import { Component, OnInit } from '@angular/core';
import { SanctionLetter } from 'app/model/sanction-letter';
import { CreditManagerService } from 'app/module/shared/credit-manager.service';

@Component({
  selector: 'app-sanction-list',
  templateUrl: './sanction-list.component.html',
  styleUrls: ['./sanction-list.component.css']
})
export class SanctionListComponent implements OnInit {

  constructor(public common : CreditManagerService) { }
  
  sanctionList : SanctionLetter[];

  ngOnInit(): void {
    this.common.getAllSanctionLetterData().subscribe((data:SanctionLetter[])=>{
      this.sanctionList = data;
    })
  }
}
