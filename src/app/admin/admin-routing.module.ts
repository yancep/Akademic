import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorFormComponent } from './components/profesor-form/profesor-form.component';
import { NavComponent } from './components/nav/nav.component';
import { EstudianteFormComponent } from './components/estudiante-form/estudiante-form.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { ListaProfesoresComponent } from './components/lista-profesores/lista-profesores.component';

const routes: Routes = [
  
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'crearProfesor',
        component: ProfesorFormComponent,
      },
      {
        path: 'crearEstudiante',
        component: EstudianteFormComponent,
      },
      {
        path: 'listaEstudiantes',
        component: ListaEstudiantesComponent,
      },
      {
        path: 'listaProfesores',
        component: ListaProfesoresComponent,
      },
    ]
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
