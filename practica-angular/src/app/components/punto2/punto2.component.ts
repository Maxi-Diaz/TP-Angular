import { Asistente } from './../../models/asistente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistente: Asistente;
  listaAsistente: Array<Asistente>;
  control: boolean = false;
  //prueba: boolean = true;

  constructor() {
    this.asistente = new Asistente;
    this.listaAsistente = new Array<Asistente>();
  }

  ngOnInit(): void {
  }

  public checked(e){
    if (e.target.checked == true) {
      this.control = true;
    } else {
      this.control = false;
    }
  }

  public reiniciar(){

  }

  /**
   * guardarAsistente
   */
  public guardarAsistente() {
    this.asistente.solicitarCons = this.control;
    this.listaAsistente.push(this.asistente);
    this.asistente = new Asistente();
  }

}
