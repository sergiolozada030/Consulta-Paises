import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../services/paises.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string;
  mostrarError: boolean;
  msjError: string;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.mostrarError = false;
    this.termino = termino;
    console.log(termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (error) => {
        console.log(error);
        this.mostrarError = true;
        this.paises = [];
        this.msjError = 'No se encontraron resultados para ' + this.termino;
      }
    );
  }
}
