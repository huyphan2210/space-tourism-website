import { NgModule } from "@angular/core";

import { HomePage } from "./home/home.page";
import { DestinationPage } from "./destination/destination.page";
import { CrewPage } from "./crew/crew.page";
import { TechnologyPage } from "./technology/technology.page";

@NgModule({
  declarations: [
    HomePage,
    DestinationPage,
    CrewPage,
    TechnologyPage
  ],
  exports: [
    HomePage,
    DestinationPage,
    CrewPage,
    TechnologyPage
  ]
})

export class PagesModule {}