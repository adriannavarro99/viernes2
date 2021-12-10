import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  info:any = {}

  constructor( private _HttpService: ConnectionService ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo():void{
    this._HttpService.requestWashington()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info)
    });
  }

}