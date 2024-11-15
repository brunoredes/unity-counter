import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../../data-access/characters/models/unity';
import { TraitsSeparatorPipe } from '../../pipes/traits-separator.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage, TraitsSeparatorPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  public character = input.required<Character>({ alias: 'character' });
}
