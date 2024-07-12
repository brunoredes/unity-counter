import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { signal } from '@angular/core';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.counter = signal(0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment by 1', () => {
    component.increment();

    expect(component.counter).toBe(1);
  });

  it('should decrement by 1', () => {
    component.increment();
    component.increment();
    component.increment();

    expect(component.counter).toBe(3);

    component.decrease();

    expect(component.counter).toBe(2);
  });

  it('should not decrement counter when counter is 0', () => {
    component.decrease();

    expect(component.counter).toBe(0);
    expect(component.counter).not.toBe(-1);
  });

  it('should show plural when counter number is higher than 1', () => {
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

  it("should show singular 'unidade' when counter number is 1", () => {
    const button = fixture.nativeElement.querySelector(
      'button[data-button="increase"]'
    ) as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    const response = fixture.nativeElement.querySelector('output');

    expect(response.textContent).toBe('1 unidade');
  });

  it('should decrease button be disabled when counter value is 0', () => {
    const button = fixture.nativeElement.querySelector(
      'button[data-button="decrease"]'
    ) as HTMLButtonElement;

    expect(button.disabled).toBeTruthy();
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
