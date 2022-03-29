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
  selector: 'app-usuarios-delete',
  templateUrl: './usuarios-delete.component.html',
  styleUrls: ['./usuarios-delete.component.css']
})
export class UsuariosDeleteComponent implements OnInit {

  usuario: Usuario = {  
    id: 0,  
    email: '',
    name: '',
    password: '',
    category: '' 
  }

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
    });

  }

  deleteUsuario(): void {

    this.usuariosService.delete(this.usuario).subscribe(() => {
      this.exibeSnack("Usuário excluído com sucesso!", "notif-success");
    });

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
