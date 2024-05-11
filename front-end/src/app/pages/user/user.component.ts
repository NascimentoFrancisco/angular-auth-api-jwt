import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  providers: [
    LoginService
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(private router: Router, private loginService: LoginService,){}

  logout(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
