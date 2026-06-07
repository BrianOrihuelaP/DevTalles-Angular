import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent // reedirigo al primer path
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent // reedirigo al primer path
  },
  // !Para redireccionar a un componente en especifico si se navega por cualquier ruta que no sean las anteriores
  {
    path: '**',
    redirectTo: '' // reedirigo al primer path
  }
];
