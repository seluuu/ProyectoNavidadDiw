import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'cm-registration',
  imports: [ButtonComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {}
