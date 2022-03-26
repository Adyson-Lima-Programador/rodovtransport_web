import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { PacotesClienteComponent } from './paginas/pacotes-cliente/pacotes-cliente.component';
import { PacotesCreateComponent } from './paginas/pacotes-create/pacotes-create.component';
import { PacotesDeleteComponent } from './paginas/pacotes-delete/pacotes-delete.component';
import { PacotesEmpresaComponent } from './paginas/pacotes-empresa/pacotes-empresa.component';
import { PacotesUpdateComponent } from './paginas/pacotes-update/pacotes-update.component';
import { UsuariosEmpresaComponent } from './paginas/usuarios-empresa/usuarios-empresa.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "pacotes-cliente", component: PacotesClienteComponent },
  { path: "pacotes-empresa", component: PacotesEmpresaComponent },
  { path: "pacotes-create", component: PacotesCreateComponent },
  { path: "pacotes-empresa/pacotes-update/:id", component: PacotesUpdateComponent },
  { path: "pacotes-empresa/pacotes-delete/:id", component: PacotesDeleteComponent },
  { path: "usuarios-empresa", component: UsuariosEmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
