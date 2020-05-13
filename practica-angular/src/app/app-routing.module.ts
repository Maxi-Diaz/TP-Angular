import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Punto1Component} from './components/punto1/punto1.component';
import {Punto2Component} from './components/punto2/punto2.component';
import {Punto3Component} from './components/punto3/punto3.component';
import {Punto4Component} from './components/punto4/punto4.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';



const routes: Routes = [
  { path: 'punto1', component: Punto1Component },
  { path: 'punto2', component: Punto2Component },
  { path: 'punto3', component: Punto3Component },
  { path: 'punto4', component: Punto4Component },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
