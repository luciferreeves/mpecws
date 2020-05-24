import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
