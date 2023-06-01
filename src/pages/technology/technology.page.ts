import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import data from '../../data.json';

@Component({
  selector: 'technology-page',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss']
})
export class TechnologyPage implements OnInit, OnDestroy, AfterViewInit {
  body = document.getElementsByTagName('body')[0];

  technologies = data.technology;

  currentTechnology = this.technologies[0];

  isDesktop = window.innerWidth / window.innerHeight > 1;

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

  ngAfterViewInit(): void {
    document.getElementsByTagName('button')[0].className = 'page active';
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => {});
  }

  private changeBackground() {
    if (window.innerWidth / window.innerHeight < 1) {
      this.isDesktop = false;
      if (window.innerWidth >= 768) {
        this.body.style.backgroundImage = 'url(./assets/technology/background-technology-tablet.jpg)'
      } else {
        this.body.style.backgroundImage = 'url(./assets/technology/background-technology-mobile.jpg)'
      }
    } else {
      this.isDesktop = true;
      this.body.style.backgroundImage = 'url(./assets/technology/background-technology-desktop.jpg)'
    }
  }

  public changePage(e: MouseEvent, i: number) {
    const pages = document.getElementsByTagName('button');
    for (let i = 0; i < pages.length; i++) {
      pages[i].className = 'page';
    }

    const page = e.currentTarget as HTMLButtonElement;
    page.className = 'page active';

    this.currentTechnology = this.technologies[i]
  }
}
