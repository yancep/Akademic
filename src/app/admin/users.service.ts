import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../pages/personal/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
    constructor(private http: HttpClient){}

    getAllUsers(){
        return this.http.get<Usuario[]>('http://localhost:8080/usuarios/buscarTodos');
    }

}