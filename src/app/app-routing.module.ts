import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { PacotesClienteComponent } from './paginas/pacotes-cliente/pacotes-cliente.component';
import { PacotesCreateComponent } from './paginas/pacotes-create/pacotes-create.component';
import { PacotesEmpresaComponent } from './paginas/pacotes-empresa/pacotes-empresa.component';
import { PacotesUpdateComponent } from './paginas/pacotes-update/pacotes-update.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "pacotes-cliente", component: PacotesClienteComponent },
  { path: "pacotes-empresa", component: PacotesEmpresaComponent },
  { path: "pacotes-create", component: PacotesCreateComponent },
  { path: "pacotes-empresa/pacotes-update/:id", component: PacotesUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
