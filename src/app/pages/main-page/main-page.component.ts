import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
