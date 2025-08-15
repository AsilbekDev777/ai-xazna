import {Component, Input, Output,EventEmitter} from '@angular/core';
import {SvgIconComponent} from '../../../utils/svg-icon/svg-icon.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    RouterLink,
    RouterLinkActive,
    NgIf,
    TranslatePipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    {
      label:'sidebar.MAINPAGE',
      icon:'home',
      path:'',
    },
    {
      label:'sidebar.CHATBOT',
      icon:'chat',
      path:'chat-bot',
    },
    {
      label:'sidebar.TEXTTOVOICE',
      icon:'textToVoice',
      path:'text-to-voice',
    },
    {
      label:'sidebar.VOICETOTEXT',
      icon:'voiceToText',
      path:'voice-to-text',
    },
    {
      label:'sidebar.VOICEIDENTITY',
      icon:'microphone',
      path:'voice-identity',
    },
    {
      label:'sidebar.PROTOKOL',
      icon:'protocol',
      path:'protokol',
    },
    {
      label:'sidebar.BALANCE',
      icon:'balance',
      path:'balance',
    },
    {
      label:'sidebar.SUPPORT',
      icon:'support',
      path:'support',
    },
    {
      label:'sidebar.CUSTOMBOTS',
      icon:'custom',
      path:'custom-bots',
    },
    {
      label:'sidebar.SETTINGS',
      icon:'settings',
      path:'settings',
    },
  ]
  activeIndex: number | null = null;
  setActive(index: number) {
    this.activeIndex = index;
  }


  @Input() miniVariant:boolean = false;
  @Output() onMiniVariant:EventEmitter<boolean> = new EventEmitter<boolean>();
  toggleCollapsed() {
    this.miniVariant = !this.miniVariant;
    this.onMiniVariant.emit(this.miniVariant);
  }
}
