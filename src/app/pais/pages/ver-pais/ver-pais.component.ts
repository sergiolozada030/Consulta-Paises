import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../services/paises.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.buscarPaisPorCodigo(id)))
      .subscribe((pais) => {
        console.log(pais);
        this.pais = pais[0];
        this.pais.continents[0];
      });

    /* 
      Otra manera de hacerlo mismo
      this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.paisService.buscarPaisPorCodigo(id).subscribe((pais) => {
        console.log(pais);
      });
    });
    */
  }
}
