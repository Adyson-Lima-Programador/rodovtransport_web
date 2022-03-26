import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicos-users/usuarios.service';
import { Usuario } from '../servicos-users/usuarios.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {

  usuario: Usuario = {    
    email: '',
    name: '',
    password: '',
    category: '' 
  }

  // Configura ReactiveForms
  public formulario: FormGroup = new FormGroup({    
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'name': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'category': new FormControl(null, [Validators.required]),
  });

  // Configura posições da snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private usuariosService: UsuariosService,
    private router: Router,
    private _snackBar: MatSnackBar,    
  ) { }

  ngOnInit(): void {
  }

  createUsuario(): void {
    
    if (this.formulario.status === "VALID") {
      this.usuariosService.create(this.formulario.value).subscribe(() => {
        this.exibeSnack("Usuário criado com sucesso!", "notif-success");
      })
    } else {
      this.exibeSnack('O usuário não foi criado. Dados inválidos!', 'notif-error');
    }

  }

  cancelar():void{
    this.router.navigate(["/usuarios-empresa"])
  }

  exibeSnack(mensagem: string, classe_css: string): void {
    this._snackBar.open(mensagem, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: classe_css,
      duration: 3000
    });
  }

}
