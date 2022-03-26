import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario } from '../servicos-users/usuarios.model';
import { UsuariosService } from '../servicos-users/usuarios.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-usuarios-empresa',
  templateUrl: './usuarios-empresa.component.html',
  styleUrls: ['./usuarios-empresa.component.css']
})
export class UsuariosEmpresaComponent implements OnInit {

  public paginaAtual: number = 1;
  usuarios: Usuario[] = [];
  listaUsuarios: any;

  // Determina quais colunas serão vistas em cada linha da tabela
  displayedColumns: string[] = ['id', 'email', 'name', 'category', 'acoes'];

  // Configura posições da snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar,
    private usuarioService: UsuariosService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    if (environment.ACESSOS_AO_ADMIN === 0) {
      this.exibeSnack("Bem vindo administrador!", "notif-success")
      this.listarUsuarios();
      environment.ACESSOS_AO_ADMIN = 1;

    } else {

      this.listarUsuarios();

    }

  }

  listarUsuarios(): any {
    this.usuarioService.buscarTodos().subscribe(usuarios => {
      this.usuarios = usuarios;
      this.listaUsuarios = new MatTableDataSource(this.usuarios);
    });
  }

  voltar(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual -= 1;
      this.usuarioService.navegarPagina(this.paginaAtual).subscribe(usuarios => {
        this.usuarios = usuarios;
        this.listaUsuarios = new MatTableDataSource(this.usuarios);
      });
    }
  }

  proximo(): void {
    if (this.paginaAtual < 15) {
      this.paginaAtual += 1;
      this.usuarioService.navegarPagina(this.paginaAtual).subscribe(usuarios => {
        this.usuarios = usuarios;
        this.listaUsuarios = new MatTableDataSource(this.usuarios);
      });
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaUsuarios.filter = filterValue.trim().toLowerCase();
  }

  criarUsuarios(): void {
    this.router.navigate(['usuarios-create']);
  }

}
