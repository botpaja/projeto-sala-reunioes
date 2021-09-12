import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CriarSalaComponent } from './criar-sala/criar-sala.component';
import { SalaDetalhesComponent } from './sala-detalhes/sala-detalhes.component';
import { SalaListaComponent } from './sala-lista/sala-lista.component';
import { AtualizaSalaComponent } from './atualiza-sala/atualiza-sala.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarSalaComponent,
    SalaDetalhesComponent,
    SalaListaComponent,
    AtualizaSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
