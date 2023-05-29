import { Component, Input } from "@angular/core";

@Component({
  selector: 'destination-content',
  templateUrl: './destination-content.component.html',
  styleUrls: ['./destination-content.component.scss']
})
export class DestinationContent {
  @Input('planetName') planetName?: string;

  @Input('planetDescription') planetDescription?: string;

  @Input('planetDistance') planetDistance?: string;

  @Input('planetTravelTime') planetTravelTime?: string;
}
