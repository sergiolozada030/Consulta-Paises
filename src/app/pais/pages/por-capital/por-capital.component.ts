import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../services/paises.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  termino: string;
  mostrarError: boolean;
  msjError: string;
  paises: Country[] = [];
  placeholder = 'Ingrese la capítal';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    if (!termino) {
      return;
    }
    this.mostrarError = false;
    this.paisService.buscarCapital(termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (error) => {
        this.mostrarError = true;
        this.msjError = 'No se encontraron resultados para: ' + termino;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {}
}
