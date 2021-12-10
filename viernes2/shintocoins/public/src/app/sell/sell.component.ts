import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  coinWallet:number=0;
  coinValue:number=0;
  cashWallet:number=0;
  sell:any;
  errMessage:string="";
  message:string="";
  constructor(private choi:ShintoService) { 

  }

  ngOnInit() {
    this.getInfo();
    this.sell={
      amount:0
    }
    this.errMessage="";
    this.message="";
  }

  getInfo(){
    this.coinWallet=this.choi.coinWalletAmount();
    this.coinValue=this.choi.getCoinValue();
    this.cashWallet=this.choi.getCashWallet();
  }

  sellCoin(){
    if(this.coinWallet ==0){
      this.message="";
      this.errMessage="Can not sell more Coins than are present in coin wallet";
      this.sell.amount=0;
    }
    else if(this.choi.coinWallet < parseInt(this.sell.amount)){
      this.message="";
      this.errMessage=`Can not sell more Coins than are present in coin wallet`;
      this.sell.amount=0;
    }
    else{
      this.errMessage="";
      this.message=`Sell of ${this.sell.amount} coin(s) complete`;
      this.choi.transactionGenerator("Sell",parseInt(this.sell.amount));
      this.choi.addToCashWallet(parseInt(this.sell.amount)*this.choi.coinValue);
      this.choi.subFromWallet(parseInt(this.sell.amount));
      this.sell.amount=0;
      this.getInfo();
    }
  }

}
