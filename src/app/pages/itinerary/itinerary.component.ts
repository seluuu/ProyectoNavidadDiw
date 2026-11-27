import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'cm-itinerary',
  imports: [ButtonComponent],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItineraryComponent {}
