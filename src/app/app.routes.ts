import { Routes } from '@angular/router';

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
    loadComponent: () =>
      import('./features/admin/admin').then((m) => m.Admin),
  },
  {
    path: '**',
    redirectTo: '',
  },
];