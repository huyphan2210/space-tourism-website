import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: 'technology-page',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss']
})
export class TechnologyPage implements OnInit, OnDestroy {
  body = document.getElementsByTagName('body')[0];

  ngOnInit(): void {
    this.changeBackground();

    window.addEventListener('resize', () => {
      this.changeBackground();
    });

    const homeTab = document.getElementById('home');
    const technologyTab = document.getElementById('technology');
    if (technologyTab && homeTab) {
      technologyTab.className = 'active';
      homeTab.className = '';
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => {});
  }

  private changeBackground() {
    if (window.innerWidth / window.innerHeight < 1) {
      if (window.innerWidth >= 768) {
        this.body.style.backgroundImage = 'url(./assets/technology/background-technology-tablet.jpg)'
      } else {
        this.body.style.backgroundImage = 'url(./assets/technology/background-technology-mobile.jpg)'
      }
    } else {
      this.body.style.backgroundImage = 'url(./assets/technology/background-technology-desktop.jpg)'
    }
  }
}
