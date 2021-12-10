import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  totalG:number=0;
  aLog:any=[];
  game:any;
  gameId:string="";
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.game={id:''}
  }

  loadGame(){
    var saveGame =this._httpService.loadGame(this.game.id);
    saveGame.subscribe((data:any)=>{
      console.log(data);
      this.aLog=data.log;
      this.totalG = data.totalGold;
      this.gameId = data._id;
    })
  }

  startNewGame(){
    let observable = this._httpService.initializeGame()
    observable.subscribe((data:any) =>{
      this.totalG = data['data'].totalGold;
      this.aLog = data['data'].log;
      this.gameId=data['data']._id;
  
    })
  }

  saveGame(){
    let saveData = this._httpService.loadGame(this.gameId);
    saveData.subscribe((data:any)=>{

      data.totalGold = this.totalG;
      data.log = this.aLog;
      let observble = this._httpService.saveGameAndSet(data);
      observble.subscribe(data => {

      });
    })
  }

  farm(){
    var rand = Math.floor(Math.random()*4)+2;
    var whammy = Math.floor(Math.random()*5)+1;

    if(whammy < 5){
      var gain = rand;
      this.totalG += gain;
      this.aLog.push(`You gain ${gain} gold in the Farm!`);
    }
    else{
      var loss = rand;
      this.totalG -= loss;
      this.aLog.push(` You lose ${loss} gold in the Farm!`);
    }
  }

  cave(){
    var rand = Math.floor(Math.random()*6)+5;
    var whammy = Math.floor(Math.random()*5)+1;

    if(whammy < 5){
      var gain = rand;
      this.totalG += gain;
      this.aLog.push(`You found ${gain} gold in the Cave!`);
    }
    else{
      var loss = rand;
      this.totalG -= loss;
      this.aLog.push(`You lose ${loss} gold! in the Cave!`);
    }
  }

  house(){
    var rand = Math.floor(Math.random()*9)+7;
    var whammy = Math.floor(Math.random()*5)+1;

    if(whammy < 5){
      var gain = rand;
      this.totalG += gain;
      this.aLog.push(` You earned ${gain} gold in the House!`);
    }
    else{
      var loss = rand;
      this.totalG -= loss;
      this.aLog.push(` You lose ${loss} gold in the house`);
    }
  }

  casino(){
    var rand = Math.floor(Math.random()*100);
    var whammy = Math.floor(Math.random()*3)+1;

    if(whammy == 1){
      var gain = rand;
      if(gain < 2){
        this.totalG += gain;
        this.aLog.push(`You win ${gain} gold`);
      }
      else{
        this.totalG += gain;
        this.aLog.push(` You win ${gain} gold`);
      }
      
    }
    else{
      var loss = rand;
      this.totalG -= loss;
      this.aLog.push(`You lose ${loss} gold!`);
    }
  }

}
