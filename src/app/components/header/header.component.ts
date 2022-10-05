import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Langs } from '../../../enums/langs.enum';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  langs = ['English', 'עִברִית'];

  constructor(
    private ls: LanguageService,
    public translate: TranslateService
  ) {
    if (localStorage.getItem('langApp') !== null) {
      const lang = localStorage.getItem('langApp');
      translate.use(JSON.parse(lang));
    } else {
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/he|en/) ? browserLang : Langs.EN);
    }

  }

  ngOnInit(): void {
  }

  onLangChange(lang): void {
    this.ls.lang = lang;
    this.translate.use(lang);
  }

}
