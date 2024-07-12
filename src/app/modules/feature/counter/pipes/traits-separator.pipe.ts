import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../../../data-access/characters/models/unity';

@Pipe({
  name: 'traitsSeparator',
  standalone: true,
})
export class TraitsSeparatorPipe implements PipeTransform {
  transform(traits: Character['traits']): unknown {
    return traits.join(' | ');
  }
}
