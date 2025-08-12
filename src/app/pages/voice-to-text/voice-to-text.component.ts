import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-voice-to-text',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './voice-to-text.component.html',
  styleUrl: './voice-to-text.component.scss'
})
export class VoiceToTextComponent {

}
