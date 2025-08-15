import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  constructor(private translate: TranslateService) {
    // Qo'llab-quvvatlanadigan tillar
    translate.addLangs(['en', 'uz']);

    // Brauzer tilini aniqlash yoki default til
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|uz/) ? browserLang : 'en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
