import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ContactDetails';

  constructor(private router: Router, public authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
