import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from 'src/pages/home/home.page';
import { DestinationPage } from 'src/pages/destination/destination.page';
import { CrewPage } from 'src/pages/crew/crew.page';
import { TechnologyPage } from 'src/pages/technology/technology.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'destination', component: DestinationPage },
  { path: 'crew', component: CrewPage },
  { path: 'technology', component: TechnologyPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
