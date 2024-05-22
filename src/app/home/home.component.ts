import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  onLogin(): void {
    // this.router.navigate(['/admin', 'dashboard']);
    this.router.navigateByUrl('/admin/dashboard');
  }
}
