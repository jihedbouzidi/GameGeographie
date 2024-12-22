import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor() {}

  // Fonction de soumission du formulaire
  onSubmit(form: NgForm) {
    if (form.valid) {
      const { fullName, email, subject, message } = form.value;

      // Afficher les données en console (remplacer cette ligne par l'intégration avec un backend si nécessaire)
      console.log('Message envoyé:', fullName, email, subject, message);
      alert('Votre message a été envoyé avec succès.');

      // Réinitialiser le formulaire après envoi
      form.reset();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
