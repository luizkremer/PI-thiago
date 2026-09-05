import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastro } from '../src/app/livros/cadastro/cadastro';

const routes: Routes = [
  {path: 'cadastro', component: Cadastro}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
