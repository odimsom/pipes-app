import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes - Basic',
    loadComponent: () => import('./pages/basic-pages/basic-pages.component'),
  },

  {
    path: 'numbers',
    title: 'Pipes - Numbers',
    loadComponent: () => import('./pages/number-page/number-page.component'),
  },

  {
    path: 'uncommon',
    title: 'Pipes - Uncommon',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component'),
  },

  {
    path: 'custom',
    title: 'Pipes - Custom',
    loadComponent: () => import('./pages/custom-page/custom-page.component'),
  },

  {
    path: '**',
    redirectTo: 'basic',
  }
];
