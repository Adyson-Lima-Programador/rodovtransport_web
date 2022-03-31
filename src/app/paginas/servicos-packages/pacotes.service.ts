import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacote } from './pacotes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacotesService {

  // baseUrl = "http://localhost:3000/api/v2/packages";
  baseUrl = "https://rodovtransport.herokuapp.com/api/v2/packages";

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Pacote[]> {
    return this.http.get<Pacote[]>(this.baseUrl);
  }

  navegarPagina(paginaAtual: number): Observable<Pacote[]> {
    return this.http.get<Pacote[]>(this.baseUrl + `?page=${paginaAtual}`);
  }

  create(pacote: Pacote): Observable<Pacote> {
    return this.http.post<Pacote>(this.baseUrl, pacote);
  }

  readById(id: string): Observable<Pacote> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pacote>(url);
  }

  update(pacote: Pacote): Observable<Pacote> {
    const url = `${this.baseUrl}/${pacote.id}`;
    return this.http.put<Pacote>(url, pacote);
  }

  delete(pacote: Pacote): Observable<Pacote> {
    const url = `${this.baseUrl}/${pacote.id}`;
    return this.http.delete<Pacote>(url);
  }
    

}
