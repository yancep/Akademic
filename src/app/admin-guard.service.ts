import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from './pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn && this.authService.usuario.admin) {
      return true;
    } else {
      // Si la variable es falsa, redirige al usuario a otra página (en este caso, a la página de inicio)
      this.router.navigate(['home']);
      return false;
    }
  }
  
}
