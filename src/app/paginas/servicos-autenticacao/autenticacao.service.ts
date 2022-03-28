import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    let r = this.http.post(this.baseUrl, {email: email, password: password})
    .subscribe(resposta => {
      let token = JSON.stringify(resposta).substring(10,158);
      console.log(`resposta  rails jwt>>>>${token}`);
    });
    
    return r;
  }

}
