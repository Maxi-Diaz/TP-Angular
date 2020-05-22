import { VentaService } from './../../services/venta.service';
import { Pasaje } from './../../models/pasaje';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  venta: Pasaje;
  listaVentas: Array<Pasaje>;
  descuento: number = 0;
  precioActual: number = 0;
  mostrarDescuento:boolean = false;
  menor: number = 0;
  adulto: number = 0;
  jubilado:number = 0;

  constructor( private ventaService: VentaService) {
    this.venta = new Pasaje();
    this.listaVentas = new Array<Pasaje>();
    this.listarVentas();
   }

  ngOnInit(): void {
  }

  /**
   * guardarVentas
   
   */
  public guardarVentas() {
    this.venta.fechaCompra = new Date();
    this.venta.precioPasajero = this.precioActual;
    this.ventaService.guardar(this.venta);
    this.venta = new Pasaje();
    this.mostrarDescuento = false;

  }

  /**
   * listarVentas
   */
  public listarVentas() {
    this.listaVentas = this.ventaService.Listar();
  }

  /**
   * limpiarVentas
   
   */
  public limpiarVentas() {
    this.venta = new Pasaje();
  }

  /**
   * calcularDescuento
   */
  public calcularDescuento() {
    if(this.venta.categoriaPasajero == "m"){
      this.descuento = (this.venta.precioPasajero*25/100);
      this.precioActual = this.venta.precioPasajero - this.descuento;
      this.mostrarDescuento = true;
      this.menor = this.menor+1;
    }
    if(this.venta.categoriaPasajero == "j"){
      this.descuento = (this.venta.precioPasajero*50/100);
      this.precioActual = this.venta.precioPasajero - this.descuento;
      this.mostrarDescuento = true;
      this.jubilado = this.jubilado+1;
    }
    if(this.venta.categoriaPasajero == "a"){
      this.precioActual = this.venta.precioPasajero;
      this.mostrarDescuento = false;
      this.adulto = this.adulto+1;
    }
  }

}
