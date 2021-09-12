import { Component, OnInit, Input } from '@angular/core';
import { Sala } from '../sala';
import { SalaService } from '../sala.service';
import { SalaListaComponent } from '../sala-lista/sala-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({

  selector: 'app-sala-detalhes',
  templateUrl: './sala-detalhes.component.html',
  styleUrls: ['./sala-detalhes.component.css']

})

export class SalaDetalhesComponent implements OnInit {

  id!: number;
  sala!: Sala;

  constructor(

    private rota: ActivatedRoute, 
    private router: Router,
    private salaService: SalaService

  ) { }

  ngOnInit() {

    this.sala = new Sala();
    this.id = this.rota.snapshot.params['id'];
    this.salaService.getSala(this.id)
    .subscribe((data: any) => {

      console.log(data);
      this.sala = data;

    }, (error: any) => console.log(error));

  }

  lista(){

    this.router.navigate(['salas']);
  
  }

}
