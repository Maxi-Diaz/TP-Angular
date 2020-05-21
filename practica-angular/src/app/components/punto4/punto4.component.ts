import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  checks = true;
  solicitur: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * cambio
e   */
  public cambio(e) {
    if (e.target.checked == true) {
      this.solicitur = true;
      this.checks=true;
      console.log(this.solicitur);
    } else {
      this.solicitur = false;
      this.checks=false;
      console.log(this.solicitur);
    }
  }
}
