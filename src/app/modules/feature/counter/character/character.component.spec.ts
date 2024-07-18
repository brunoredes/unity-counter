import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';

describe('CounterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.counter = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have images', () => {
    const el = fixture.debugElement.nativeElement;
    const cards = el.querySelectorAll('img');

    expect(cards).toBeTruthy();
  });

  it('should have counter', () => {
    const el = fixture.debugElement.nativeElement;
    const counter = el.querySelectorAll('app-counter');

    expect(counter).toBeTruthy();
  });

  it('should have title', () => {
    const el = fixture.debugElement.nativeElement;
    const h1 = el.querySelectorAll('h1') as HTMLHeadingElement;

    expect(h1).toBeTruthy();
  })
});
