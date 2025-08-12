import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isOpen = false;

  // Hozircha statik versiyalar
  versions = [
    { label: '2.1v Flash', value: '2.1' },
    { label: '2.0v Speed', value: '2.0' },
    { label: '1.9v Basic', value: '1.9' }
  ];

  selectedVersion = this.versions[0];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectVersion(version: any) {
    this.selectedVersion = version;
    this.isOpen = false;
  }
}
