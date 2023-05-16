import { Component, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public desloguear(): void {
    this.authService.logout();
  }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public onLinkClick(): void{
    if(!this.isLoggedIn){
      alert("Debe Iniciar Sesión para acceder a la informacion del personal")
    }else {
      this.router.navigate(['personal']);
    }
  }
}
