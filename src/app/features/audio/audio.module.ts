import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPageComponent } from './audio-page/audio-page.component';
import {LayoutModule} from "../../layout/layout.module";
import { AudioRoutingModule } from './audio-routing.module';



@NgModule({
  declarations: [
    AudioPageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AudioRoutingModule,
  ]
})
export class AudioModule { }
