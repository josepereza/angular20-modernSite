import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Story } from './components/story/story';
import { Features } from './components/features/features';
import { FeaturePill } from './components/feature-pill/feature-pill';
import { Jumbotron } from './components/jumbotron/jumbotron';
import { JumbotronCenter } from './components/jumbotron-center/jumbotron-center';

@Component({
  selector: 'app-root',
  imports: [Hero,Features,FeaturePill,Jumbotron,JumbotronCenter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20-modern-site');
}
