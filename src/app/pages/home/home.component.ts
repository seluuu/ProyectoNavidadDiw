import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'cm-home',
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
