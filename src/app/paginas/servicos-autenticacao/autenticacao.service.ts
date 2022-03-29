import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  token_bruto: string = '';
  token_limpo: string = '';
  categoria_usuario: string = '';
  usuarioAutenticado: boolean = false;

  baseUrl = "http://localhost:3000/api/v1/auths";

  constructor(private http: HttpClient, private router: Router) {
    this.categoria_usuario = '';
    environment.USUARIO_LOGADO = '';
  }

  async loginJWT(email: string, password: string) {
    await this.http.post(this.baseUrl, { email: email, password: password })
      .subscribe(resposta => {
        this.token_bruto = JSON.stringify(resposta);
        this.token_limpo = JSON.stringify(resposta).substring(26, this.token_bruto.length - 2);
        this.categoria_usuario = JSON.stringify(resposta).substring(14, 15);

        if (this.categoria_usuario === "2") {
          environment.USUARIO_LOGADO = 'user';
          this.usuarioAutenticado = true;
          window.localStorage.setItem('email_usuario',email);
          this.router.navigate(['pacotes-cliente']);          

        } else if (this.categoria_usuario === "1") {
          environment.USUARIO_LOGADO = 'admin';
          this.usuarioAutenticado = true;
          this.router.navigate(['pacotes-empresa']);
        }

        // console.log(`token _bruto: ${this.token_bruto}`);
        // console.log(`token_limpo: ${this.token_limpo}`);
        // console.log(`categoria_usuario: ${this.categoria_usuario}`);
        // window.localStorage.clear;
        // window.localStorage.setItem('token',this.token_limpo);
      });

  }

}
