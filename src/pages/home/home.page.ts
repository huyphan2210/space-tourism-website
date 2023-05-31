import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  body = document.getElementsByTagName('body')[0];

  ngOnInit(): void {
    this.changeBackground();
    window.addEventListener('resize', () => {
      this.changeBackground();
    });

    const homeTab = document.getElementById('home');
    const destinationTab = document.getElementById('destination');
    const crewTab = document.getElementById('crew');
    const technologyTab = document.getElementById('technology');

    if (destinationTab && homeTab && crewTab && technologyTab) {
      homeTab.className = 'active';
      destinationTab.className = '';
      technologyTab.className = '';
      crewTab.className = '';
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => {});
  }

  private changeBackground() {
    if (window.innerWidth / window.innerHeight < 1) {
      if (window.innerWidth >= 768) {
        this.body.style.backgroundImage = 'url(./assets/home/background-home-tablet.jpg)'
      } else {
        this.body.style.backgroundImage = 'url(./assets/home/background-home-mobile.jpg)'
      }
    } else {
      this.body.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
    }
  }
}
