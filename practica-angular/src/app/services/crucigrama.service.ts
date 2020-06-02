import { Palabra } from './../models/palabra';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrucigramaService {
  palabras: Array<Palabra>;

  constructor() {
    this.palabras = new Array<Palabra>();
  }

  public cargarPalabras() {
    this.palabras.push({ espaniol: 'leon', ingles: 'lion', img: './assets/punto4/026.png' })
    this.palabras.push({ espaniol: 'zorro', ingles: 'fox', img: './assets/punto4/018.png' })
    this.palabras.push({ espaniol: 'oveja', ingles: 'sheep', img: './assets/punto4/049.png' })
    this.palabras.push({ espaniol: 'elefante', ingles: 'elephant', img: './assets/punto4/009.png' })
    this.palabras.push({ espaniol: 'perro', ingles: 'dog', img: './assets/punto4/001.png' })
    this.palabras.push({ espaniol: 'camello', ingles: 'camel', img: './assets/punto4/015.png' })
    this.palabras.push({ espaniol: 'leopardo', ingles: 'leopard', img: './assets/punto4/027.png' })
    this.palabras.push({ espaniol: 'caballo', ingles: 'horse', img: './assets/punto4/028.png' })
    this.palabras.push({ espaniol: 'pato', ingles: 'duck', img: './assets/punto4/039.png' })
    this.palabras.push({ espaniol: 'serpiente', ingles: 'snake', img: './assets/punto4/073.png' })
  }

  public listarPalabras() {
    return this.palabras;
  }
}