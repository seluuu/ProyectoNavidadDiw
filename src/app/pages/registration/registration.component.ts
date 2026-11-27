import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cm-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {}
