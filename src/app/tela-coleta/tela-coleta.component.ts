import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-coleta',
  templateUrl: './tela-coleta.component.html',
  styleUrls: ['./tela-coleta.component.scss']
})

export class TelaColetaComponent implements OnInit {

  cor: String = "#0A93BE"
  texto: String = "Formulário de Coleta"
  data: String = ""
  quantidade: Number = 0
  temperatura: String = ""
  phNaFazenda: String = ""
  densidade: String = ""
  bacterias: String = ""
  dados: String = ""

  ngOnInit(): void {
  }
}

