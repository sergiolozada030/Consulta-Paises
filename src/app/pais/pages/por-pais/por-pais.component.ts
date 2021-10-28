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
  placeholder = 'Ingrese el país';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    if (!termino) {
      return;
    }
    this.mostrarError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (error) => {
        this.mostrarError = true;
        this.paises = [];
        this.msjError = 'No se encontraron resultados para ' + this.termino;
      }
    );
  }

  sugerencias(termino: string) {
    this.mostrarError = false;
    // Crear Sugerencias
  }
}
