import { Injectable, computed, effect, signal } from '@angular/core';
import { ProduitVm } from '../models/produit.vm';
import { PanierArticle } from '../models/produit.vm';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private _articles = signal<PanierArticle[]>([]);

  // Lecture seule exposée aux composants
  articles = this._articles.asReadonly();

  // Signaux calculés
  nombreArticles = computed(() =>
    this._articles().reduce((total, a) => total + a.quantite, 0)
  );

  sousTotal = computed(() =>
    this._articles().reduce((total, a) => total + a.produit.prix * a.quantite, 0)
  );

  livraison = computed(() => (this.sousTotal() > 50000 ? 0 : 2500));

  total = computed(() => this.sousTotal() + this.livraison());

  totalFormate = computed(
    () =>
      new Intl.NumberFormat('fr-SN', { maximumFractionDigits: 0 }).format(
        this.total()
      ) + ' XOF'
  );

  constructor() {
    // Charger depuis localStorage au démarrage
    const sauvegarde = localStorage.getItem('panier');
    if (sauvegarde) {
      this._articles.set(JSON.parse(sauvegarde));
    }

    // Synchroniser dans localStorage à chaque changement
    effect(() => {
      localStorage.setItem('panier', JSON.stringify(this._articles()));
    });
  }

  ajouter(produit: ProduitVm): void {
    this._articles.update((articles) => {
      const existant = articles.find((a) => a.produit.id === produit.id);
      if (existant) {
        return articles.map((a) =>
          a.produit.id === produit.id
            ? { ...a, quantite: a.quantite + 1 }
            : a
        );
      }
      return [...articles, { produit, quantite: 1 }];
    });
  }

  retirer(produitId: string): void {
    this._articles.update((articles) =>
      articles
        .map((a) =>
          a.produit.id === produitId
            ? { ...a, quantite: a.quantite - 1 }
            : a
        )
        .filter((a) => a.quantite > 0)
    );
  }

  vider(): void {
    this._articles.set([]);
  }

 
}