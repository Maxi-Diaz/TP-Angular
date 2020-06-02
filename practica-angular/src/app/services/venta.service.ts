import { Pasaje } from './../models/pasaje';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  listVentas: Array<Pasaje>;

  constructor() {
    this.listVentas = new Array<Pasaje>();
   }

    /**
   * Listar Ventas
   */
  public Listar() {
    return this.listVentas;
  }

  /**
   * guardar Ventas
   */
  public guardar(venta: Pasaje) {
    this.listVentas.push(venta);
  }

  /**
   * eliminar
   */
  public eliminar(venta: Pasaje) {
    let indice = this.listVentas.findIndex((item: Pasaje) => item.dniPasajero === venta.dniPasajero);
    this.listVentas.splice(indice, 1);
  }

  /**
   * modificar
   */
  public modificar(venta: Pasaje) {
    let indice = this.listVentas.findIndex((item: Pasaje) => item.dniPasajero === venta.dniPasajero);
    this.listVentas.splice(indice, 1, venta);
  }
}
