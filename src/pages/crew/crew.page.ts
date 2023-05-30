import { Component, AfterViewInit} from "@angular/core";
import data from '../../data.json';

@Component({
  selector: 'crew-page',
  templateUrl: './crew.page.html',
  styleUrls: ['./crew.page.scss']
})
export class CrewPage implements AfterViewInit{
  crew = data.crew;

  currentCrew = this.crew[0];

  ngAfterViewInit(): void {
    document.getElementsByClassName('page')[0].setAttribute('class', 'page active');
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
}
