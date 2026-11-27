import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ButtonComponent } from './button.component';

@Component({
  imports: [ButtonComponent],
  template: `
    <cm-button variant="secondary" size="lg" [isDisabled]="true">Enviar</cm-button>
    <cm-button variant="ghost" routerLink="/catalogo">Explorar catálogo</cm-button>
  `,
})
class ButtonHostTestComponent {}

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonHostTestComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render native button with variant, size and disabled state', async () => {
    const fixture = TestBed.createComponent(ButtonHostTestComponent);
    await fixture.whenStable();
    const button = (fixture.nativeElement as HTMLElement).querySelector('button');

    expect(button).toBeTruthy();
    expect(button?.classList.contains('btn--secondary')).toBe(true);
    expect(button?.classList.contains('btn--lg')).toBe(true);
    expect(button?.disabled).toBe(true);
  });

  it('should render anchor with routerLink when link input is set', async () => {
    const fixture = TestBed.createComponent(ButtonHostTestComponent);
    await fixture.whenStable();
    const anchor = (fixture.nativeElement as HTMLElement).querySelector('a');

    expect(anchor).toBeTruthy();
    expect(anchor?.classList.contains('btn--ghost')).toBe(true);
    expect(anchor?.getAttribute('href')).toBe('/catalogo');
  });
});
