import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AudioPageComponent} from "./features/audio/audio-page/audio-page.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AppComponent },
  { path: 'audio', component: AudioPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
