import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Navbar } from './shared/components/navbar/navbar';
import { ProduitList } from "./features/produit-list/produit-list";
import { ProduitService } from './core/services/produit';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, ProduitList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('shopboar-djimouna-badji');
}
