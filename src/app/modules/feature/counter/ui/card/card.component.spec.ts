import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { charactersByCost } from '../../../../data-access/characters/lib/mock/characters';
import { input, signal } from '@angular/core';
import { signalSetFn } from '@angular/core/primitives/signals';
import { TraitsSeparatorPipe } from '../../pipes/traits-separator.pipe';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('character', charactersByCost[1][0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show champion image', () => {
    fixture.whenStable().then(() => {
      const el = fixture.debugElement.nativeElement;
      const image = el.querySelector('img') as HTMLImageElement;

      const champ = charactersByCost[1][0];

      expect(image).toBeTruthy();
      expect(image.src).toBe(champ.photo);
      expect(image.alt).toBe(champ.name);
    });
  });

  it('should load image as lazy', () => {
    fixture.whenStable().then(() => {
      const el = fixture.debugElement.nativeElement;
      const image = el.querySelector('img') as HTMLImageElement;

      expect(image.loading).toBe('lazy');
    });
  });

  it('should show champion name', () => {
    fixture.whenStable().then(() => {
      const el = fixture.debugElement.nativeElement;
      const h3 = el.querySelector('h3') as HTMLHeadingElement;
      const champ = charactersByCost[1][0];

      expect(h3.outerText).toBe(champ.name);
    });
  });

  it('should show traits separated by pipe symbol', () => {
    fixture.whenStable().then(() => {
      const el = fixture.debugElement.nativeElement;
      const paragraph = el.querySelector('p') as HTMLParagraphElement;
      const champ = charactersByCost[1][0];

      expect(paragraph.outerText).toBe(
        new TraitsSeparatorPipe().transform(champ.traits)
      );
    });
  });
});
