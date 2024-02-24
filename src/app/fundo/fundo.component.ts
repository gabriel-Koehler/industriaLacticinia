import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundo',
  templateUrl: './fundo.component.html',
  styleUrls: ['./fundo.component.scss']
})
export class FundoComponent implements OnInit {
  @Input() texto:String=''
  @Input() cor:String=''
  constructor() { }

  ngOnInit(): void {
  }

}
