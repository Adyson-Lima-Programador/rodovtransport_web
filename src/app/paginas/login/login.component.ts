import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // Configura ReactiveForms
  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
  });

  // Configura posições da snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar, private router: Router) {

  }

  ngOnInit(): void {

  }

  login(): void {

    if (this.formulario.status === "INVALID") {
      this.exibeSnack("dados inválidos", "notif-error");
      this.limpaFormulario();
    }
    else { 

      if (this.formulario.value.email === "user@user.com" && this.formulario.value.password === "123") {
        environment.USUARIO_LOGADO = 'user';
        this.router.navigate(['pacotes-cliente']);
      }
      else if (this.formulario.value.email === "admin@admin.com" && this.formulario.value.password === "123") {
        environment.USUARIO_LOGADO = 'admin';
        this.router.navigate(['pacotes-empresa']);
      }
      else { // Se form estiver válido, mas o email e senha não existirem...
        this.exibeSnack('Email ou Senha incorreto!', 'notif-error');
      }

    }

  }

  exibeSnack(mensagem: string, classe_css: string): void {
    this._snackBar.open(mensagem, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: classe_css,
      duration: 5000
    });
  }

  limpaFormulario(): void {
    this.formulario.get('email')?.setValue('');
    this.formulario.get('password')?.setValue('');
  }

}
