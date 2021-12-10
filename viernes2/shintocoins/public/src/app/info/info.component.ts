import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  transaction:any;
  constructor(private choi:ShintoService) { 

  }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction(){
    this.transaction=this.choi.infoObject;
  }

}
