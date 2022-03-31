import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuarios.model';
import { Observable } from 'rxjs';
import { Pacote } from '../servicos-packages/pacotes.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // baseUrl = "http://localhost:3000/api/v2/users";
  baseUrl = "https://rodovtransport.herokuapp.com/api/v2/users";
  // baseUrl2 = "http://localhost:3000/api/v1/users";
  baseUrl2 = "https://rodovtransport.herokuapp.com/api/v1/users";

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  navegarPagina(paginaAtual: number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl + `?page=${paginaAtual}`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  readById(id: string): Observable<Usuario> {
    const url = `${this.baseUrl2}/${id}`;
    return this.http.get<Usuario>(url);
  }

  readByEmail(email: string): Observable<Pacote[]> {
    const url = `${this.baseUrl}/${email}`;
    return this.http.get<Pacote[]>(url);
  }

  update(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario);
  }

  delete(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/${usuario.id}`;
    return this.http.delete<Usuario>(url);
  }

}
