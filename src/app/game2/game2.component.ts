import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component {
  score = 0;
  fois = 0;
  correctAnswers = [
    'India', 'Spain', 'Tunisia', 'France', 'China', 'Egypt', 'Japan', 'Algeria', 'Turkey', 'Mexico', 'Russia', 'Italy', 'England', 'USA', 'China'
  ];

  questionsList = [
    { title: 'Taj Mahal', image: 'q1.jpg', options: ['India', 'Pakistan', 'Jordan', 'Morocco'] },
    { title: 'L’Alhambra', image: 'q2.jpg', options: ['Germany', 'France', 'Spain', 'Italy'] },
    { title: 'Dougga', image: 'q3.jpg', options: ['Algeria', 'Tunisia', 'Morocco', 'Libya'] },
    { title: 'La cathédrale Notre-Dame', image: 'q4.webp', options: ['Italy', 'France', 'Spain', 'Norway'] },
    { title: 'Palais royal de Potala', image: 'q5.jpg', options: ['China', 'Japan', 'Korea', 'Brazil'] },
    { title: 'Luxor Temple', image: 'q6.webp', options: ['Algeria', 'Saudi Arabia', 'Sudan', 'Egypt'] },
    { title: 'Senso-ji', image: 'q7.jpg', options: ['North Korea', 'South Korea', 'Japan', 'China'] },
    { title: 'Mémorial du Martyr', image: 'q8.jpg', options: ['Morocco', 'Algeria', 'Tunisia', 'Libya'] },
    { title: 'La mosquée de Rustem Pacha', image: 'q9.jpg', options: ['Turkey', 'Tunisia', 'Morocco', 'Pakistan'] },
    { title: 'Le Palacio de Bellas Artes', image: 'q10.jpg', options: ['Mexico', 'Portugal', 'Spain', 'Italy'] },
    { title: 'La Place Rouge', image: 'q11.webp', options: ['Germany', 'India', 'Canada', 'Russia'] },
    { title: 'Cathédrale Santa Maria Del Fiore', image: 'q12.jpg', options: ['Italy', 'Spain', 'Portugal', 'Argentina'] },
    { title: 'Stonehenge', image: 'q13.jpg', options: ['Portugal', 'Spain', 'England', 'Argentina'] },
    { title: 'Golden Gate Bridge', image: 'q14.jpg', options: ['Canada', 'USA', 'Germany', 'Brazil'] },
    { title: 'La Grande Muraille de Chine', image: 'q15.jpg', options: ['China', 'Japan', 'India', 'Pakistan'] }
  ];

  selectAnswer(questionIndex: number, selectedAnswer: string, navLinkId: string): void {
    this.fois++;
    const correctAnswer = this.correctAnswers[questionIndex];
    const navLink = document.getElementById(navLinkId);
    const buttons = document.querySelectorAll(`#q${questionIndex + 1} button`);

    buttons.forEach((button: any) => (button.disabled = true));

    if (selectedAnswer === correctAnswer) {
      this.score++;
      this.highlightButton(buttons, selectedAnswer, correctAnswer, true);
      this.highlightNavLink(navLink, true);
    } else {
      this.highlightButton(buttons, selectedAnswer, correctAnswer, false);
      this.highlightNavLink(navLink, false);
    }
    if (this.fois === 15) {
      this.showFinalScore();
    }
  }

  highlightButton(buttons: NodeListOf<Element>, selectedAnswer: string, correctAnswer: string, isCorrect: boolean): void {
    buttons.forEach((button) => {
      const htmlButton = button as HTMLButtonElement;
      if (htmlButton.textContent?.trim() === correctAnswer) {
        htmlButton.style.backgroundColor = 'green';
      } else if (htmlButton.textContent?.trim() === selectedAnswer && !isCorrect) {
        htmlButton.style.backgroundColor = 'red';
      }
    });
  }

  highlightNavLink(navLink: HTMLElement | null, isCorrect: boolean): void {
    if (navLink) {
      navLink.style.backgroundColor = isCorrect ? 'green' : 'red';
    }
  }

  scrollTo(questionId: string): void {
    const element = document.getElementById(questionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  showFinalScore(): void {
    const emoji = this.score <= 6 ? '😒' : '😎';
    const title = this.score <= 6 ? 'Dommage!' : 'Bravo!';
    const message = `Votre score est ${this.score} ${emoji}`;

    Swal.fire({
      title: title,
      text: message,
      icon: this.score <= 6 ? 'error' : 'success',
      confirmButtonText: 'OK',
      background: '#f4f4f4',
      color: '#333',
      confirmButtonColor: '#007bff',
    });
  }
}
