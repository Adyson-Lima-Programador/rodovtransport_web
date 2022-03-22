import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import {MatTableModule} from '@angular/material/table';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule} from '@angular/forms';


import { LoginComponent } from './paginas/login/login.component';
import { PacotesClienteComponent } from './paginas/pacotes-cliente/pacotes-cliente.component';
import { PacotesEmpresaComponent } from './paginas/pacotes-empresa/pacotes-empresa.component';
import { HeaderComponent } from './paginas/componentes/header/header.component';
import { FooterComponent } from './paginas/componentes/footer/footer.component';
import { SidenavComponent } from './paginas/componentes/sidenav/sidenav.component';
import { SidenavAdminComponent } from './paginas/componentes/sidenav-admin/sidenav-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacotesClienteComponent,
    PacotesEmpresaComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SidenavAdminComponent
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
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
