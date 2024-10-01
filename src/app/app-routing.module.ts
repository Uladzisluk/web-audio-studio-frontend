import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AudioRoutingModule} from "./features/audio/audio-routing.module";
import {MainComponent} from "./layout/main/main.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AudioRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
