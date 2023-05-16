import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario: any 
  public isLoggedIn = false;

  public login(): void {
    this.isLoggedIn = true;
  }

  public logout(): void {
    this.isLoggedIn = false;
  }
}
