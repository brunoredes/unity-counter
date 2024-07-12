import { Injectable } from '@angular/core';
import { charactersByCost } from '../mock/characters';

@Injectable({
  providedIn: 'root',
})
export class CostService {
  getCharactersByCost(cost: number) {
    return charactersByCost[cost] || [];
  }
  getAllCosts() {
    return Object.keys(charactersByCost).map((cost) => parseInt(cost, 10));
  }
}
