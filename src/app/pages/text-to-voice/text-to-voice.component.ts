import {Component, inject} from '@angular/core';
import {NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {TextToVoiceService} from './services/text-to-voice.service';

@Component({
  selector: 'app-text-to-voice',
  standalone: true,
  imports: [
    NgIf,
    TranslatePipe,
    FormsModule
  ],
  templateUrl: './text-to-voice.component.html',
  styleUrl: './text-to-voice.component.scss'
})
export class TextToVoiceComponent {
  textInput: string = '';
  audioUrl: string | null = null;
  isActive = false;
    sentText: string | null = null;

  textToVoiceServices = inject(TextToVoiceService);

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim();
    this.isActive = value.length > 0;
  }

  sendText() {
    if (!this.textInput.trim()) return;
    this.sentText = this.textInput;

    this.textToVoiceServices.postText(this.textInput).subscribe({
      next: (res: Blob) => {
        this.audioUrl = URL.createObjectURL(res);
      },
      error: (err) => {
        console.error("API xatolik:", err);
      }
    });

    this.textInput = '';
    this.isActive = false;
    }
}
