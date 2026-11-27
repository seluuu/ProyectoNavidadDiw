import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cm-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {}
