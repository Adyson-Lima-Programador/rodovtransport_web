import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl();
  password = new FormControl();
  rota:string = '';

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  login(email_formulario: FormControl, password_formulario: FormControl): boolean {

    this.email = email_formulario;
    this.password = password_formulario;

    if (this.email.value.trim() === "user@user.com" && this.password.value.trim() === "123") {
      alert("usuário logado");
      // this.rota.navigate(['/pacotes_cliente']);
      return true;
    }
    else if (this.email.value.trim() === "admin@admin.com" && this.password.value.trim() === "123") {
      alert("administrador logado");
      // this.rota.navigate(['/pacotes']);
      return true;
    }
    else {
      alert("email ou senha incorreto!");
      return false;
    }
  }

}
