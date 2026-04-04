import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  host: {
    class: 'site-navbar',
    '[class.is-scrolled]': 'isScrolled()',
    '(window:scroll)': 'onWindowScroll()'
  },
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  protected readonly isScrolled = signal(false);

  protected onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 48);
  }
}
