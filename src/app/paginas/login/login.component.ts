import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AutenticacaoService } from '../servicos-autenticacao/autenticacao.service';

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

  constructor(

    private _snackBar: MatSnackBar,
    private autenticacaoService: AutenticacaoService) {

  }

  ngOnInit(): void {

  }

  login() {

    if (this.formulario.status === "INVALID") {
      this.exibeSnack("dados inválidos", "notif-error");
      this.limpaFormulario();
    }
    else {
      this.autenticacaoService.loginJWT(this.formulario.value.email, this.formulario.value.password)
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
