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
    { label: 'uz', value: 'uzbek', icon: 'uzbek' }
  ];
  selectedLanguage = this.languages[0];

  @Input() miniVariant: boolean = false;
  @Output() onMiniVariant: EventEmitter<boolean> = new EventEmitter<boolean>();

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
      // SSR yoki Node.js muhiti
      this.translate.use(this.selectedLanguage.label);
    }
  }
  toggleCollapsed() {
    this.miniVariant = !this.miniVariant;
    this.onMiniVariant.emit(this.miniVariant);
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
}
