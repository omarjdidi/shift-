import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/main/main.component').then(c => c.MainComponent) },
  { path: 'agence', loadComponent: () => import('./pages/agence/agence.component').then(c => c.AgenceComponent) },
  { path: 'nos-realisations', loadComponent: () => import('./pages/nos-realisations/nos-realisations.component').then(c => c.NosRealisationsComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent) },
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent) },
  { path: 'register', loadComponent: () => import('./auth/register/register.component').then(c => c.RegisterComponent) }





];
