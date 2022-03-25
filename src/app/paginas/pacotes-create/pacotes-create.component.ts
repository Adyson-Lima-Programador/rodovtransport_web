import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacotesService } from '../servicos-packages/pacotes.service';
import { Pacote } from '../servicos-packages/pacotes.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pacotes-create',
  templateUrl: './pacotes-create.component.html',
  styleUrls: ['./pacotes-create.component.css']
})
export class PacotesCreateComponent implements OnInit {

  pacote: Pacote = {    
    content: '',
    status: '',
    user_id: 0 
  }

  // Configura ReactiveForms
  public formulario: FormGroup = new FormGroup({    
    'content': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'status': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'user_id': new FormControl(null, [Validators.required, Validators.maxLength(3)])
  });

  // Configura posições da snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private pacotesService: PacotesService,
    private router: Router,
    private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  createPacote(): void {
    
    if (this.formulario.status === "VALID") {
      this.pacotesService.create(this.formulario.value).subscribe(() => {
        this.exibeSnack("Pacote criado com sucesso!", "notif-success");
      })
    } else {
      this.exibeSnack('O pacote não foi criado. Dados inválidos!', 'notif-error');
    }

  }

  cancelar():void{
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
