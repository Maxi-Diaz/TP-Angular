export class Pasaje {

    dniPasajero: string;
    precioPasajero: number;
    categoriaPasajero: string;
    fechaCompra: Date;

    Pasaje(dniPasajero?: string, precioPasajero?: number, categoriaPasajero?: string, fechaCompra?: Date) {
        this.dniPasajero = dniPasajero;
        this.precioPasajero = precioPasajero;
        this.categoriaPasajero = categoriaPasajero;
        this.fechaCompra = fechaCompra;
        
     }
}
