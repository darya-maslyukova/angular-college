import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Langs } from '../enums/langs.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-remote';

  constructor(
    private translate: TranslateService
  ) {
    if (localStorage.getItem('langApp') !== null) {
      const lang = localStorage.getItem('langApp');
      translate.use(JSON.parse(lang));
    } else {
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/he|en/) ? browserLang : Langs.EN);
    }

    this.translate.addLangs([Langs.EN, Langs.HE]);
  }
}
