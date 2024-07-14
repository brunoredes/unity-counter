import { Injectable, signal } from '@angular/core';
import { Character } from '../../models/unity';
import { charactersByCost } from '../mock/characters';

@Injectable({
  providedIn: 'root',
})
export class CostService {
  private charactersSignal = signal(charactersByCost);
  public characters = this.charactersSignal.asReadonly();

  getCharactersByCost(cost: number) {
    return this.characters()[cost] || [];
  }

  updateCharacter(cost: number, updatedCharacter: Character) {
    this.charactersSignal.update((charactersByCost) => {
      const characterIndex = charactersByCost[cost].findIndex(
        (character) => character.name === updatedCharacter.name
      );
      if (characterIndex !== -1) {
        charactersByCost[cost][characterIndex] = updatedCharacter;
      }
      return charactersByCost;
    });
  }

  getAllCosts() {
    return Object.keys(this.characters()).map((cost) => parseInt(cost, 10));
  }
}
