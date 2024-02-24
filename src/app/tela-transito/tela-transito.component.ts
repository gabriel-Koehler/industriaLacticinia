import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tela-transito',
  templateUrl: './tela-transito.component.html',
  styleUrls: ['./tela-transito.component.scss']
})
export class TelaTransitoComponent implements OnInit {

  cor:String='#F8DA40';
  texto:String='Formulário Em Trânsito'
  localizacao:String=''
  temperatura:any=null
  constructor() { }
  json:any={
    temperatura: '',
    localizacao:''
  }


  ngOnInit(): void {
  }

  enviar():void {
    console.log('oi')
    this.json={
    temperatura: this.temperatura,
    localizacao: this.localizacao
    }
    console.log(this.json)

  }

}
