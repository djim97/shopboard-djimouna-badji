import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'produits',
    loadComponent: () =>
      import('./features/produit-list/produit-list').then((m) => m.ProduitList),
  },
  {
    path: 'produits/nouveau',
    loadComponent: () =>
      import('./features/produit-form/produit-form').then((m) => m.ProduitForm),
  },
  {
    path: 'produits/:id',
    loadComponent: () =>
      import('./features/produit-detail/produit-detail').then(
        (m) => m.ProduitDetail
      ),
  },
  {
    path: 'panier',
    loadComponent: () =>
      import('./features/panier/panier').then((m) => m.Panier),
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/admin/admin').then((m) => m.Admin),
  },
  {
    path: '**',
    redirectTo: '',
  },
];