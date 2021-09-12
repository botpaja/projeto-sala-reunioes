import { Component, OnInit } from '@angular/core';
import { Sala } from '../sala';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from '../sala.service';

@Component({

  selector: 'app-atualiza-sala',
  templateUrl: './atualiza-sala.component.html',
  styleUrls: ['./atualiza-sala.component.css']
  
})

export class AtualizaSalaComponent implements OnInit {

  id!: number;
  sala!: Sala;
  submitted = false;

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

    }, (error: any)=> console.log(error));

  }

  atualizaSala() {

    this.salaService.atualizaSala(this.id, this.sala)
    .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    this.sala = new Sala();
    this.goToLista();

  }

  onSubmit(){

    this.atualizaSala();

  }

  goToLista(){

    this.router.navigate(['/salas']);

  }

}
