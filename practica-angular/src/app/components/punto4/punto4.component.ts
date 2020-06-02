import { CrucigramaService } from './../../services/crucigrama.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  itemSeleccionado;
  letrasParaAdivinar = [];
  letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  indiceEnFoco: string;
  juegoIniciado: boolean;
  vidas: number;
  puntaje: number;

  constructor(private crucigramaService: CrucigramaService) {
    this.crucigramaService.cargarPalabras();
    this.crucigramaService.listarPalabras();
    this.juegoIniciado = false;
  }

  ngOnInit(): void {
  }

  public iniciarJuego() {
    this.juegoIniciado = true;
    this.vidas = 6;
    this.puntaje = 0;
    this.itemAleatorio();
  }


  public itemAleatorio() {
    this.itemSeleccionado = this.crucigramaService.listarPalabras()[Math.floor(Math.random() * 9)];
    this.letrasParaAdivinar = Array.from(this.itemSeleccionado.ingles);
  }

  public verificarLetraIngresada() {
    let correctos = 0;
    for (let i = 0; i < this.letrasParaAdivinar.length; i++) {
      let input: any = document.getElementById(i.toString());
      let letraEscrita: string = input.value;
      let letraOculta = this.letrasParaAdivinar[i];
      if (letraEscrita.toLowerCase() == letraOculta.toLowerCase()) {
        correctos++;
      }
    }
    if (correctos == this.letrasParaAdivinar.length) {
      this.palabraAcertada();
    }
  }

  public palabraAcertada() {
    this.puntaje++
    this.limpiar();
    setTimeout(() => {
      this.itemAleatorio()
    }, 400);
  }

  public limpiar() {
    if (this.letrasParaAdivinar.length > 0) {
      let i = this.letrasParaAdivinar.length - 1;
      document.getElementById(i.toString()).setAttribute("value", "");
      this.letrasParaAdivinar.pop();
      this.limpiar();
    }
  }

  public seleccionarTecla(letra) {
    let input: any = document.getElementById(this.indiceEnFoco);
    input.value = letra;
    if (this.letrasParaAdivinar[this.indiceEnFoco] != letra) {
      this.vidas--;
    }
    if (this.vidas != 0) {
      this.verificarLetraIngresada();
    } else {
      this.juegoIniciado = false;
    }
  }

  public verificarBotones(indice: string) {
    this.indiceEnFoco = indice;
  }

  public verificarPalabra(i: string, event) {
    if (event.keyCode > 57) {
      let input: any = document.getElementById(i);
      input.value = event.key;
      if (this.letrasParaAdivinar[i] != input.value.toLowerCase()) {
        this.vidas--;
      }
      if (this.vidas != 0) {
        this.verificarLetraIngresada();
      }
    }
  }
}