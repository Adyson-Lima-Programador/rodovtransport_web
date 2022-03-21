import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface PeriodicElement {
  conteudo: string;
  pedido: number;
  postagem: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {pedido: 1, conteudo: 'caixas de lampadas', postagem: '11/10/2021', status: 'entregue'},
  {pedido: 2, conteudo: '250 sacas de arroz', postagem: '11/10/2021', status: 'postado'},
  {pedido: 3, conteudo: 'televisores', postagem: '11/10/2021', status: 'entregue'},
  {pedido: 4, conteudo: '10 geladeiras', postagem: '11/10/2021', status: 'em transito'},
  {pedido: 5, conteudo: '34 pneus', postagem: '11/10/2021', status: 'em transito'},
  {pedido: 6, conteudo: '20 vasos sanitários', postagem: '11/10/2021', status: 'em transito'},
  {pedido: 7, conteudo: '12 portas de aço', postagem: '11/10/2021', status: 'entregue'},
  {pedido: 8, conteudo: '30 boxs de banheiro', postagem: '11/10/2021', status: 'postado'},

];


@Component({
  selector: 'app-pacotes-cliente',
  templateUrl: './pacotes-cliente.component.html',
  styleUrls: ['./pacotes-cliente.component.css']
})
export class PacotesClienteComponent implements OnInit {
  
  // COnfigura tabela
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  // Configura posições da snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.exibeSnack("Bem vindo usuário !","notif-success")

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
