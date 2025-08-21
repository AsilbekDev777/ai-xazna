import {Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-voice-identity',
  standalone: true,
  imports: [],
  templateUrl: './voice-identity.component.html',
  styleUrl: './voice-identity.component.scss'
})
export class VoiceIdentityComponent implements OnInit {
 @ViewChild('waveform', { static: true }) waveformRef!: ElementRef;
  wavesurfer!: WaveSurfer;
  isPlaying = false;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.wavesurfer = WaveSurfer.create({
        container: this.waveformRef.nativeElement,
        waveColor: '#A8A8A8',
        progressColor: '#3DBD7D',
        height: 80,
      });

      this.wavesurfer.load('/assets/audio/sample.mp3');
    }
  }

  togglePlay() {
    if (this.isBrowser) {
      this.wavesurfer.playPause();
      this.isPlaying = !this.isPlaying;
    }
  }
}
