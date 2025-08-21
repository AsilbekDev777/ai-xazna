import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { SvgIconComponent } from '../../../utils/svg-icon/svg-icon.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    SvgIconComponent,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isOpen = false;

  versions = [
    { label: '2.1v Flash', value: '2.1' },
    { label: '2.0v Speed', value: '2.0' },
    { label: '1.9v Basic', value: '1.9' }
  ];
  selectedVersion = this.versions[0];

  isLanguages = false;

  languages = [
    { label: 'ru', value: 'Rus', icon: 'Rus' },
    { label: 'en', value: 'Eng', icon: 'Eng' },
    { label: 'uz', value: 'Uzb', icon: 'Uzb' }
  ];
  selectedLanguage = this.languages[0];

  constructor(private translate: TranslateService) {

  }
  ngOnInit() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        this.selectedLanguage = this.languages.find(l => l.label === savedLang) || this.languages[0];
        this.translate.use(savedLang);
      } else {
        this.translate.use(this.selectedLanguage.label);
      }
    } else {
      this.translate.use(this.selectedLanguage.label);
    }
  }
  toggleLanguage() {
    this.isLanguages = !this.isLanguages;
  }

  selectLanguage(language: any) {
    this.selectedLanguage = language;
    this.isLanguages = false;
    this.translate.use(language.label);
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', language.label);
      }
  }

  selectVersion(version: any) {
    this.selectedVersion = version;
    this.isOpen = false;
  }

  @Input() mobileVariant:boolean = false;
  @Output() onMobileVariant:EventEmitter<boolean> = new EventEmitter<boolean>();
  toggleSidebar() {
    if (typeof window !== 'undefined' && window.innerWidth <= 1024) {
      const next = !this.mobileVariant;
      this.mobileVariant = next;
      this.onMobileVariant.emit(next);
    }
  }
}
