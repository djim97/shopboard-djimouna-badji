import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ProduitService } from '../../core/services/produit';
import { toProduitVm } from '../../shared/utils/mappers';

@Component({
  selector: 'app-produit-detail',
  imports: [],
  templateUrl: './produit-detail.html',
  styleUrl: './produit-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProduitDetail {
  private produitService = inject(ProduitService);
  private router = inject(Router);

  // Le paramètre :id de l'URL, injecté directement grâce à withComponentInputBinding()
  id = input.required<string>();

  private produitsDto = toSignal(this.produitService.getAll(), { initialValue: [] });

  produit = computed(() => {
    const vms = this.produitsDto().map(toProduitVm);
    return vms.find((p) => p.id === this.id());
  });

  retour(): void {
    this.router.navigate(['/produits']);
  }
}