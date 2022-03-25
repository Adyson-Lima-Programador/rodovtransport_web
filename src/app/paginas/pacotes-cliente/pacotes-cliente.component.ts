import { Component, OnInit } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Pacote } from '../servicos-packages/pacotes.model';
import { PacotesService } from '../servicos-packages/pacotes.service';

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

  constructor(private _snackBar: MatSnackBar, private pacoteService: PacotesService) {
  }

  ngOnInit(): void {

    this.exibeSnack("Bem vindo usuário !", "notif-success");
    this.listarPacotes();

  }

  listarPacotes(): any {
    this.pacoteService.buscarTodos().subscribe(pacotes => {
      this.pacotes = pacotes;
    });
  }

  voltar(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual -= 1;
      this.pacoteService.navegarPagina(this.paginaAtual).subscribe(pacotes => {
        this.pacotes = pacotes;
      });
    }
  }

  proximo(): void {
    if (this.paginaAtual < 15) {
      this.paginaAtual += 1;
      this.pacoteService.navegarPagina(this.paginaAtual).subscribe(pacotes => {
        this.pacotes = pacotes;
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

}
