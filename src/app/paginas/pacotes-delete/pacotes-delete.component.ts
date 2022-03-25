import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PacotesService } from '../servicos-packages/pacotes.service';
import { Pacote } from '../servicos-packages/pacotes.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pacotes-delete',
  templateUrl: './pacotes-delete.component.html',
  styleUrls: ['./pacotes-delete.component.css']
})
export class PacotesDeleteComponent implements OnInit {

  pacote: Pacote = {
    id: 0,
    content: '',
    status: '',
    user_id: 0
  }

  // Configura posições da snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private pacotesService: PacotesService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') || ' ';
    this.pacotesService.readById(id).subscribe(pacote => {
      this.pacote = pacote;
    });

  }

  deletePacote(): void {

    this.pacotesService.delete(this.pacote).subscribe(() => {
      this.exibeSnack("Pacote excluído com sucesso!", "notif-success");
    });

  }

  cancelar(): void {
    this.router.navigate(["/pacotes-empresa"])
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
