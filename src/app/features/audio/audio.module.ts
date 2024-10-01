import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPageComponent } from './audio-page/audio-page.component';
import {LayoutModule} from "../../layout/layout.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    AudioPageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
  ]
})
export class AudioModule { }
