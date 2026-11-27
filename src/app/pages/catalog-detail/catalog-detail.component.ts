import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cm-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrl: './catalog-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogDetailComponent {}
