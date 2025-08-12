import { Component } from '@angular/core';
import {SvgIconComponent} from '../../../svg-icon/svg-icon.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    {
      label:'Bosh sahifa',
      icon:'home',
      path:'',
    },
    {
      label:'Chat bot ',
      icon:'chat',
      path:'chat-bot',
    },
    {
      label:'Matndan nutqqa o‘girish',
      icon:'textToVoice',
      path:'text-to-voice',
    },
    {
      label:'Nutqdan matnga o‘girish',
      icon:'voiceToText',
      path:'voice-to-text',
    },
    {
      label:'Ovozli identifikatsiya',
      icon:'microphone',
      path:'voice-identity',
    },
    {
      label:'Protokol',
      icon:'protocol',
      path:'protokol',
    },
    {
      label:'Balans',
      icon:'balance',
      path:'balance',
    },
    {
      label:'Support',
      icon:'support',
      path:'support',
    },
    {
      label:'Custom Bots',
      icon:'custom',
      path:'custom-bots',
    },
    {
      label:'Settings',
      icon:'settings',
      path:'settings',
    },
  ]
  activeIndex: number | null = null;
  setActive(index: number) {
    this.activeIndex = index;
  }
}
