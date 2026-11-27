import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSurface = 'light' | 'dark';
export type ButtonStatePreview = 'hover' | 'focus' | 'active';

/**
 * Botón base del sistema de diseño Classic Motor.
 * Renderiza `<a routerLink>` cuando recibe ruta y `<button>` en caso contrario,
 * manteniendo semántica HTML5 y estados accesibles.
 */
@Component({
  selector: 'cm-button',
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly type = input<ButtonType>('button');
  readonly surface = input<ButtonSurface>('light');
  readonly isDisabled = input(false);
  readonly isFullWidth = input(false);
  readonly routerLink = input<string | readonly unknown[] | null>(null);
  readonly ariaLabel = input<string | null>(null);
  readonly statePreview = input<ButtonStatePreview | null>(null);

  protected readonly buttonClasses = computed(() => {
    const classes: string[] = ['btn', `btn--${this.variant()}`, `btn--${this.size()}`];

    if (this.surface() === 'dark') {
      classes.push('btn--on-dark');
    }

    if (this.isFullWidth()) {
      classes.push('btn--full');
    }

    if (this.isDisabled()) {
      classes.push('btn--disabled');
    }

    const preview = this.statePreview();
    if (preview) {
      classes.push(`btn--is-${preview}`);
    }

    return classes.join(' ');
  });
}
