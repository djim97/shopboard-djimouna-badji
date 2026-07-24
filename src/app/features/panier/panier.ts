import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from '../../core/services/panier';

@Component({
  selector: 'app-panier',
  imports: [],
  templateUrl: './panier.html',
  styleUrl: './panier.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Panier {
  private panierService = inject(PanierService);
  private router = inject(Router);

  articles = this.panierService.articles;
  nombreArticles = this.panierService.nombreArticles;
  sousTotal = this.panierService.sousTotal;
  livraison = this.panierService.livraison;
  total = this.panierService.total;
  totalFormate = this.panierService.totalFormate;

  retirer(produitId: string): void {
    this.panierService.retirer(produitId);
  }

  vider(): void {
    this.panierService.vider();
  }

  continuer(): void {
    this.router.navigate(['/produits']);
  }
}