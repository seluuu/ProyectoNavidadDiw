import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MAIN_NAV_ITEMS, NavItem } from './nav.model';

@Component({
  selector: 'cm-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'onCloseMenu()',
  },
})
export class NavComponent {
  protected readonly navItems: readonly NavItem[] = MAIN_NAV_ITEMS;
  protected readonly isMenuOpen = signal(false);

  protected onToggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected onCloseMenu(): void {
    if (this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }
}
