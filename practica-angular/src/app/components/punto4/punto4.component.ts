import { CrucigramaService } from './../../services/crucigrama.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  constructor( private palabraService: CrucigramaService) { }

  ngOnInit(): void {
  }

}
