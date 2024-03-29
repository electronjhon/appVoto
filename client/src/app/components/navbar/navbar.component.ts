import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public app_name = "Books Store"
  public isLogged: boolean = false;
  ngOnInit(): void {
    this.onCheckUser();
  }
  
  onLogout(): void {
    this.authService.logoutUser();
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true
    }
  }
  
}