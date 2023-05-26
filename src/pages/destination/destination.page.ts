import { Component, OnInit } from "@angular/core";
import data from '../../data.json';
@Component({
  selector: 'destination-page',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss']
})
export class DestinationPage implements OnInit {

  destinations = data.destinations;

  ngOnInit(): void {
    const homeTab = document.getElementById('home');
    const destinationTab = document.getElementById('destination');
    if (destinationTab && homeTab) {
      destinationTab.className = 'active';
      homeTab.className = '';
    }
  }
}
