import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MAIN_NAV_ITEMS, NavItem } from '../nav/nav.model';

@Component({
  selector: 'cm-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly links: readonly NavItem[] = MAIN_NAV_ITEMS;
  protected readonly currentYear = 2026;
}
