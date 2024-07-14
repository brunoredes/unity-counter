import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CostService } from '../../../data-access/characters/lib/cost/cost.service';
import { Character } from '../../../data-access/characters/models/unity';
import { CardComponent } from '../ui/card/card.component';
import { CounterComponent } from '../ui/counter/counter.component';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgClass, CardComponent, CounterComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  private readonly costService: CostService = inject(CostService);
  public counter: number = 0;
  public characters: { [key: number]: Character[] } = {};
  public costs: number[] = this.costService.getAllCosts();

  constructor() {
    this.costs.forEach((cost) => {
      this.characters[cost] = this.costService.getCharactersByCost(cost);
    });
  }

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {}
}
