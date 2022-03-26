import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicos-users/usuarios.service';
import { Usuario } from '../servicos-users/usuarios.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios-update',
  templateUrl: './usuarios-update.component.html',
  styleUrls: ['./usuarios-update.component.css']
})
export class UsuariosUpdateComponent implements OnInit {

  usuario: Usuario = {  
    id: 0,  
    email: '',
    name: '',
    password: '',
    category: '' 
  }

  // Configura ReactiveForms
  public formulario: FormGroup = new FormGroup({    
    'id': new FormControl(null),
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
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') || ' ';
    this.usuariosService.readById(id).subscribe(usuario => {
      this.usuario = usuario;
      this.formulario.get('id')?.setValue(this.usuario.id);
      this.formulario.get('email')?.setValue(this.usuario.email);
      this.formulario.get('name')?.setValue(this.usuario.name);
      this.formulario.get('password')?.setValue(this.usuario.password);
      this.formulario.get('category')?.setValue(this.usuario.category);
    });

  }

  updateUsuario(): void {
    
    if (this.formulario.status === "VALID") {
      this.usuariosService.update(this.formulario.value).subscribe(() => {
        this.exibeSnack("Usuário atualizado com sucesso!", "notif-success");
      })
    } else {
      this.exibeSnack('O usuário não foi atualizado. Dados inválidos!', 'notif-error');
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
