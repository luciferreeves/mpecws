import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const visibilityPreferences = localStorage.getItem('visibilityPreferences');
    if (!visibilityPreferences) {
      localStorage.setItem('visibilityPreferences', 'light');
      this.setTheme();
    } else {
      this.setTheme();
    }

  }

  setTheme() {
    const visibilityPreferences = localStorage.getItem('visibilityPreferences');
    if (visibilityPreferences === 'dark') {
      $('.themeableComponent').addClass('inverted');
      $('.themedComponent').addClass('dark');
    } else {
      $('.themeableComponent').removeClass('inverted');
      $('.themedComponent').removeClass('dark');
    }
  }

  toggleDarkTheme() {
    const visibilityPreferences = localStorage.getItem('visibilityPreferences');
    if (visibilityPreferences === 'dark') {
      localStorage.setItem('visibilityPreferences', 'light');
      this.setTheme();
    } else {
      localStorage.setItem('visibilityPreferences', 'dark');
      this.setTheme();
    }
  }

  toggleSidebar() {
    $('.mobileMenu').toggle();
    $('body, html').toggleClass('noscroll');
  }

}
