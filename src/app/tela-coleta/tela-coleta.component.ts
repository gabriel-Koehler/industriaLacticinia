import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-coleta',
  templateUrl: './tela-coleta.component.html',
  styleUrls: ['./tela-coleta.component.scss']
})
export class TelaColetaComponent implements OnInit {
  texto :String ='oi'
  cor:String = '#0A93BE'
  constructor() { }

  ngOnInit(): void {
  }

}
