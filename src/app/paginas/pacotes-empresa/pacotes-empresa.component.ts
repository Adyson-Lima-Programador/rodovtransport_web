import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { Pacote } from '../servicos-packages/pacotes.model';
import { PacotesService } from '../servicos-packages/pacotes.service';

@Component({
  selector: 'app-pacotes-empresa',
  templateUrl: './pacotes-empresa.component.html',
  styleUrls: ['./pacotes-empresa.component.css']
})
export class PacotesEmpresaComponent implements OnInit {

  public paginaAtual: number = 1;
  pacotes: Pacote[] = [];
  listaPacotes: any;

  // Determina quais colunas serão vistas em cada linha da tabela
  displayedColumns: string[] = ['id', 'content', 'created_at', 'status', 'acoes'];

  // Configura posições da snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar,
    private pacoteService: PacotesService,
     private router: Router) { }

  ngOnInit(): void {

    this.exibeSnack("Bem vindo administrador!", "notif-success")
    this.listarPacotes();

  }

  listarPacotes(): any {
    this.pacoteService.buscarTodos().subscribe(pacotes => {
      this.pacotes = pacotes;
      this.listaPacotes = new MatTableDataSource(this.pacotes);
    });
  }

  voltar(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual -= 1;
      this.pacoteService.buscarProximaPagina(this.paginaAtual).subscribe(pacotes => {
        this.pacotes = pacotes;
        this.listaPacotes = new MatTableDataSource(this.pacotes);
      });
    }
  }

  proximo(): void {
    if (this.paginaAtual < 15) {
      this.paginaAtual += 1;
      this.pacoteService.buscarProxinaAnterior(this.paginaAtual).subscribe(pacotes => {
        this.pacotes = pacotes;
        this.listaPacotes = new MatTableDataSource(this.pacotes);
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
    this.listaPacotes.filter = filterValue.trim().toLowerCase();
  }

  criarPacotes():void{
    this.router.navigate(['pacotes-create']);
  }


}

