import { NgModule } from "@angular/core";

import { Header } from "./header/header.component";
import { RouterLink } from "@angular/router";
@NgModule({
  imports: [
    RouterLink
  ],
  declarations: [
    Header
  ],
  exports: [
    Header
  ]
})

export class ComponentsModule {}
