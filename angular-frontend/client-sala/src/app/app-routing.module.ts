import { SalaDetalhesComponent } from "./sala-detalhes/sala-detalhes.component";
import { CriarSalaComponent } from "./criar-sala/criar-sala.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SalaListaComponent } from "./sala-lista/sala-lista.component";
import { AtualizaSalaComponent } from "./atualiza-sala/atualiza-sala.component";

const rotas: Routes = [

    {path: '', redirectTo: 'sala', pathMatch: 'full'},
    {path: 'sala', component: SalaListaComponent},
    {path: 'adicionar', component: CriarSalaComponent},
    {path: 'atualiza/:id', component: AtualizaSalaComponent},
    {path: 'detalhes/:id', component: SalaDetalhesComponent}

];

@NgModule({

    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]

})

export class AppRoutingModule { }