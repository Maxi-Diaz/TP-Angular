import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../models/mensaje';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  mensaje: Mensaje;
  tamMaxTexto: number = 120;
  tamTexto: number = 0;
  listaMensajes: Array<Mensaje>;
 
  constructor() { 
    this.mensaje = new Mensaje;
    this.listaMensajes = new Array<Mensaje>();
  }

  ngOnInit(): void {
  }

  /**
   * controlTamTexto
   */
  public controlTamTexto() {
    this.tamTexto = this.mensaje.texto.length;
  }

  /**
   * enviarMensaje
   */
  public enviarMensaje() {
    this.mensaje.fecha = new Date();
    this.listaMensajes.push(this.mensaje);
  }

  /**
   * limpiarMensaje
   */
  public limpiarMensaje() {
    this.mensaje = new Mensaje();
  }

}
