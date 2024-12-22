import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component {
  countries = [
    "Afghanistan", "Albania", "Argentina", "Chad", "Germany", "Greece", 
    "India", "Iraq", "Lebanon", "Palestine", "Poland", "Senegal", 
    "South Korea", "Spain", "Tunisia"
  ];
  fois = 0;
  score = 0;

  feedbacks: string[] = Array(this.countries.length).fill('');
  styles: string[] = Array(this.countries.length).fill('');
  choixStyles: string[] = Array(this.countries.length).fill('');
  checkAnswer(index: number, inputId: string, choixId: string): void {
    this.fois++;
    const inputElement = (document.getElementById(inputId) as HTMLInputElement);
    const userAnswer = inputElement.value.trim().toLowerCase();

    if (userAnswer === '') {
      Swal.fire({
        title: 'Erreur',
        text: 'Veuillez entrer une réponse avant de continuer.',
        icon: 'warning',
        confirmButtonText: 'OK',
        background: '#fff3cd',
        color: '#856404',
        confirmButtonColor: '#ffc107',
      });
      return;
    }

    const correctAnswer = this.countries[index].toLowerCase();
    const choixParagraph = document.getElementById(choixId) as HTMLElement;

    if (userAnswer === correctAnswer) {
      this.feedbacks[index] = 'Correct!';
      this.score++;
      inputElement.disabled = true;
    } else {
      this.feedbacks[index] = 'Wrong !';
    }

    if (this.fois === 15) {
      if (this.score >= 7) {
        Swal.fire({
          title: 'Bravo!',
          text: `Vous avez bien joué! Votre score est ${this.score} sur 15.`,
          icon: 'success',
          confirmButtonText: 'Merci!',
          background: '#d4edda',
          color: '#155724',
          confirmButtonColor: '#28a745',
        });
      } else {
        Swal.fire({
          title: 'Dommage !',
          text: `Votre score est ${this.score} sur 15. Essayez encore!`,
          icon: 'error',
          confirmButtonText: 'OK',
          background: '#f8d7da',
          color: '#721c24', 
          confirmButtonColor: '#dc3545', 
        });
      }
    }
  }
  copyCountryName(index: number): void {
    const countryName = this.countries[index];
    const inputElement = document.createElement('input');
    inputElement.value = countryName;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);

    
  }
}
