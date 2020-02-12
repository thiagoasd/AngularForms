import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterModule, Routes, Router } from '@angular/router'
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  { path: 'form', component: FormularioComponent }

]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
