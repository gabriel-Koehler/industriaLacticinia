import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundoComponent } from './fundo/fundo.component';
import { TelaColetaComponent } from './tela-coleta/tela-coleta.component';
import { TelaTransitoComponent } from './tela-transito/tela-transito.component';
import { TelaRecepcaoComponent } from './tela-recepcao/tela-recepcao.component';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FundoComponent,
    TelaColetaComponent,
    TelaTransitoComponent,
    TelaRecepcaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
