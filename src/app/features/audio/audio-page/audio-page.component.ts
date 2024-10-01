import { Component } from '@angular/core';
import {AudioService} from "./audio.service";

@Component({
  selector: 'app-audio-page',
  templateUrl: './audio-page.component.html',
  styleUrl: './audio-page.component.css',
  providers: [AudioService]
})
export class AudioPageComponent {

}
