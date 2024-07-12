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
});
