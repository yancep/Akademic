import { Component, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  public desloguear(): void {
    this.authService.logout();
  }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}
