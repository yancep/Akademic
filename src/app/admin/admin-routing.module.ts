import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ListaPersonalComponent } from './components/lista-personal/lista-personal.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

const routes: Routes = [
  
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'personal',
        component: ListaPersonalComponent,
      },
      {
        path: 'personal/crearUsuario',
        component: CrearUsuarioComponent,
      },
      
    ]
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
