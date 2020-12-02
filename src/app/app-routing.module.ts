import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadshippmentComponent} from './components/loadshippment/loadshippment.component'
import {HomeComponent} from './components/home/home.component'
import { T1Component } from './components/tables/t1/t1.component';
import { T2Component } from './components/tables/t2/t2.component';
import { T3Component } from './components/tables/t3/t3.component';
import { ResultComponent } from './components/tables/result/result.component';

const routes: Routes = [
 {path: 'home',component: HomeComponent},
 {path: 'cargarPedido',component: LoadshippmentComponent},
 {path: 'tables/t1',component: T1Component},
 {path: 'tables/t2',component: T2Component},
 {path: 'tables/t3',component: T3Component},
 {path: 'tables/result',component: ResultComponent},
 {path: ' ', pathMatch: 'full', redirectTo: 'home'},
 {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
