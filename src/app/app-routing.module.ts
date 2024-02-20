import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaColetaComponent } from './tela-coleta/tela-coleta.component';
import { TelaRecepcaoComponent } from './tela-recepcao/tela-recepcao.component';
import { TelaTransitoComponent } from './tela-transito/tela-transito.component';

const routes: Routes = [

  {
    path:'tela-coleta',
    component: TelaColetaComponent
  },
  {
    path:'tela-transito',
    component: TelaTransitoComponent
  },
  {
    path:'tela-recepcao',
    component:TelaRecepcaoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
