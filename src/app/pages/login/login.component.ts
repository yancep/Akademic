import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  user!: string;
  password!: string;
  mensajeError!: string;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router){}

  onSubmit() {
    const data = {
      usuario: this.user,
      contraseña: this.password
    };
    
    this.http.post('https://localhost:8080/usuarios/verificar', data).subscribe(
      response => {
      this.authService.login()
      this.authService.usuario = response as any
      if(this.authService.usuario.admin){
        this.router.navigate(['admin'])
      }
    }, error => {
      if (error.status === 401) {
        this.mensajeError = 'Usuario o contraseña incorrectos';
      } else {
        this.mensajeError = 'Error al conectar con la base de datos';
      }
      
    });
  }
}

