import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundo',
  templateUrl: './fundo.component.html',
  styleUrls: ['./fundo.component.scss']
})
export class FundoComponent implements OnInit {
  @Input() texto:String='titulo'
  @Input() cor:String='#0A93BE'
  constructor() { }

  ngOnInit(): void {
  }

}
