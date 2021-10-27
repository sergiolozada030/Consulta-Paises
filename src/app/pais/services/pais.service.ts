import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './paises.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(pais: string) {
    const url = `${this.apiUrl}/name/${pais}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(capital: string) {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisPorCodigo(codigo: string) {
    const url = `${this.apiUrl}/alpha/${codigo}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisPorRegion(region: string) {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }
}
