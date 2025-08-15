import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-voice-to-text',
  standalone: true,
  imports: [
    NgIf,
    TranslatePipe
  ],
  templateUrl: './voice-to-text.component.html',
  styleUrl: './voice-to-text.component.scss'
})
export class VoiceToTextComponent {
  selectedFile: File | null = null;

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const dt = event.dataTransfer;
    const files = dt?.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    }
  }


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement | null;
    const files = input?.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    }
  }

}
