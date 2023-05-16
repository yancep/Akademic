import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  user!: string;
  password!: string;
  isLoggedIn: boolean = true;
  mensajeError!: string;

  constructor(private http: HttpClient, private authService: AuthService){}

  onSubmit() {
    const data = {
      user: this.user,
      password: this.password
    };
    
    this.http.post('https://localhost:8080/usuarios/verificar', data).subscribe(
      response => {
      this.isLoggedIn = true;
      const usuario = response as any
    }, error => {
      console.log(error);
      if (error.status === 401) {
        this.mensajeError = 'Usuario o contraseña incorrectos';
      } else {
        this.mensajeError = 'Error al conectar con la base de datos';
      }
      
    });
  }
}

