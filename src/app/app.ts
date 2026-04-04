import { Component, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { FeaturePill } from './components/feature-pill/feature-pill';
import { Jumbotron } from './components/jumbotron/jumbotron';
import { JumbotronCenter } from './components/jumbotron-center/jumbotron-center';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Features, FeaturePill, Jumbotron, JumbotronCenter, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20-modern-site');
}
