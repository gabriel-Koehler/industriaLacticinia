import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-tela-recepcao',
  templateUrl: './tela-recepcao.component.html',
  styleUrls: ['./tela-recepcao.component.scss']
})
export class TelaRecepcaoComponent implements OnInit {

  cor: String = '#1F7800';
  texto: String = 'Formulário de Recepção'
  dataEHoraDaDescarga: String = ''
  bacteriasPorMl: String = ''
  phDoLeite: String = ''
  densidadeDoLeite: String = ''
  lactose: String = ''
  temperatura: any = null
  json:any={
    dataEHoraDaDescarga:'',
    temperatura:'',
    bacteriasPorMl:'',
    phDoLeite:'',
    densidadeDoLeite:'',
    lactose:''
  }
  constructor() { }


  ngOnInit(): void {

  }

  enviar(): void {
    console.log('oi')
    this.json={
      dataEHoraDaDescarga:this.dataEHoraDaDescarga,
      temperatura:this.temperatura,
      bacteriasPorMl:this.bacteriasPorMl,
      phDoLeite:this.phDoLeite,
      densidadeDoLeite:this.densidadeDoLeite,
      lactose:this.lactose
    }
    console.log(this.json)
  }

}
