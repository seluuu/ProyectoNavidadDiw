import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'cm-style-guide',
  imports: [ButtonComponent],
  templateUrl: './style-guide.component.html',
  styleUrl: './style-guide.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StyleGuideComponent {}
