import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrucigramaService {

  palabra: any[] = [

    {
      id: 1,
      espaniol: "leon",
      img: "./assets/punto4/026.png",
      ingles: "fion",
    },
    {
      id: 2,
      espaniol: "Zorro",
      img: "./assets/punto4/018.png",
      ingles: "Fox",
    },
    {
      id: 3,
      espaniol: "oveja",
      img: "./assets/punto4/049.png",
      ingles: "sheep",
    },
    {
      id: 4,
      espaniol: "elefante",
      img: "./assets/punto4/009.png",
      ingles: "elephant",
    },
    {
      id: 5,
      espaniol: "perro",
      img: "./assets/punto4/001.png",
      ingles: "dog",
    },
    {
      id: 6,
      espaniol: "camello",
      img: "./assets/punto4/015.png",
      ingles: "camel",
    },
    {
      id: 7,
      espaniol: "leopardo",
      img: "./assets/punto4/027.png",
      ingles: "leopard",
    },
    {
      id: 8,
      espaniol: "caballo",
      img: "./assets/punto4/028.png",
      ingles: "horse",
    },
    {
      id: 9,
      espaniol: "pato",
      img: "./assets/punto4/039.png",
      ingles: "duck",
    },
    {
      id: 10,
      espaniol: "serpiente",
      img: "./assets/punto4/073.png",
      ingles: "snake",
    },
  ]

  constructor() {

  }

  getPalabra(){
    return this.palabra;
  }
}
