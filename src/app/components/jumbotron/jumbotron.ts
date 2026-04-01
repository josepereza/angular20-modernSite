import { Component, input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  imports: [],
  templateUrl: './jumbotron.html',
  styleUrl: './jumbotron.css'
})
export class Jumbotron {
 title = input<string>('Impulsa tu próximo proyecto');
  lead  = input<string>('Soluciones rápidas, seguras y escalables que se adaptan a tu negocio.');
  cta   = input<string>('Descubre más');
  image = input<string>('/vide-impulso3.jpeg');
  alt   = input<string>('Imagen principal');
}
