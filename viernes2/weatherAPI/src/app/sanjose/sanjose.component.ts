import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  info:any = {}

  constructor( private _HttpService: ConnectionService ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo():void{
    this._HttpService.requestSanJose()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info)
    });
  }

}