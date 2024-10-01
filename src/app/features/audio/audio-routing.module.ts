import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AudioPageComponent} from "./audio-page/audio-page.component";

const routes: Routes = [
  {path: 'audio', component: AudioPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioRoutingModule { }
