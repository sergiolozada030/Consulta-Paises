import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: ['./input-busqueda.component.css'],
})
export class InputBusquedaComponent implements OnInit {
  @Output() onEnter = new EventEmitter<string>();

  termino: string;

  constructor() {}

  ngOnInit(): void {}

  buscar() {
    this.onEnter.emit(this.termino);
  }
}
