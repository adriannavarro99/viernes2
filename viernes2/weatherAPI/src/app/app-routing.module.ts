import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';

const routes: Routes = [
  {
    path:'seattle',
    component: SeattleComponent
  },
  {
    path:'chicago',
    component: ChicagoComponent
  },
  {
    path:'burbank',
    component: BurbankComponent
  },
  {
    path: 'dallas',
    component: DallasComponent
  },
  {
    path: 'sanjose',
    component: SanjoseComponent
  },
  {
    path: 'washington',
    component: WashingtonComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
            CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

