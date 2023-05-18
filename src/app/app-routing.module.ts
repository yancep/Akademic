import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResidenciaComponent } from './pages/residencia/residencia.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { adminGuard } from './admin-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'residencia',
    component: ResidenciaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'admin',
    //canActivate: [adminGuard],
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
