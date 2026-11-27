import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'cm-catalog',
  imports: [ButtonComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {}
