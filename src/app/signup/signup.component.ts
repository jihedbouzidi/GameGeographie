import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor() {}

  // Fonction de soumission du formulaire
  onSubmit(form: NgForm) {
    if (form.valid) {
      const { firstName, lastName, email, password, confirmPassword } = form.value;

      // Vérification que les mots de passe correspondent
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }

      // Affichage des données (pour illustration, ici vous connecteriez à Firebase pour créer l'utilisateur)
      console.log('Form submitted!', firstName, lastName, email, password);
      
    } else {
      console.log('Formulaire invalide');
    }
  }
}
