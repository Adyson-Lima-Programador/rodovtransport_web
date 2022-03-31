import { Component, OnInit } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Pacote } from '../servicos-packages/pacotes.model';
import { PacotesService } from '../servicos-packages/pacotes.service';
import { UsuariosService } from '../servicos-users/usuarios.service';

@Component({
  selector: 'app-pacotes-cliente',
  templateUrl: './pacotes-cliente.component.html',
  styleUrls: ['./pacotes-cliente.component.css']
})
export class PacotesClienteComponent implements OnInit {

  public paginaAtual: number = 1;
  pacotes: Pacote[] = [];
  pacotesLista: Pacote[] = [];

  // Determina quais colunas serão vistas em cada linha da tabela
  displayedColumns: string[] = ['id', 'content', 'created_at', 'status'];

  // Configura posições da snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _snackBar: MatSnackBar,
    private pacoteService: PacotesService,
    private usuarioService: UsuariosService) {
  }

  ngOnInit(): void {
    
    this.exibeSnack("Bem vindo usuário !", "notif-success");
    this.listarPacotes();
    
  }

  listarPacotes(): any {
    let email: any = '';
    email = window.localStorage.getItem('email_usuario');
    this.usuarioService.readByEmail(email).subscribe(pacotes => {      
      this.pacotes = pacotes;
    });
  } 

  exibeSnack(mensagem: string, classe_css: string): void {
    this._snackBar.open(mensagem, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: classe_css,
      duration: 5000
    });
  }

}
