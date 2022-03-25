import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacote } from './pacotes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacotesService {

  baseUrl = "http://localhost:3000/api/v2/packages";
  
  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Pacote[]> {
    return this.http.get<Pacote[]>(this.baseUrl);
  }

  navegarPagina(paginaAtual: number): Observable<Pacote[]> {
    return this.http.get<Pacote[]>(this.baseUrl + `?page=${paginaAtual}`);
  }

  // buscarProxinaAnterior(paginaAtual: number): Observable<Pacote[]> {
  //   return this.http.get<Pacote[]>(this.baseUrl + `?page=${paginaAtual}`);
  // }

  create(pacote: Pacote): Observable<Pacote> {
    return this.http.post<Pacote>(this.baseUrl, pacote);
  }

}
