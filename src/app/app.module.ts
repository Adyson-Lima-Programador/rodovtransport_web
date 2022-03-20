import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';  

import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule} from '@angular/forms';


import { LoginComponent } from './paginas/login/login.component';
import { PacotesClienteComponent } from './paginas/pacotes-cliente/pacotes-cliente.component';
import { PacotesEmpresaComponent } from './paginas/pacotes-empresa/pacotes-empresa.component';
import { HeaderComponent } from './paginas/componentes/header/header.component';
import { FooterComponent } from './paginas/componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacotesClienteComponent,
    PacotesEmpresaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
