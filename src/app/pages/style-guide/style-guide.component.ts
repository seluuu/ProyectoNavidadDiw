import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cm-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrl: './style-guide.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StyleGuideComponent {}
