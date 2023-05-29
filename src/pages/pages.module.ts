import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HomePage } from "./home/home.page";
import { DestinationPage } from "./destination/destination.page";
import { CrewPage } from "./crew/crew.page";
import { TechnologyPage } from "./technology/technology.page";

import { DestinationContent } from "src/components/main/destination-content/destination-content.component";

@NgModule({
  imports: [
    RouterLink,
    CommonModule
  ],
  declarations: [
    HomePage,
    DestinationPage,
    CrewPage,
    TechnologyPage,
    DestinationContent
  ],
  exports: [
    HomePage,
    DestinationPage,
    CrewPage,
    TechnologyPage,
    DestinationContent
  ]
})

export class PagesModule {}
