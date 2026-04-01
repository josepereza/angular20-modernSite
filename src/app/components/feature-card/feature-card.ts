import { Component,  input,  Input, signal } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css'
})
export class FeatureCard {
  /* @Input() icon: string = '🚀';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() features: string[] = [];
  @Input() buttonText: string = 'Saber más'; */

  // ✅ Usando input() signals
  icon = input<string>('🚀');
  title = input<string>('');
  description = input<string>('');
  features = input<string[]>([]);
  buttonText = input<string>('Saber más');

  handleClick() {
    console.log('Card clicked:', this.title);
  }
}
