import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PacotesService } from '../servicos-packages/pacotes.service';
import { Pacote } from '../servicos-packages/pacotes.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pacotes-update',
  templateUrl: './pacotes-update.component.html',
  styleUrls: ['./pacotes-update.component.css']
})
export class PacotesUpdateComponent implements OnInit {

  pacote: Pacote = {
    id: 0,
    content: '',
    status: '',
    user_id: 0
  }

  // Configura ReactiveForms
  public formulario: FormGroup = new FormGroup({
    'id': new FormControl(null),
    'content': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'status': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'user_id': new FormControl(null, [Validators.required, Validators.maxLength(3)])
  });

  // Configura posições da snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private pacotesService: PacotesService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') || ' ';
    this.pacotesService.readById(id).subscribe(pacote => {
      this.pacote = pacote;
      this.formulario.get('id')?.setValue(this.pacote.id);
      this.formulario.get('content')?.setValue(this.pacote.content);
      this.formulario.get('status')?.setValue(this.pacote.status);
      this.formulario.get('user_id')?.setValue(this.pacote.user_id);
    });

  }

  updatePacote(): void {

    if (this.formulario.status === "VALID") {
      this.pacotesService.update(this.formulario.value).subscribe(() => {
        this.exibeSnack("Pacote atualizado com sucesso!", "notif-success");
      })
    } else {
      this.exibeSnack('O pacote não foi atualizado. Dados inválidos!', 'notif-error');
    }

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
