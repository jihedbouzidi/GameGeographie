import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private scores: { [key: string]: number } = {
    asia: 0,
    africa: 0,
    europe: 0,
    america: 0,
  };

  private disabledOptions: { [key: string]: { countries: Set<string>; numbers: Set<number> } } = {
    asia: { countries: new Set<string>(), numbers: new Set<number>() },
    africa: { countries: new Set<string>(), numbers: new Set<number>() },
    europe: { countries: new Set<string>(), numbers: new Set<number>() },
    america: { countries: new Set<string>(), numbers: new Set<number>() },
  };

  // Récupérer le score d'un continent
  getScore(continent: string): number {
    return this.scores[continent] || 0;
  }

  // Incrémenter le score d'un continent
  incrementScore(continent: string, points: number): void {
    if (this.scores[continent] !== undefined) {
      this.scores[continent] += points;
    }
  }

  // Ajouter une option désactivée (pays ou numéro) pour un continent
  addDisabledOption(continent: string, country: string, number: number): void {
    if (this.disabledOptions[continent]) {
      this.disabledOptions[continent].countries.add(country);
      this.disabledOptions[continent].numbers.add(number);
    }
  }

  // Récupérer les options désactivées d'un continent
  getDisabledOptions(continent: string) {
    return this.disabledOptions[continent] || { countries: new Set(), numbers: new Set() };
  }

  // Réinitialiser les options désactivées d'un continent
  resetDisabledOptions(continent: string): void {
    if (this.disabledOptions[continent]) {
      this.disabledOptions[continent].countries.clear();
      this.disabledOptions[continent].numbers.clear();
    }
  }
}
