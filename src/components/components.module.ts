import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Header } from "./header/header.component";

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
