import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../../core/services/produit';
import { ProduitDto } from '../../core/models/produit.dto';

@Component({
  selector: 'app-produit-form',
  imports: [ReactiveFormsModule],
  templateUrl: './produit-form.html',
  styleUrl: './produit-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProduitForm {
  private produitService = inject(ProduitService);
  private router = inject(Router);

  categories = ['Informatique', 'Accessoires', 'Vêtements', 'Alimentation'];

  form = new FormGroup({
    nom: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    }),
    prix: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
    stock: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.min(0)],
    }),
    categorie: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = {
      nom: this.form.getRawValue().nom,
      prix: this.form.getRawValue().prix,
      stock: this.form.getRawValue().stock,
      categorie: this.form.getRawValue().categorie as ProduitDto['categorie'],
    };

    this.produitService.creer(data).subscribe(() => {
      this.router.navigate(['/produits']);
    });
  }
}