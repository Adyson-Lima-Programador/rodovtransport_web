import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './paginas/autenticacao.guard';
import { LoginComponent } from './paginas/login/login.component';
import { PacotesClienteComponent } from './paginas/pacotes-cliente/pacotes-cliente.component';
import { PacotesCreateComponent } from './paginas/pacotes-create/pacotes-create.component';
import { PacotesDeleteComponent } from './paginas/pacotes-delete/pacotes-delete.component';
import { PacotesEmpresaComponent } from './paginas/pacotes-empresa/pacotes-empresa.component';
import { PacotesUpdateComponent } from './paginas/pacotes-update/pacotes-update.component';
import { UsuariosCreateComponent } from './paginas/usuarios-create/usuarios-create.component';
import { UsuariosDeleteComponent } from './paginas/usuarios-delete/usuarios-delete.component';
import { UsuariosEmpresaComponent } from './paginas/usuarios-empresa/usuarios-empresa.component';
import { UsuariosUpdateComponent } from './paginas/usuarios-update/usuarios-update.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "pacotes-cliente", component: PacotesClienteComponent, canActivate:[AutenticacaoGuard] },
  { path: "pacotes-empresa", component: PacotesEmpresaComponent, canActivate:[AutenticacaoGuard] },
  { path: "pacotes-create", component: PacotesCreateComponent, canActivate:[AutenticacaoGuard] },
  { path: "pacotes-empresa/pacotes-update/:id", component: PacotesUpdateComponent, canActivate:[AutenticacaoGuard] },
  { path: "pacotes-empresa/pacotes-delete/:id", component: PacotesDeleteComponent, canActivate:[AutenticacaoGuard] },
  { path: "usuarios-empresa", component: UsuariosEmpresaComponent, canActivate:[AutenticacaoGuard] },
  { path: "usuarios-create", component: UsuariosCreateComponent, canActivate:[AutenticacaoGuard] },
  { path: "usuarios-empresa/usuarios-update/:id", component: UsuariosUpdateComponent, canActivate:[AutenticacaoGuard] },
  { path: "usuarios-empresa/usuarios-delete/:id", component: UsuariosDeleteComponent, canActivate:[AutenticacaoGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
