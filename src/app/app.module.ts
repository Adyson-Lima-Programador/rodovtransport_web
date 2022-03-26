import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './paginas/login/login.component';
import { PacotesClienteComponent } from './paginas/pacotes-cliente/pacotes-cliente.component';
import { PacotesEmpresaComponent } from './paginas/pacotes-empresa/pacotes-empresa.component';
import { HeaderComponent } from './paginas/componentes/header/header.component';
import { FooterComponent } from './paginas/componentes/footer/footer.component';
import { SidenavComponent } from './paginas/componentes/sidenav/sidenav.component';
import { SidenavAdminComponent } from './paginas/componentes/sidenav-admin/sidenav-admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PacotesCreateComponent } from './paginas/pacotes-create/pacotes-create.component';
import { PacotesUpdateComponent } from './paginas/pacotes-update/pacotes-update.component';
import { PacotesDeleteComponent } from './paginas/pacotes-delete/pacotes-delete.component';
import { UsuariosEmpresaComponent } from './paginas/usuarios-empresa/usuarios-empresa.component';
import { UsuariosCreateComponent } from './paginas/usuarios-create/usuarios-create.component';
import { UsuariosUpdateComponent } from './paginas/usuarios-update/usuarios-update.component';
import { UsuariosDeleteComponent } from './paginas/usuarios-delete/usuarios-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacotesClienteComponent,
    PacotesEmpresaComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SidenavAdminComponent,
    PacotesCreateComponent,
    PacotesUpdateComponent,
    PacotesDeleteComponent,
    UsuariosEmpresaComponent,
    UsuariosCreateComponent,
    UsuariosUpdateComponent,
    UsuariosDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
