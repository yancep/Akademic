import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { query } from '@angular/animations';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Usuario } from './usuario.model';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'] 
})
export class PersonalComponent implements OnInit {
  control = new FormControl();
  subcadena!: string
  mensajeError!: string;
  usuarios: Usuario [] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.Observador()
    
  }

  Observador(){
    this.control.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(query=>{
      console.log(query)
      this.getUsuario(query)
    })  
  }

  getUsuario(query: string){
    this.http.post('http://localhost:8080/usuarios/buscar', {subcadena: query, tipo: "nombre"}).subscribe(response =>{
      this.usuarios = response as any
    }, error => {
      if (error.status === 401) {
        this.mensajeError = 'Usuario o contraseña incorrectos';
      }
    })
  }
}
