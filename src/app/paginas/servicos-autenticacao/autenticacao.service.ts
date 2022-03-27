import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  usuarioAutenticado: boolean = false;

  constructor() { }

  autenticar(email: string, password: string):boolean{
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
}
