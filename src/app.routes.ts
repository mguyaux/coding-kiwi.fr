import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'methode',
    loadComponent: () => import('./pages/method.component').then(m => m.MethodComponent)
  },
  {
    path: 'projets',
    loadComponent: () => import('./pages/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/legal.component').then(m => m.LegalComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '' }
];
