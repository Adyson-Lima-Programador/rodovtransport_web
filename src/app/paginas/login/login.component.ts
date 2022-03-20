import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  rota: string = '';

  constructor(private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {

  }

  login(): boolean {
    
    if (this.formulario.get('email')?.value === "user@user.com" && this.formulario.get('password')?.value === "123") {
      alert("usuário logado");
      // this.rota.navigate(['/pacotes_cliente']);
      return true;
    }    
    else if (this.formulario.get('email')?.value === "admin@admin.com" && this.formulario.get('password')?.value === "123") {
      alert("administrador logado");
      // this.rota.navigate(['/pacotes']);
      return true;
    }
    else {
      this.exibeSnack('Email ou Senha incorreto!');
      return false;
    }
  }

  exibeSnack(mensagem:string): void{
    this._snackBar.open(mensagem, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'notif-success',
      duration: 3000
    });
  }

}
