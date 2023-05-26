import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  ngOnInit(): void {
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
}
