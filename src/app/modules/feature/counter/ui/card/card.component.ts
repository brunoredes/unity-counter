import { NgOptimizedImage } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../../data-access/characters/models/unity';
import { TraitsSeparatorPipe } from '../../pipes/traits-separator.pipe';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage, TraitsSeparatorPipe, CounterComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public character = input.required<Character>();
}
