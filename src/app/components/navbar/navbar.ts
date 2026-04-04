import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, inject, PLATFORM_ID, signal } from '@angular/core';

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
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly isScrolled = signal(false);

  constructor() {
    afterNextRender(() => {
      this.updateScrolledState();
    });
  }

  protected onWindowScroll(): void {
    this.updateScrolledState();
  }

  private updateScrolledState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isScrolled.set(window.scrollY > 48);
  }
}
