import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service'; // Assurez-vous d'avoir importé votre service de score

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {
  scoreTotal = 60; // Valeur totale est de 120
  scorePartiel = 0; // Score partiel qui sera mis à jour
  percentage = 0; // Pourcentage à afficher

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.calculateTotalScore();
  }

  // Méthode pour calculer la somme des scores des continents
  calculateTotalScore() {
    const africaScore = this.scoreService.getScore('africa');
    const asiaScore = this.scoreService.getScore('asia');
    const americaScore = this.scoreService.getScore('america');
    const europeScore = this.scoreService.getScore('europe');
    
    // Calculer le score partiel total
    this.scorePartiel = africaScore + asiaScore + americaScore + europeScore;

    // Calculer le pourcentage
    this.percentage = (this.scorePartiel / this.scoreTotal) * 100;

    // Assurez-vous que le pourcentage ne dépasse pas 100
    if (this.percentage > 100) {
      this.percentage = 100;
    }

    // Mettre à jour la barre de progression
    this.updateProgressBar();
  }

  // Méthode pour mettre à jour la barre de progression
  updateProgressBar() {
    const progressBar = document.getElementById("progressFill") as HTMLElement;
    const percentageText = document.getElementById("percentageText") as HTMLElement;

    if (progressBar && percentageText) {
      progressBar.style.width = this.percentage + "%";
      percentageText.textContent = this.percentage.toFixed(2) + "%";
    }
  }
}
