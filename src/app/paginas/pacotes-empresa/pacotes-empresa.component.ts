import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Pacote } from '../servicos-packages/pacotes.model';
import { PacotesService } from '../servicos-packages/pacotes.service';
import { environment } from 'src/environments/environment';
// import { PacotesDeleteComponent } from '../pacotes-delete/pacotes-delete.component';

export interface DialogData {
  id_elemento: number;
}

@Component({
  selector: 'app-pacotes-empresa',
  templateUrl: './pacotes-empresa.component.html',
  styleUrls: ['./pacotes-empresa.component.css']
})
export class PacotesEmpresaComponent implements OnInit {

  id_elemento: number = 0;

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
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    if (environment.ACESSOS_AO_ADMIN === 0) {
      this.exibeSnack("Bem vindo administrador!", "notif-success")
      this.listarPacotes();
      environment.ACESSOS_AO_ADMIN = 1;

    } else {

      this.listarPacotes();

    }

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
      this.pacoteService.navegarPagina(this.paginaAtual).subscribe(pacotes => {
        this.pacotes = pacotes;
        this.listaPacotes = new MatTableDataSource(this.pacotes);
      });
    }
  }

  proximo(): void {
    if (this.paginaAtual < 15) {
      this.paginaAtual += 1;
      this.pacoteService.navegarPagina(this.paginaAtual).subscribe(pacotes => {
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

  criarPacotes(): void {
    this.router.navigate(['pacotes-create']);
  }

  // openDialog():void{
  //   const dialogRef = this.dialog.open(PacotesDeleteComponent,{
  //     data: {id_elemento: this.id_elemento}
  //   });
    
  //   dialogRef.afterClosed().subscribe( () => {
  //     this.exibeSnack("Pacote excluido com sucesso!", "notif-success")
  //   });
  // }


}

