import { Component, OnInit } from '@angular/core';
import { Country } from '../../services/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  regiones = ['asia', 'americas', 'europe', 'africa', 'oceania'];
  regionActiva: string;
  paises: Country[] = [];
  mostrarError: boolean;
  msjError: string;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (this.regionActiva === region) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.mostrarError = false;
    this.paisService.buscarPaisPorRegion(region).subscribe((paises) => {
      this.paises = paises;
    });
  }

  getClaseCss(region: string) {
    return region === this.regionActiva
      ? 'btn btn-dark me-2'
      : 'btn btn-outline-primary me-2';
  }
}
