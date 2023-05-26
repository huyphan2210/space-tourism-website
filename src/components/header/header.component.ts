import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header implements AfterViewInit {
  constructor(private router: Router) {};

  @ViewChild('homePage') homePage?: ElementRef<HTMLAnchorElement>;

  @ViewChild('destinationPage') destinationPage?: ElementRef<HTMLAnchorElement>;

  @ViewChild('crewPage') crewPage?: ElementRef<HTMLAnchorElement>;

  @ViewChild('technologyPage') technologyPage?: ElementRef<HTMLAnchorElement>;

  @ViewChild('nav') nav?: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    switch (this.router.url.replace('/', '')) {
      case 'destination':
        this.destinationPage?.nativeElement.setAttribute('class', 'active');
        break;
      case 'crew':
        this.crewPage?.nativeElement.setAttribute('class', 'active');
        break;
      case 'technology':
        this.technologyPage?.nativeElement.setAttribute('class', 'active');
        break;
      default:
        this.homePage?.nativeElement.setAttribute('class', 'active');
    }
  }

  public changeActivePage(e: MouseEvent) {
    const tab = e.currentTarget as HTMLAnchorElement;

    switch (tab) {
      case this.homePage?.nativeElement: {
        this.homePage?.nativeElement.setAttribute('class', 'active');
        this.crewPage?.nativeElement.setAttribute('class', '');
        this.technologyPage?.nativeElement.setAttribute('class', '');
        this.destinationPage?.nativeElement.setAttribute('class', '');
        break;
      }
      case this.destinationPage?.nativeElement: {
        this.homePage?.nativeElement.setAttribute('class', '');
        this.crewPage?.nativeElement.setAttribute('class', '');
        this.technologyPage?.nativeElement.setAttribute('class', '');
        this.destinationPage?.nativeElement.setAttribute('class', 'active');
        break;
      }
      case this.crewPage?.nativeElement: {
        this.homePage?.nativeElement.setAttribute('class', '');
        this.crewPage?.nativeElement.setAttribute('class', 'active');
        this.technologyPage?.nativeElement.setAttribute('class', '');
        this.destinationPage?.nativeElement.setAttribute('class', '');
        break;
      }
      case this.technologyPage?.nativeElement: {
        this.homePage?.nativeElement.setAttribute('class', '');
        this.crewPage?.nativeElement.setAttribute('class', '');
        this.technologyPage?.nativeElement.setAttribute('class', 'active');
        this.destinationPage?.nativeElement.setAttribute('class', '');
        break;
      }
    }
  }

  public openMenu() {
    if (this.nav) {
      const nav = this.nav.nativeElement;
      nav.style.display = 'block';
      setTimeout(() => {
        nav.style.opacity = '1';
        nav.style.transform = 'translate(-100%)';
      }, 0)
    }

  }

  public closeMenu() {
    if (this.nav) {
      const nav = this.nav.nativeElement;
      this.nav.nativeElement.style.opacity = '';
      this.nav.nativeElement.style.transform = '';
      setTimeout(() => {
        nav.style.display = '';
      }, 1000)
    }
  }

}
