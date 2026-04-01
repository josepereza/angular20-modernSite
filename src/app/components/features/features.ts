import { Component } from '@angular/core';
import { FeatureCard } from '../feature-card/feature-card';

@Component({
  selector: 'app-features',
  imports: [FeatureCard],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {
features = [
    {
      icon: '🚀',
      title: 'Rendimiento Ultra Rápido',
      description: 'Tecnología optimizada para máxima velocidad y eficiencia.',
      features: ['Carga instantánea', 'Respuesta en milisegundos', 'Sin lag'],
      buttonText: 'Probar Ahora'
    },
    {
      icon: '🎨',
      title: 'Diseño Excepcional',
      description: 'Interfaces hermosas y modernas que encantan a los usuarios.',
      features: ['Diseño responsive', 'Animaciones fluidas', 'UX intuitiva'],
      buttonText: 'Ver Galería'
    },
    {
      icon: '🔒',
      title: 'Seguridad Avanzada',
      description: 'Protección de nivel empresarial para tu tranquilidad.',
      features: ['Encriptación de grado militar', 'Autenticación biométrica', 'Backup automático'],
      buttonText: 'Más Info'
    }
  ];
}


