import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacote } from './pacotes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacotesService {

  baseUrl = "https://rodovtransport.herokuapp.com/api/v2/packages";

  constructor(private http: HttpClient) { }

  read(): Observable<Pacote[]> {
    return this.http.get<Pacote[]>(this.baseUrl);
  }
}
