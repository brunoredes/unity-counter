import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  input,
  signal,
} from '@angular/core';
import { Character } from '../../../../data-access/characters/models/unity';
import { CostService } from '../../../../data-access/characters/lib/cost/cost.service';

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

  @Input({ required: true }) public cost = 1;
  @Input({ required: true }) public character!: Character;

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
