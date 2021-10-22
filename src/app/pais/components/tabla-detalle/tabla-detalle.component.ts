import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../services/paises.interfaces';

@Component({
  selector: 'app-tabla-detalle',
  templateUrl: './tabla-detalle.component.html',
  styleUrls: ['./tabla-detalle.component.css'],
})
export class TablaDetalleComponent implements OnInit {
  @Input() paises: Country[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.paises);
  }
}
