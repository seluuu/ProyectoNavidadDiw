import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cm-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItineraryComponent {}
