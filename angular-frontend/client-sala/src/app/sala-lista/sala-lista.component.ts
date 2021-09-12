import { Component, OnInit } from '@angular/core';
import { SalaDetalhesComponent } from '../sala-detalhes/sala-detalhes.component';
import { Observable } from 'rxjs';
import { SalaService } from '../sala.service';
import { Sala } from '../sala';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-lista',
  templateUrl: './sala-lista.component.html',
  styleUrls: ['./sala-lista.component.css']
})

export class SalaListaComponent implements OnInit {

  salas!: Observable<Sala[]>;

  constructor(

    private salaService: SalaService,
    private rota: Router

  ) { }

  ngOnInit() {

    this.recarregaData();

  }

  recarregaData(){

    this.salas = this.salaService.getSalaLista();

  }

  apagaSala (id: number) {

    this.salaService.apagaSala(id)
    .subscribe((data: any) => {

        console.log(data)
        this.recarregaData();

      }, (error: any) => console.log(error)

    );

  }

  salaDetalhes(id: number){

    this.rota.navigate(['detalhes', id]);

  }

  atualizaSala(id: number){

    this.rota.navigate(['atualiza', id]);
    
  }

}
