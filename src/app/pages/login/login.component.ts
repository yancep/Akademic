import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  usuario!: string;
  password!: string;
  mensajeError!: string;

  constructor(private http: HttpClient){}

  onSubmit() {
    const data = {
      usuario: this.usuario,
      password: this.password
    };
    
    this.http.post('https://localhost:8080/usuarios/verificar', data).subscribe(response => {
      console.log(response);
      const usuario = response as any
    }, error => {
      console.log(error);
      if (error.status === 401) {
        this.mensajeError = 'Usuario o contraseña incorrectos';
        console.log('Error de autenticación');
      } else {
        this.mensajeError = 'Error al conectar con la base de datos';
        console.log('Error de conexión a la base de datos');
      }
      
    });
  }
}

