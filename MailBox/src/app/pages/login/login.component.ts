import { Component } from '@angular/core';
import { LoginSignupHeaderComponent } from '../../shared/components/login-signup-header/login-signup-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginSignupHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
