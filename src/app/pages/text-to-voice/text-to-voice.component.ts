import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-text-to-voice',
  standalone: true,
  imports: [
    NgIf,
    TranslatePipe
  ],
  templateUrl: './text-to-voice.component.html',
  styleUrl: './text-to-voice.component.scss'
})
export class TextToVoiceComponent {
  isActive = false;

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim();
    this.isActive = value.length > 0;
  }
}
