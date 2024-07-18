import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CostService } from '../../../../data-access/characters/lib/cost/cost.service';
import { Character } from '../../../../data-access/characters/models/unity';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  private readonly costService: CostService = inject(CostService);

  @Input({ required: true, alias: 'cost' }) public cost = 1;
  @Input({ required: true, alias: 'character' }) public character!: Character;

  public increment() {
    this.character.timesBought++;
    this.costService.updateCharacter(this.cost, this.character);
  }
  public decrease() {
    if (this.character.timesBought > 0) {
      this.character.timesBought -= 1;
      this.costService.updateCharacter(this.cost, this.character);
    }
  }
}
