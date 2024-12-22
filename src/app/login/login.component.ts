import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  onLogin() {
    // Cette fonction sera utilisée pour la connexion
    console.log("Tentative de connexion avec:");
    console.log("Email:", this.email);
    console.log("Mot de passe:", this.password);

    // Ici, la logique Firebase sera ajoutée plus tard
    // Par exemple, authService.login(this.email, this.password) etc.
  }
}
