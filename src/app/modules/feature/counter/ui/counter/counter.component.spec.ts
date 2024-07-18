import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { charactersByCost } from '../../../../data-access/characters/lib/mock/characters';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('cost', 1);
    fixture.componentRef.setInput('character', charactersByCost[1][0]);

    component.cost = 1;
    component.character = charactersByCost[1][0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show plural when counter number is higher than 1', () => {
    fixture.whenStable().then(() => {
      const button = fixture.nativeElement.querySelector(
        'button[data-button="increase"]'
      ) as HTMLButtonElement;

      button.click();
      fixture.detectChanges();
      button.click();
      fixture.detectChanges();

      const response = fixture.nativeElement.querySelector('output');

      expect(response.textContent).toBe('2 unidades');
    });
  });

  it("should show singular 'unidade' when counter number is 1", () => {
    fixture.whenStable().then(() => {
      const button = fixture.nativeElement.querySelector(
        'button[data-button="increase"]'
      ) as HTMLButtonElement;

      button.click();
      fixture.detectChanges();

      const response = fixture.nativeElement.querySelector('output');

      expect(response.textContent).toBe('1 unidade');
    });
  });

  it('should decrease button be disabled when counter value is 0', () => {
    fixture.whenStable().then(() => {
      const button = fixture.nativeElement.querySelector(
        'button[data-button="decrease"]'
      ) as HTMLButtonElement;

      expect(button.disabled).toBeTruthy();
    });
  });

  it('should button be enabled when counter value is higher than 0', () => {
    const decreaseButton = fixture.nativeElement.querySelector(
      'button[data-button="decrease"]'
    ) as HTMLButtonElement;

    const increaseButton = fixture.nativeElement.querySelector(
      'button[data-button="increase"]'
    ) as HTMLButtonElement;

    increaseButton.click();
    fixture.detectChanges();

    expect(decreaseButton.disabled).toBeFalsy();
  });
});
