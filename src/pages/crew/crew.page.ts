import { Component, AfterViewInit, OnInit, OnDestroy } from "@angular/core";
import data from '../../data.json';

@Component({
  selector: 'crew-page',
  templateUrl: './crew.page.html',
  styleUrls: ['./crew.page.scss']
})
export class CrewPage implements AfterViewInit, OnInit, OnDestroy {
  body = document.getElementsByTagName('body')[0];

  crew = data.crew;

  currentCrew = this.crew[0];

  ngOnInit(): void {
    this.changeBackground();
    window.addEventListener('resize', () => {
      this.changeBackground();
    });

    const homeTab = document.getElementById('home');
    const crewTab = document.getElementById('crew');
    if (crewTab && homeTab) {
      crewTab.className = 'active';
      homeTab.className = '';
    }
  }

  ngAfterViewInit(): void {
    document.getElementsByClassName('page')[0].setAttribute('class', 'page active');
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => {});
  }

  protected changePage(e: MouseEvent, i: number) {
    const pages =  document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
      pages[i].setAttribute('class', 'page')
    }
    const currentPage = e.currentTarget as HTMLDivElement;

    currentPage.setAttribute('class', 'page active');
    this.currentCrew = this.crew[i];
  }

  private changeBackground() {
    if (window.innerWidth / window.innerHeight < 1) {
      if (window.innerWidth >= 768) {
        this.body.style.backgroundImage = 'url(./assets/crew/background-crew-tablet.jpg)'
      } else {
        this.body.style.backgroundImage = 'url(./assets/crew/background-crew-mobile.jpg)'
      }
    } else {
      this.body.style.backgroundImage = 'url(./assets/crew/background-crew-desktop.jpg)'
    }
  }
}
