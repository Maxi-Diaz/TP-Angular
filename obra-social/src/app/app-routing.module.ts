import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'galeria', component: GaleriaComponent},
  {path:'registro', component: RegistroComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
