import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../services/paises.interfaces';

@Component({
  selector: 'app-table-pais',
  templateUrl: './table-pais.component.html',
  styleUrls: ['./table-pais.component.css'],
})
export class TablePaisComponent implements OnInit {
  @Input() paises: Country[] = [];

  constructor() {}

  ngOnInit(): void {}
}
