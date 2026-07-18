import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ProduitVm } from '../../core/models/produit.vm';

@Component({
  selector: 'app-produit-card',
  imports: [],
  templateUrl: './produit-card.html',
  styleUrl: './produit-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProduitCard {
  // 1. input obligatoire : reçoit un ProduitVm du parent
  produit = input.required<ProduitVm>();

  // 2. output : émet le produit lors d'un clic
  ajouterAuPanier = output<ProduitVm>();

  // 3. méthode appelée par le bouton
  onAjouter(): void {
    this.ajouterAuPanier.emit(this.produit());
  }
}