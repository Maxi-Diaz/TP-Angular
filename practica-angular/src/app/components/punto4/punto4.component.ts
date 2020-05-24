import { Palabra } from './../../models/palabra';
import { CrucigramaService } from './../../services/crucigrama.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  listaPalabras: Array<Palabra>;
  palabra: Palabra;
  vida: number;
  puntaje: number;
  gano: boolean;
  perdio: boolean;
  juegoIniciado: boolean;
  tamPalabraACtual: number;
  indicePalabraActual: number;
  arrayIngles: Array<string>;
  arrayIngresados: Array<string>;
  letra1: string;
  letra2: string;
  letra3: string;
  letra4: string;
  letra5: string;
  letra6: string;
  letra7: string;
  letra8: string;

  constructor(private palabraService: CrucigramaService) {
    this.obtenerPalabra();
    this.iniciarJuego();
    this.juegoIniciado = false;
  }

  ngOnInit(): void {
  }

  /* Iniciar Juego */
  public iniciarJuego() {
    this.gano = false;
    this.juegoIniciado = true;
    this.perdio = false;
    this.vida = 6;
    this.puntaje = 0;
    this.letra1 = "";
    this.letra2 = "";
    this.letra3 = "";
    this.letra4 = "";
    this.letra5 = "";
    this.letra6 = "";
    this.letra7 = "";
    this.letra8 = "";

    this.indicePalabraActual = 0;
    this.palabra = this.listaPalabras[this.indicePalabraActual]
    this.tamPalabraACtual = this.palabra.ingles.length;
    this.arrayIngles = this.palabra.ingles.split("");

    var palabraUsuario = this.palabra.ingles;
    palabraUsuario = palabraUsuario.replace(/./gi, "");
    this.arrayIngresados = palabraUsuario.split("");
  }

  /**
   * obtenerPalabra
   */
  public obtenerPalabra() {
    this.listaPalabras = this.palabraService.getPalabra();
  }

  /**
   * colocarLetra
   */
  public colocarLetra() {
    this.arrayIngresados[0] = this.letra1;
    this.arrayIngresados[1] = this.letra2;
    this.arrayIngresados[2] = this.letra3;
    this.arrayIngresados[3] = this.letra4;
    this.arrayIngresados[4] = this.letra5;
    this.arrayIngresados[5] = this.letra6;
    this.arrayIngresados[6] = this.letra7;
    this.arrayIngresados[7] = this.letra8;

    if (this.arrayIngresados.join("") == this.arrayIngles.join("")) {
      alert("iguales")
      this.cambiarSiguientePalabra();
    }
  }

  /**
   * cambiarSiguiente
   */
  public cambiarSiguientePalabra() {
    
  }
}
