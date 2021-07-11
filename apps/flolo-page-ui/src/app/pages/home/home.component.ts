import { Component, OnInit } from '@angular/core';
import { AuthService } from '@dbl-dev/users';

@Component({
  selector: 'flpu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  onLogout() {
    this.authService.logout();
  }
}
