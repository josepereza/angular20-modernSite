import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  shapes = Array.from({ length: 15 }, (_, i) => i);
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
