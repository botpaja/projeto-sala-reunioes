import { Component, OnInit } from '@angular/core';
import { SalaService } from '../sala.service';
import { Sala } from '../sala';
import { Router } from '@angular/router';

@Component({

  selector: 'app-criar-sala',
  templateUrl: './criar-sala.component.html',
  styleUrls: ['./criar-sala.component.css']

})

export class CriarSalaComponent implements OnInit {

  sala: Sala = new Sala();
  submitted = false;

  constructor(

    private salaService: SalaService,
    private rota: Router
  
    ) { }

  ngOnInit() {
  }

  novaSala(): void{

    this.submitted = false;
    this.sala = new Sala();

  }

  salva(){

    this.salaService.criarSala(this.sala)
    .subscribe((data: any) => console.log(data),
    (error: any) => console.log(error));
    this.goToLista();

  }

  onSubmit(){

    this.submitted = true;
    this.salva();

  }

  goToLista(){

    this.rota.navigate(['/salas'])

  }

}
