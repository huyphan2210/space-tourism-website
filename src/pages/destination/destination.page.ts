import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import data from '../../data.json';
@Component({
  selector: 'destination-page',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss']
})
export class DestinationPage implements OnInit, AfterViewInit, OnDestroy {
  body = document.getElementsByTagName('body')[0];

  destinations = data.destinations;

  tabNames = this.destinations.map(destination => destination.name);

  planet = this.destinations[0];

  ngOnInit(): void {
    this.changeBackground();
    window.addEventListener('resize', () => {
      this.changeBackground();
    })

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

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => {});
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

  private changeBackground() {
    if (window.innerWidth / window.innerHeight < 1) {
      if (window.innerWidth >= 768) {
        this.body.style.backgroundImage = 'url(./assets/destination/background-destination-tablet.jpg)'
      } else {
        this.body.style.backgroundImage = 'url(./assets/destination/background-destination-mobile.jpg)'
      }
    } else {
      this.body.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)'
    }
  }
}
