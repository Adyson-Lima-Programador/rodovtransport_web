import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  usuarioAutenticado: boolean = false;

  baseUrl = "http://localhost:3000/api/v1/auths";

  constructor(private http: HttpClient ) { }

  autenticar(email: string, password: string):boolean{
    this.loginJWT(email,password);
    if(email === "user@user.com" && password === "123"){
      environment.USUARIO_LOGADO = 'user';
      this.usuarioAutenticado = true;
      return true;
    }else if(email === "admin@admin.com" && password === "123"){
      environment.USUARIO_LOGADO = 'admin';
      this.usuarioAutenticado = true;
      return true;
    }
    return false;
  }

  loginJWT(email: string, password: string){
    let resposta_rails = this.http.post(this.baseUrl, {email: email, password: password})
    .subscribe(resposta => {
      let token_bruto = JSON.stringify(resposta);
      let token_limpo = JSON.stringify(resposta).substring(10,token_bruto.length-2);
      console.log(`token _bruto: ${token_bruto}`);
      console.log(`token_limpo: ${token_limpo}`);
    });
    
    return resposta_rails;
  }

}
