import { Component, OnInit, AfterViewInit } from "@angular/core";
import data from '../../data.json';
@Component({
  selector: 'destination-page',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss']
})
export class DestinationPage implements OnInit, AfterViewInit {
  destinations = data.destinations;

  tabNames = this.destinations.map(destination => destination.name);

  planet = this.destinations[0];

  ngOnInit(): void {
    const homeTab = document.getElementById('home');
    const destinationTab = document.getElementById('destination');
    if (destinationTab && homeTab) {
      destinationTab.className = 'active';
      homeTab.className = '';
    }
  }

  ngAfterViewInit(): void {
    const tabs = document.getElementsByTagName('button');
    for (let i = 1; i < tabs.length; i++) {
      tabs[i].setAttribute('class', '');
    }

    tabs[0].setAttribute('class', 'active');
  }

  public setActive(e: MouseEvent, i: number):void {
    const currentTab = e.currentTarget as HTMLButtonElement;
    const tabs = document.getElementsByTagName('button');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].setAttribute('class', '');
    }

    currentTab.setAttribute('class', 'active');

    this.planet = this.destinations[i];
  }
}
