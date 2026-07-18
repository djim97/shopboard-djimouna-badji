import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  lienActif = signal('Accueil');
  recherche = signal('');

  changerLien(lien: string): void {
    this.lienActif.set(lien);
  }

  onRecherche(event: Event): void {
    const valeur = (event.target as HTMLInputElement).value;
    this.recherche.set(valeur);
  }
}