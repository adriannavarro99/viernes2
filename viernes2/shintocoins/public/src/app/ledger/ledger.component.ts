import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  ledger:any=[];
  constructor(private choi:ShintoService) { }

  ngOnInit() {
    this.getLedger();
  }

  getLedger(){
    this.ledger=this.choi.ledger;
    console.log(this.ledger)
  }

  addToInfo(info:object){
    this.choi.addObject(info);
    console.log(this.choi.infoObject);
  }

}
